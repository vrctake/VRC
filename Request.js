import request;
import 'request-promise';
      
var requestPromise = require('request-promise');

var user = 'irtsa';
var password = 'dufuxgkfywohkf';

var base64encodedData = Buffer.from(user + ':' + password).toString('base64');

alert(requestPromise.get({
  uri: 'https://api.vrchat.cloud/api/1/auth/user',
  headers: {
    'Authorization': 'Basic ' + base64encodedData
  },
  json: true
})
.then(function ok(jsonData) {
  console.dir(jsonData);
})
.catch(function fail(error) {
  // handle error
}));
