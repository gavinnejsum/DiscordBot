var getEvents = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const editFunctions = require('./editFunctions.js');
const dayjs = require('dayjs');

module.exports = {

    matchCommand: function (Discord, message, command, args) {
        if (message.content.includes("cake")) {
            command = 'cake'; 
        }
        switch (command) {
            case 'event':
            case 'events':
            
                commandEvent(Discord, message, command, args);
                break;
            case 'help':
            case 'commands':
            case '?': 
                message.channel.send(createEmbeddedMessages.createHelpEmbed());
                break;
            case 'cake':
                message.channel.send("Everyone deserves some cake :cake:");
                commandCake(Discord, message, command, args)                
                break;
            default:
                message.channel.send("No command specified.\n\n Type `!help` for current commands available");
        }

    },

};
function commandEvent(Discord, message, command, args) {
    currDayAndTime = dayjs(message.createdTimestamp);
    if (args.length > 0) {
        switch (args[0].toLowerCase()) {
            case 'next':
            case 'first':
                args.shift();
                var embed = getEvents.getNextEvent(editFunctions.ArgumentToString(args), currDayAndTime);
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            case 'today':
            case 'now':
                embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime));
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'list':
            case 'all':
                args.shift(); // remove next command from str arr
                var embed = getEvents.getListOfEvent(editFunctions.ArgumentToString(args), currDayAndTime) //
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            default:
                return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
        }
    }
}
function commandCake(Discord, message, command, args) { 
        randomInt = Math.floor(Math.random()*1);
        switch (randomInt) {
            case 0:
                return message.channel.send("\nFun cake fact: One of the biggest ever birthday cakes was almost as heavy as an elephant :elephant:")    
            case 1: 
            return message.channel.send("\nFun cake fact: One of the biggest ever birthday cakes was almost as heavy as an elephant :elephant:");
            case 2:
                return message.channel.send("Fun cake fact: Cake Test");
        
            default:
                return message.channel.send("default");
        }

}

