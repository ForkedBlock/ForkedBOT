![alt text](https://github.com/ForkedBlock/ForkedBOT/blob/master/img/forkebotlogo.png "ForkedBOT logo")

# ForkedBOT
I'm a Filthy bot, but I love to party! Let's Do This!


## *Background*

As part of an ongoing effort to better engage our community of ForkedBlock, and to increase the overall experience of our content and events, our team has decided to opensource a Bot project.

ForkedBOT has 2 main objectives:

1. Create a relevant opensource/cryptocurrency bot which taps into the cryptospheres inside jokes
2. Integrate with crossplatform services to allow for a better integration between modern communications technologies

As an ongoing effort we will improve this bots README.md & other documentation to make it as easy as possible to fork, develop on, and start.

If you are interested in contributing please fell free to browse the issues or commit changes! 

This bot leverages the discord.js package utilize this documentation to learn more:

https://discord.js.org/#/docs/main/stable/general/welcome

Pre-requisites to following the exact outline below:
Git
NodeJS
npm 

First open a commandline or bash shell then `git clone` this repository into your system:

```console
foo@bar:~$ git clone https://github.com/ForkedBlock/ForkedBOT.git
```

![alt text](https://github.com/ForkedBlock/ForkedBOT/blob/master/img/gitclone.gif "git clone")

Now change into the directory you just created using th `cd` command:

```console
foo@bar:~$ cd ForkedBOT
```

Then install the the bot using `npm install`:

```console
foo@bar:~$ npm install
```

> *NOTE:* this bot requires a config.json file with

Create this config.json file using the `touch` command 

```console
foo@bar:~$ touch config.json
```
Then open the config file with your text editor or your commandline with vim or nano to insert your bot token and preferred prefix.

```console
foo@bar:~$ nano config.json
```
Paste the json into this file.

```javascript
{
    "token" : "<INSERT_YOUR_BOT_TOKEN_HERE>",
    "prefix" : "+"
}
```

From here this bot should be good to go! simply run the bot (for testing) using

```console
foo@bar:~$ node index.js
```

Easiest way to deploy on a server is to install the forever package which is pulled via the `npm` simply install it globally using this command:

```console
foo@bar:~$ npm install forever -g
```

Then start the bot using:

```console
foo@bar:~$ forever start index.js
```
This method will monitor the bot on a deployment server for you. Cosider reviewing the forever js documentation for more info.

https://www.npmjs.com/package/forever