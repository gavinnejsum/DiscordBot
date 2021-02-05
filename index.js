require('dotenv').config();
var getEvents = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const editFunctions = require('./editFunctions.js');
const Discord = require('discord.js');
const dayjs = require('dayjs');
const client = new Discord.Client();
const prefix = '!';
// const TOKEN = process.env.TOKEN;
const TESTTOKEN = process.env.TESTTOKEN;


client.login(TESTTOKEN);

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   currDayAndTime = dayjs(message.createdTimestamp); 
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
 
  if (command === 'event') {
    args0 = args[0].toLowerCase();
    if (!args0.length) {
      return message.channel.send(`You did not provide any command arguments`)
    } else if (args0 === 'today') {
      var event = getEvents.getEventsEntireDay(currDayAndTime);
      embed = createEmbeddedMessages.createDayScheduleEmbed(event);
      if (embed != null) {
        return message.channel.send(embed);
      } else {
        return message.channel.send("Error");
      } 
    } else if (args0 === 'next') {
      args.shift(); // remove next command from str arr
      var stringArgument = editFunctions.ArgumentToString(args); //convert arr to str
      var returnMessage = getEvents.getNextEvent(stringArgument, currDayAndTime); //
      if (returnMessage != null) {
        return message.channel.send(returnMessage);
      } else {
        return message.channel.send("Error");
      }

    } else if (args0 === 'list') {
      args.shift(); // remove next command from str arr
      var stringArgument = editFunctions.ArgumentToString(args); //convert arr to str
      var returnMessage = getEvents.getListOfEvent(stringArgument, currDayAndTime) //
      if (returnMessage != null) {
        return message.channel.send(returnMessage);
      } else {
        return message.channel.send("Error");
      }


    }
  } else if(command === "cake") { 
      return message.channel.send("Everyone deserves some cake :cake:")
  }
  // else if (command === 'help') {
  //   if (!args.length) {
  //     return message.channel.send("You did not provide any command arguments");
  //     var embed = 
  //     return message.channel.send()
  //   }
  // }
});

