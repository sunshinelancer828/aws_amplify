//Check whether user agreed on terms or not 
//and if not return error

var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()
exports.handler = async (event) => {
  const params = {
    TableName: process.env.USERTABLE,
    Key: { 'id': { S: event.request.userAttributes.sub },},
  }
  let result=await ddb.getItem(params).promise()
  if(result.Item.term==='0')
  {
    return Promise.reject(new Error('You must agree on Terms of Service'))
  }
};
