//Insert user information to User table and SpaceAdmin table if user is spaceadmin

var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()
let docClient = new aws.DynamoDB.DocumentClient()
exports.handler = async (event) => {
  let date = new Date()
  let checkflag = '0'
  var organization = event.request.userAttributes['custom:organization']
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
        checkflag='1'
      }
    }
  }catch(err){
  console.log(err)
  }
  if (event.request.userAttributes.sub) {
    let params2 = {
      Item: {
        // Items below that begin with __ are needed for DataStore. When you create an object in
        // DataStore for the first time, those fields are created automatically. If you don't have it when
        // you go update an item, it will throw and error.
        'id': { S: event.request.userAttributes.sub },
        'firstname': {S: event.request.userAttributes.family_name},
        'lastname' : {S: event.request.userAttributes.given_name},
        'organization' : {S: event.request.userAttributes['custom:organization']},
        'createdAt': { S: date.toISOString() },
        'email': { S: event.request.userAttributes.email },
      },
      TableName: process.env.SPACEADMIN
    }
    let params3 = {
      Item: {
        // Items below that begin with __ are needed for DataStore. When you create an object in
        // DataStore for the first time, those fields are created automatically. If you don't have it when
        // you go update an item, it will throw and error.
        'id': { S: event.request.userAttributes.sub },  // This is the Sub ID from AuthCognitoIdentityProvider, useful to query current user
        'name': { S: event.request.userAttributes.family_name+event.request.userAttributes.given_name },
        'firstname': {S: event.request.userAttributes.family_name},
        'lastname' : {S: event.request.userAttributes.given_name},
        'organization' : {S: event.request.userAttributes['custom:organization']},
        'createdAt': { S: date.toISOString() },
        'updatedAt': { S: date.toISOString() },
        'email': { S: event.request.userAttributes.email },
	      'term':{S:event.request.userAttributes['custom:term']},
        'role': {S: 'expert'},
	      'bio': {S:'skills'},
	      'address': {S:'street'},
	      'phonenumber': {S:'1234567890'},
	      'avatar': {S:'1.png'},
        'isadmin': {S: checkflag},
      },
      TableName: process.env.USERTABLE
    }
    if(checkflag==='0')
    {
      try{
        await ddb.putItem(params2).promise()
        console.log("Success2")
      }catch(err){
          console.log("Error2", err)
      }
    }
    try {
      await ddb.putItem(params3).promise()
      console.log("Success3")
    } catch (err) {
      console.log("Error3", err)
    }

    console.log("Success: Everything executed correctly")

  } else {
    console.log("Error: Nothing was written to DynamoDB")
  }
};