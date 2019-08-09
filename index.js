const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
var request = require("request");

bot.on("ready", () => {
console.log(`
███████╗ ██████╗ ██████╗ ██╗  ██╗███████╗██████╗ ██████╗  ██████╗ ████████╗
██╔════╝██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝
█████╗  ██║   ██║██████╔╝█████╔╝ █████╗  ██║  ██║██████╔╝██║   ██║   ██║   
██╔══╝  ██║   ██║██╔══██╗██╔═██╗ ██╔══╝  ██║  ██║██╔══██╗██║   ██║   ██║   
██║     ╚██████╔╝██║  ██║██║  ██╗███████╗██████╔╝██████╔╝╚██████╔╝   ██║   
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═════╝  ╚═════╝    ╚═╝   
                                                                           
`);
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


if(command === "makeitzap") {
  message.channel.send(":zaplogo: :zaplogo: :zaplogo: :zaplogo: :zaplogo: :zaplogo: :zaplogo: ");
}


if(command === "cryptocult") {
  message.channel.send("I see a lot of new faces in here... \n that means a lot of you have been breaking the rules... \n Rule #1", {file: "https://cdn-images-1.medium.com/max/1200/1*gEAoqJPzuweG9--brS3MeA.gif"});
}

if(command === "help") {

  message.channel.send("If you don't get it... then you don't get it. \n COMMANDS INCLUDE: \n +makeitzap \n +cryptocult \n +sendit \n +ping")
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
        const embed = new Discord.RichEmbed()
        message.channel.send({embed: {
          title: "Token price for " + `${cryptoCurrency}`,
          color: 3066993,
          description: `${data[symbol]} ${symbol}`,
          fields: [{
            name: "CryptoCompare", 
            value: "More info at [CryptoCompare](https://www.cryptocompare.com/)"
          }],
          url: "https://www.cryptocompare.com/coins/" + `${cryptoCurrency}` + "/overview/usd"
        }})
      }
    } catch (err) {
      message.channel.send('' + err + '')
    }
  })
}



});
 
bot.login(config.token);
