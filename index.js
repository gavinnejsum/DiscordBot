require('dotenv').config();
var schedule = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeddedMessages.js');
const ArrToString = require('./convertArrayToString.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const TOKEN = process.env.TOKEN;

client.login(TOKEN);


client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {

    message.reply('pong');
    embed = createEmbeddedMessages.createEmbed("ship upgrade heroic");
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'event') {
    if (!args.length) {
      return message.channel.send(`you did not provide any arguments, ${message.author}!`)
    } else if (args[0] === 'today') {
      return message.channel.send('todays events are:');
    } else if (args[0] === 'next') {
      args.shift();
      var stringArgument = ArrToString.ArgumentToString(args);
      var returnMessage = schedule.getNextEvent(stringArgument);
      // if (returnMessage.length == 0) {
      //   message.channel.send(`Query: ${command + " " + stringArgument}\nResponse: ${returnMessage[0]}`);
      // }
      if (returnMessage != null) {
       return message.channel.send(returnMessage);
      } else {
        return message.channel.send("Error");
      }

    }
  }


});

