require('dotenv').config();
var getEvents = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const editFunctions = require('./editFunctions.js');
const Discord = require('discord.js');
const dayjs = require('dayjs');
const client = new Discord.Client();
const prefix = '!';
const TOKEN = process.env.TOKEN;

const TESTTOKEN = process.env.TESTTOKEN;



client.login(TOKEN);

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  currDayAndTime = dayjs(message.createdTimestamp);
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'event') {
    if (!args.length) {
      return message.channel.send("You did not specify the command \nNot a valid command. Type `!help` for current commands available")

    }
    args0 = args[0].toLowerCase();
    if (!args.length) {
      return message.channel.send("Not a valid command please type `!help` for current commands available");
    } else if (args[0] === 'today') {
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
        return message.channel.send("No event name listed. Please specify an event.\n\nType `!help` for additional help");
      }

    } else if (args0 === 'list') {
      args.shift(); // remove next command from str arr
      var stringArgument = editFunctions.ArgumentToString(args); //convert arr to str
      var returnMessage = getEvents.getListOfEvent(stringArgument, currDayAndTime) //
      if (returnMessage != null) {
        return message.channel.send(returnMessage);
      } else {
        return message.channel.send("No event name listed. Please specify an event.\n\nType `!help` for additional help");
      }
    }
  } else if (command === 'help' || command === 'commands') {
    // return message.channel.send(`All commands prefixed by \`!event\` \n\`\`\`yaml\n`+
    // "list: Lists the occurrence for an event in the upcoming 2 rotations (which is around 20-25 days).\n"+
    // "today: Lists all the events that will run during. The event starting times are 05:00, 11:00, 17:00, 23:00.\n"+
    // "next: This one will give a short event description and give the time and date of the next occurrence of the event\n\n"+
    
    // "Examples:\n"+
    // "!event next officer heroic : will show when the next officer recruit event will occur\n"+
    // "!event today : Lists all event for today\n"+
    // "!event list Research SLB : Will show all the upcoming times and dates for the research slb event for around 20-25 days\n"+
    // `\`\`\``)
    return message.channel.send(createEmbeddedMessages.createHelpEmbed());
  } else if (command === "cake") {
    return message.channel.send("Everyone deserves some cake :cake:");
  } else {
    return message.channel.send("Not a valid command. Type `!help` for current commands available");
  }
});

