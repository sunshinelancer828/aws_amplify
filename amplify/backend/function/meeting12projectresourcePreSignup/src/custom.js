//Check whether user is space admin or not and whether has permission and if not
//returns error

var aws = require('aws-sdk');
aws.config.update({ region: process.env.REGION })
let docClient = new aws.DynamoDB.DocumentClient()
exports.handler = async (event) => {
  var organization = event.request.userAttributes['custom:organization']
  var permission = event.request.userAttributes['custom:permission']
  console.log(process.env.SPACEADMIN)
  if(permission==='0')
  {
    const params = {
      // Set the projection expression, which are the attributes that you want.
      TableName: process.env.SPACEADMIN,
    };
    try{
      let result=await docClient.scan(params).promise()
      for (const item of result.Items)
      {
        if(item.organization===organization)
        {
          return Promise.reject(new Error('You have no permission to access'))
        }
      }
    }catch(err){
    console.log(err)
    }
  }
   console.log("end")
};