# Welcome to coding with Stephen

Hello, my name is Stephen, a software engineer from the UK, I've spent the last several years working for a variety of organisations, small and large, writing software and building scalable systems.

I've had the immense pleasure of working with and learning from some incredibly talented engineers, this is my means of paying it forward by helping those learning about software engineering, and those looking to up-skill in different areas.

Within this repo you'll find a set of JavaScript challenges inspired by numerous challenges I've undertaken over the course of my career to further my knowledge, these are going to be aimed at those with no experience, ranging up to those looking to take on moderately complex challenges, with accompanying videos detailing solutions on my [YouTube channel](https://www.youtube.com/channel/UCFBFlxUJ3ROGPiuLQG8D1kA).

For those new, I would recommend reading through the below sections on setting up your environment and installing the required software, so that when you're watching along, you can see exactly what I see.

## Setting up your IDE (Integrated Development Environment)

For all of the JavaScript challenges in this repo, we'll be using VSCode, a solid IDE with great support for JavaScript, along with a whole bunch of other languages with addons / plugins. VSCode can be downloaded for all platforms (Windows / MacOS / Linux) [here](https://code.visualstudio.com/). 

To keep things simple, we won't be using any additional addons or plugins, although you are welcome to add any you wish!

## Installing any pre-requisite software

We will keep external software / package usage to a minimum for this repo, all you'll need is:

- Node - This lets you run JavaScript on your machine, outside of a browser
  - Installing node on your machine is super simple, there are a set of instructions on the nodejs website  [Windows / MacOS](https://nodejs.org/en/download/) / [Linux](https://nodejs.org/en/download/package-manager/)
- Npm - npm is used to manage external packages, bits of code developed by other people, that you can use in your projects. This should come installed with Node, however you can find instructions on installing if for some reason you don't have it [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

I will be using the following versions:

- Node version 14.15.5 
- npm version 7.19.1

You can check your node and npm versions with the following commands `node -v` and `npm -v`

## Installing the npm packages for this repo

We will be making use of a well known package called `jest` within this repo, `jest` is a piece of technology developed by the brains at facebook, and is used for us to test our code. 

To install this package, you'll want to navigate to the root of this project within the vscode terminal (check the terminal menu at the top of vscode to open a new terminal window), by default opening this project in vscode should put you in the directory, however you can navigate around with the [cd command](https://linuxize.com/post/linux-cd-command/)

Once you're in the root of the project, run the following command `npm install`, this will install all of the packages highlighted in the `package.json` file, most notably jest.