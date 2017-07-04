var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "surgeslc";
var GITHUB_TOKEN = "4f7d68aed0e41c520272e7e14f55035f395fcaec";



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

  getRepoContributors("jquery", "jquery", function(err, result) {
});
//getRepoContributors("surgeslc", "request");