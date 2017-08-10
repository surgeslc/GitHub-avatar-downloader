console.log('Welcome to the GitHub Avatar Downloader!');


const input = process.argv.slice(2);
var repoOwner = input[0];
var repoName = input[1];

const fs = require("fs");
const request = require('request');


require('dotenv').config()
const GITHUB_USER = process.env.DB_USER;
const GITHUB_TOKEN = process.env.DB_PASS;

const folderPath = "avatars/";

// Make new 'avatar' folder, and handle any error
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatars");
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}();


function getRepoContributors(repoOwner, repoName, cb) {
  // ...
// Added in Step 5:
// Adds user-agent and moved url from within the function
var options = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'GitHub Avatar Downloader - Student Project'
  }
};

//Added in Step 5
request.get(options)
       .on('error', function (err) {
         console.log('Error ', err);
       })
       .on('response', function (response) {
          if (response.statusCode === 200) {
            console.log("Result:", response.statusCode);
          }
          if (response.statusCode !== 200) {
            console.log('Response Status Code: ', response.statusCode);
          }
       })
       .on('data', function (chunk) {
            console.log(chunk.toString());
          } )

}

  getRepoContributors("lighthouse-labs", "jungle-rails", function(err, result) {
});
//getRepoContributors("surgeslc", "request");