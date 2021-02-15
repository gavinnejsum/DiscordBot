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
            case'tomorrow': 
            args.shift();
            var embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime.add(1, "day")), currDayAndTime.add(1,"day")); 
            if(embed != null) {
                return message.channel.send(embed); 
            } else { 
                return message.channel.send("Error"); 
            }
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
                embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime), currDayAndTime);
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
                return message.channel.send("Something went wrong, \nno command or a wrong command was entered. Please try again.\n\nType `!commands` for additional help");
        }
    }
}
function commandCake(Discord, message, command, args) {
    if (args.length > 0) {
        if (message.content.includes('facts') || message.content.includes('fact')) {


            randomInt = Math.floor(Math.random() * 4);
            switch (randomInt) {
                case 0:
                    return message.channel.send("\nFun cake fact: One of the biggest ever birthday cakes was almost as heavy as an elephant :elephant:")
                case 1:
                    return message.channel.send("\nFun cake fact: The first birthday cake was originally a cake given as an offering on a person’s birthday. The first reference to ‘birthday cake’ came in 1785");
                case 2:
                    return message.channel.send("Fun cake fact: The word ‘cake’ comes from Middle English kake, and is probably a borrowing from Old Norse.");
                case 3:
                    return message.channel.send("Fun cake fact: In Swedish the word for cake is 'kaka' but the word 'tårta' is also used in the same way")
                case 4: return message.channel.send("Fun cake fact: Queen Victoria was one of the first to have pure white icing on her wedding cake. That’s why it’s called “royal icing.")
                default:
                    return message.channel.send("default");
            }
        } else { 
            message.channel.send("Everyone deserves some cake :cake:");
        }
    }

}

