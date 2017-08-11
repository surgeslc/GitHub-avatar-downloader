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

function checkCLInput(param1, param2) {
  if (param2 === null || param1 === null) {
    console.log("The GitHub Avatar Downloader needs you to specify both a repository owner and repository.");
    console.log("To download avatars, your command line must be in the form of:");
    console.log("node download_avatars.js repoOwner repoName");
    console.log("");
    console.log("The program will now terminate, but please try again!");
    // Need needs a way to terminate ;-)
  }
}

// Check input
checkCLInput(repoOwner, repoName);


// Make new 'avatar' folder, and handle any error
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatars");
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}();


function getRepoContributors(repoOwner, repoName, cb) {
// GitHub requires a user-agent, or will throw an error
var options = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'GitHub Avatar Downloader'
  }
};

// Request data
request.get(options, cb)
console.log("Connecting to GitHub");

}

function downloadImageByUrl(url, filePath){
  request.get(url)
       .on('error', function (err) {
         throw console.log('Sorry, that didn\'t work', err);
       })
       .on('response', function (response) {
          if (response.statusCode === 200) {
            console.log("Downloading...");
          }

       })
       .pipe(fs.createWriteStream(filePath));

}


getRepoContributors(repoOwner, repoName, function(err, result) {

    if (err) {
      console.log("Errors:", err);
    }
    var resultObj = JSON.parse(result.body);

    resultObj.forEach((item) => downloadImageByUrl(item.avatar_url, folderPath + item.login + '.jpg'));
});

