const Discord = require("discord.js");
const {Client, Attachment } = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
var request = require("request");

bot.on("ready", () => {
  console.log("I'm a filthy bot, but I love to party! Let's Do this shit!");
});

bot.on("message", async message => {

  const args = message.content;
  if(message.content === 'hello') {
    message.channel.send('Hi' + message.author);
  }
  if(message.content.match(/mac|apple/)) {
    message.channel.send('Get that shit outta here ' + message.author, {file: "https://media.giphy.com/media/eFt0NkDvUhWGk/giphy.gif"})
  }
  if(message.content === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  }
  if(message.content === "rekt") {
    message.channel.send({file: "https://media.giphy.com/media/zgzzwU2GSOW08/giphy.gif"});
  }

  if(message.content === "dukenukem") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-ways, not round-trip)
    message.channel.send(":radioactive: :radioactive: :radioactive: It's time to kick ass and chew bubble gum, and I'm all out of gum... :radioactive: :radioactive: :radioactive: ", {file: "https://media.giphy.com/media/rXSC7FqpjcnNm/giphy.gif"});
  }

  if(message.content === "yummy") {
    message.channel.send("Hey GUY EAT A DICK! :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:");
  }

  if(message.content === "rollercoaster") {
    message.channel.send(":roller_coaster: :chart_with_upwards_trend: :chart_with_downwards_trend: Damn the market is crazy.... anyone seen Chad? ", {file: "https://i.makeagif.com/media/2-11-2018/Zmfl04.gif"});
  }

  if(message.content === "marketdown") {
    message.channel.send(":chart_with_downwards_trend::chart_with_downwards_trend::chart_with_downwards_trend: I'm Down... But not out... ", {file: "https://media.giphy.com/media/3o7WIv7ffKW01eNMoU/giphy-downsized-large.gif"});
  }

  if(message.content === "bitconnect") {
    message.channel.send("Your crypto is in a better place now... :money_with_wings::money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: ", {file: "https://media.giphy.com/media/F7Y8JkUEW7jq/giphy.gif"});
  }

  if (message.content === 'money') {
    let cryptoCurrency = 'BTC'
    let symbol = 'USD'
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