var getEvents = require('../../getEvents.js');
const createEmbeddedMessages = require('../../createEmbeds.js');
const editFunctions = require('../../editFunctions.js');

const dayjs = require('dayjs');

function commandEvent(Discord, message, command, args) {
    currDayAndTime = dayjs(message.createdTimestamp);
    if (args.length > 0) {
        switch (args[0].toLowerCase()) {
            case 'in':
                args.shift();
                var embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime.add(args[0], 'day')), currDayAndTime.add(args[0], 'day'));
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'tomorrow':
                args.shift();
                var embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime.add(1, "day")), currDayAndTime.add(1, "day"));
                if (embed != null) {
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
                args.shift(); // remove list command from str arr
                var embed = getEvents.getListOfEvent(editFunctions.ArgumentToString(args), currDayAndTime) //
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            case 'name':
            case 'names':
                var embed = createEmbeddedMessages.createNamesEmbed();
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            default:
                return message.channel.send("Something went wrong, \nno event command or a wrong event command was entered. Please try again.\n\nType `!commands` for additional help");
        }
    } else {
        return message.channel.send("Something went wrong, \nno event command or a wrong event command was entered. Please try again.\n\nType `!commands` for additional help");
    }
}

module.exports = { 
    commandEvent
}