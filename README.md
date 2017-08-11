# GitHub Avatar Downloader

## Introduction

This is a project by [Lawrence Surges](https://github.com/surgeslc) for a Web Development Bootcamp conducted by [Lighthouse Labs](lighthouselabs.ca).

## Problem Statement

Given a GitHub profile name and repository, download contributors' profile images and save them to a subdirectory \avatars.

## Expected Usage

The program is run from the command line, in the following manner – `node download_avatars.js <owner> <repository>` – where owner corresponds to a GitHub profile and repository is one of their repositories. So to download avatars of contributors to [Lighthouse Labs' Jungle Rails](https://github.com/lighthouse-labs/jungle-rails), one would enter:

`node download_avatars.js lighthouse-labs jungle-rails`

On completion, the program will exit: a user should see the same command prompt as before it ran.

The program doesn't currently handle situations in which a user fails to enter both a repoOwner and repoName.

## Example with Comments

*Command Line Entered at Prompt:*

`vagrant [github-avatar-downloader]> node download_avatars.js lighthouse-labs jungle-rails`

*Output, including Downloading... for each avatar being downloaded:*

`Welcome to the GitHub Avatar Downloader!`
`Connecting to GitHub`
`Downloading...`
`Downloading...`
`Downloading...`
`Downloading...`
`Downloading...`

*On completion, the user sees a prompt:*
`vagrant [github-avatar-downloader]>`

*Running `ls avatars` confirms the avatars downloaded, then the prompt returns:*
`vagrant [github-avatar-downloader]> ls avatars`
`adrianmcli.jpg  donburks.jpg  interlock.jpg  kvirani.jpg  vaz.jpg`
`vagrant [github-avatar-downloader]>`

## Technologies

This JavaScript application:
- processes command-line input and accesses information stored in a .env file,
- uses `request` to connect via the GitHub API and download contributors' avatars,
- uses `fs` to write to the file system, and
- prints to the console as it downloads.