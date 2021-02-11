var getEvents = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const editFunctions = require('./editFunctions.js');
const dayjs = require('dayjs');

module.exports = {

    matchCommand: function (Discord, message, command, args) {
        switch (command) {
            case 'event':
                commandEvent(Discord, message, command, args);
                break;
            case 'help' || 'commands':
                message.channel.send(createEmbeddedMessages.createHelpEmbed());
                break;
            case 'cake':
                message.channel.send("Everyone deserves some cake :cake:");
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
                args.shift();
                var embed = getEvents.getNextEvent(editFunctions.ArgumentToString(args), currDayAndTime);
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            case 'today':
                embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime));
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'list':
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
function commandHelp(Discord, message, command, args) {
    return message.channel.send(createEmbeddedMessages.createHelpEmbed());
}
