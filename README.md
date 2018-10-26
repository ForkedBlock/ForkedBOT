a
![alt text](https://github.com/ForkedBlock/ForkedBOT/blob/master/img/forkebotlogo.png "ForkedBOT logo")

# ForkedBOT
I'm a Filthy bot, but I love to party! Let's Do This!

First `git clone` this file into your system

```console
foo@bar:~$ git clone https://github.com/ForkedBlock/ForkedBOT.git
```
Then install the the bot using `npm install`

```console
foo@bar:~$ npm install
```

> this bot requires a config.json file with

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

From here this bot should be good to go! simply run the bot using

```console
foo@bar:~$ node index.js
```
