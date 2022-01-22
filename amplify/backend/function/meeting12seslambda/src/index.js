const aws = require('aws-sdk')
aws.config.update({
  accessKeyId: 'AKIAULQQRP5A446Z3S4K',
  secretAccessKey: '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',
  region: 'us-east-2'
});
const ses = new aws.SES({ apiVersion: "2010-12-01" })

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
      console.log(streamedItem)
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const sourceEmail = streamedItem.dynamodb.NewImage.fromemail.S
      const candidateEmail = streamedItem.dynamodb.NewImage.toemail.S
      const emailid=streamedItem.dynamodb.NewImage.id.S
      const sourceid=streamedItem.dynamodb.NewImage.sourceid.S
      const directurl=`https://dev.d29hxncvvmsged.amplifyapp.com/register/?identity=${emailid}&admin=${sourceid}`
      await ses.sendEmail({
            Destination: {
              ToAddresses: [candidateEmail],
            },
            Source: sourceEmail,
            Message: {
              Subject: { Data: 'User Invitation' },
              Body: {
                Text: {
                   Charset: "UTF-8",
                   Data: ` You are invited by ${directurl}` 
                },
              },
            },
          })
          .promise().then(data => {
            console.log("email submitted to SES", data);
          })
          .catch(error => {
            return Promise.reject(new Error(error));
      });
    }
  }
  return { status: 'done' }
}