//This function is for auto confirmation message part
//It confirms user through verification S3 bucket and redirect to confirmation page
//with some user informations

exports.handler = async event => {
  // Define the URL that you want the user to be directed to after verification is complete
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;
    let email = event.request.userAttributes.email
    let uid = event.request.userAttributes.sub
    let password = event.request.userAttributes['custom:password']
    console.log(event)
    const redirectUrl = `https://dev.d29hxncvvmsged.amplifyapp.com/confirmation/?id=${uid}&email=${email}&password=${password}`;
    const resourcePrefix = process.env.RESOURCENAME.split('CustomMessage')[0];

    const hyphenRegions = [
      'us-east-1',
      'us-west-1',
      'us-west-2',
      'ap-southeast-1',
      'ap-southeast-2',
      'ap-northeast-1',
      'eu-west-1',
      'sa-east-1',
    ];

    const separator = hyphenRegions.includes(region) ? '-' : '.';

    const payload = Buffer.from(
      JSON.stringify({
        userName,
        redirectUrl,
        region,
        clientId,
      }),
    ).toString('base64');
    const bucketUrl = `http://${resourcePrefix}verificationbucket-${process.env.ENV}.s3-website${separator}${region}.amazonaws.com`;
    const url = `${bucketUrl}/?data=${payload}&code=${codeParameter}`;
    const message = `${process.env.EMAILMESSAGE}. \n ${url}`;
    event.response.smsMessage = message;
    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = message;
    console.log('event.response', event.response);
  }

  return event;
};