var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "surgeslc";
var GITHUB_TOKEN = "4f7d68aed0e41c520272e7e14f55035f395fcaec";

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);


}

  getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
//getRepoContributors("surgeslc", "request");



// USAGE
// Should be executed from the command line, eg
// node download_avatars.js jquery jquery
// Any valid repo-owner + repo combination can be used, eg
// node download_avatars.js nodejs node

// FUNCTIONAL REQUIREMENTS
// I want a folder with the avatars of all of my github project's contributors
// Given: I have node installed, I am in the shell, I have your file in my current folder
// When: I execute your file using node, providing a github user and repository
// as command-line arguments For example: $ node download_avatars.js nodejs node
// Then: I should find a folder called avatars in my current directory
// The avatars folder should contain images corresponding to the avatars of the contributors of the repo
// The name of each image file should be the contributor's name and the file extension (ex. johnny.png)

// IMPLEMENTATION REQUIREMENTS
// uses 'request' library to make the HTTP requests
// uses git for version control