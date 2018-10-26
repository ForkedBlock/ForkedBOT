const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
  console.log("I'm a filthy bot, but I love to party! Let's Do this shit!");
});

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  }

if(command === "dukenukem") {
  // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
  // The second ping is an average latency between the bot and the websocket server (one-ways, not round-trip)
  message.channel.send(":radioactive: :radioactive: :radioactive: It's time to kick ass and chew bubble gum, and I'm all out of gum... :radioactive: :radioactive: :radioactive: ", {file: "https://media.giphy.com/media/rXSC7FqpjcnNm/giphy.gif"});
}
 
if(command === "sendit") {
  message.channel.send("SENDING INITIATED STAND BY:");
  message.channel.send(":e_mail:SENDING..............................");
  message.channel.send(".....................................");
  message.channel.send(".....................................");
  message.channel.send("...........FULL SEND :mailbox_with_mail: ");
}

if(command === "yummy") {
  message.channel.send("Hey GUY EAT A DICK! :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:");
}

if(command === "mesooo") {
  message.channel.send("HORNEYYYYYY");
}

if(command === "rollercoaster") {
  message.channel.send(":roller_coaster: :chart_with_upwards_trend: :chart_with_downwards_trend: Damn the market is crazy.... anyone seen Chad? ", {file: "https://i.makeagif.com/media/2-11-2018/Zmfl04.gif"});
}

if(command === "marketdown") {
  message.channel.send(":chart_with_downwards_trend::chart_with_downwards_trend::chart_with_downwards_trend: I'm Down... But not out... ", {file: "https://media.giphy.com/media/3o7WIv7ffKW01eNMoU/giphy-downsized-large.gif"});
}

if(command === "btcp") {
  message.channel.send("BTCP IS OPENING A NEW WAY!", {file: "https://video.twimg.com/tweet_video/DUzAWSYWkAEGY9g.mp4"});
}

if(command === "btcp-partduex") {
  message.channel.send("BTCP IS SUPERMAN", {file: "https://video.twimg.com/tweet_video/DVO3C9sWsAAIxD6.mp4"});
}


if(command === "eatit") {
  message.channel.send("Someone looks hungry...", {file: ""});
}

if(command === "recession") {
  message.channel.send("Someone looks hungry...", {file: ""});
}

if(command === "bitconnect") {
  message.channel.send("Your crypto is in a better place now... :money_with_wings::money_with_wings::money_with_wings::money_with_wings: :money_with_wings: ", {file: "https://media.giphy.com/media/F7Y8JkUEW7jq/giphy.gif"});
}

if(command === "shill") {
  message.channel.send("Someone looks hungry...", {file: ""});
}
if(command === "makeitrain") {
  message.channel.send(":moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag::moneybag:", {file: "https://steemitimages.com/0x0/https://media.giphy.com/media/l4HohoaD4wx1LHQXK/giphy.gif"});
}

if(command === "makeitdoge") {
  message.channel.send(":dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2:", {file: "http://i.imgur.com/9bVL4eJ.gif"});
}

if(command === "makeitdoge") {
  message.channel.send(":dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2::dog2:", {file: "http://i.imgur.com/9bVL4eJ.gif"});
}

if(command === "bogged") {
  message.channel.send("DUMP EEEETTTTTTTTTT!", {file: "https://thumbs.gfycat.com/HarmfulSimilarCub-size_restricted.gif"});
}

if(command === "realsatoshi") {
  message.channel.send("Will the REAL Satoshi please stand up?", {file: "https://steemitimages.com/0x0/https://media.giphy.com/media/l4HohoaD4wx1LHQXK/giphy.gif"});
}

if(command === "cryptocult") {
  message.channel.send("I see a lot of new faces in here... \n that means a lot of you have been breaking the rules... \n Rule #1", {file: "https://cdn-images-1.medium.com/max/1200/1*gEAoqJPzuweG9--brS3MeA.gif"});
}

if(command === "help") {

  message.channel.send("If you don't get it... then you don't get it. \n COMMANDS INCLUDE: \n +bitconnect \n +recession \n +shill \n +btcp \n +eatit \n +marketdown \n +mesooo \n +yummy \n +sendit \n +dukenukem \n +realsatoshi \n +cryptocult \n +bogged \n +makeitrain \n +ping")
}

if(command === "nephewprotocol") {
  message.channel.send("CHOOO!!!! CHOO!!!  :train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2::train2:", {file: "https://i.pinimg.com/originals/75/e8/4c/75e84c2a9bc75a097266ca39175c3f2b.gif"});
}
  

if(command === "guide") {
  console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
}
if (command === 'money') {
  let cryptoCurrency = args[0]
  let symbol = args[1] ? args[1] : 'USD'
  request(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${symbol}`, function (err, response, body) {
    if (err) {
      message.channel.send('' + err + '')
      return
    }
    try {
      let data = JSON.parse(body)
      console.log(data)
      if (!data[symbol]) {
        message.channel.send('Please select a correct currency or symbol')
      } else {
        message.channel.send(`${data[symbol]} ${symbol}`)
      }
    } catch (err) {
      message.channel.send('' + err + '')
    }
  })
}


});
 
bot.login(config.token);