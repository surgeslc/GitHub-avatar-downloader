# GitHub Avatar Downloader

## Introduction

This is a project by [Lawrence Surges](https://github.com/surgeslc) for a Web Development Bootcamp conducted by [Lighthouse Labs](lighthouselabs.ca).

## Problem Statement

Given a GitHub profile name and repository, download contributors' profile images and save them to a subdirectory \avatars.

## Expected Usage

The program is run from the command line, in the following manner – `node download_avatars.js owner repository` – where owner corresponds to a GitHub profile and repository is a repository. For [Lighthouse Labs' Jungle Rails](https://github.com/lighthouse-labs/jungle-rails), one would enter:

`node download_avatars.js lighthouse-labs jungle-rails`

On completion, the program will exit: a user should see the same command prompt as before it ran.

## Technologies

This JavaScript application:
- processes command-line input and accesses information stored in a .env file,
- uses `request` to connect via the GitHub API and download contributors' avatars,
- uses `fs` to write to the file system, and
- prints to the console as it downloads.