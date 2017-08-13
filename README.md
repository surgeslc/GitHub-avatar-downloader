# GitHub Avatar Downloader

## Introduction

This is a project by [Lawrence Surges](https://github.com/surgeslc) for a Web Development Bootcamp conducted by [Lighthouse Labs](lighthouselabs.ca).

## Problem Statement

Given a GitHub profile name and repository, download contributors' profile images and save them to a subdirectory \avatars.

### Expected Usage

The program is run from the command line, in the following manner:<br>
`node download_avatars.js <owner> <repository>`<br>
where owner corresponds to a GitHub profile and repository is one of their repositories. So to download avatars of contributors to [Lighthouse Labs' Jungle Rails](https://github.com/lighthouse-labs/jungle-rails), one would enter:<br>
`node download_avatars.js lighthouse-labs jungle-rails`

On completion, the program will exit, and the user's prompt will reappear.

<p>Any valid command line consists of four items: If there are fewer or more, a message is displayed, then the program exits gracefully. Should four items be input with an invalid repoOwner and repository combination, the program will connect to GitHub, but advise the user of invalid input and terminate gracefully, to avoid an error which would occur at line 87.</p>

### Example with Comments

*Command Line Entered at Prompt:*<br>
`vagrant [github-avatar-downloader]> node download_avatars.js lighthouse-labs jungle-rails`

*Output, including Downloading... for each avatar being downloaded:*<br>
```Welcome to the GitHub Avatar Downloader!
Connecting to GitHub
Downloading...
Downloading...
Downloading...
Downloading...
Downloading...
```

*On completion, the user sees a prompt:*<br>
`vagrant [github-avatar-downloader]>`

*Running `ls avatars` confirms the avatars downloaded, then the prompt returns:*<br>
```vagrant [github-avatar-downloader]> ls avatars
adrianmcli.jpg  donburks.jpg  interlock.jpg  kvirani.jpg  vaz.jpg
vagrant [github-avatar-downloader]>
```

## Techniques

This JavaScript application:
- processes command-line input and accesses information stored in a .env file,
- checks the number of items entered on the command line, which should be four,
- uses `request` to connect via the GitHub API and download contributors' avatars,
- uses `fs` to write to the file system,
- prints to the console as it downloads, and
- handles cases in which a user enters an invalid combination of repoOwner and repository, like `node download_avatars.js surgeslc dummy`.