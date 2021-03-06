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

function checkCLInput(cli) {
  // process.argv contains command line input
  // For valid input, its length is 4
  // For anything else, advise the user and exit
  if (process.argv.length <= 3 || process.argv.length >= 5) {
    console.log("The app requires a repository owner and repository.");
    console.log("A valid command line takes the form of:");
    console.log("node download_avatars.js repoOwner repoName");
    console.log("Please try again!");
    process.exit(-1);
  }
}

// Check user input at command line
checkCLInput(process.argv);


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
         throw console.log("Sorry, that didn\'t work", err);
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
    // Handle invalid input: Advise user and exit gracefully avoiding 'resultsObj.forEach is not a function' error
    if (resultObj.length === undefined) {
      console.log("Sorry, the combination of repoOwner and repoName that you entered was invalid. Please try again!");
      process.exit(-1);
    }

    resultObj.forEach((item) => downloadImageByUrl(item.avatar_url, folderPath + item.login + '.jpg'));
});

