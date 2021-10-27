const Discord = require('discord.js');
const editFunctions = require('./editFunctions.js');
const getEventData = require('./getEventData');
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
var calendar = require('dayjs/plugin/calendar');
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar)

//research ++
//research slb++
//research big++
//officer recruit++
//officer recruit heroic++
//officer recruit slb ++
//officer XP ++
//officer XP Big ++
//officer xp slb ++ 
//ship upgrade ++
//ship upgrade heroic++
//ship upgrade slb++
//station upgrade++
//station upgrade big
//station upgrade slb

function createSingleEventEmbed(event, timestampOfMessage) {
    var eventName = editFunctions.capitalizeFirstLetter(event[0]);
    eventData = getEventData.findEventData(eventName);
    if (eventData[0] != undefined) {

        const embed = new Discord.MessageEmbed()

        embed.setTitle(`Daily Event - ${eventData[0].info.eventDuration}h`)
        embed.attachFiles([`./Images/${editFunctions.removeSpacesBetweenWords(eventName)}.png`, './Images/Elephant.png'])
        embed.setThumbnail(`attachment://${editFunctions.removeSpacesBetweenWords(eventName)}.png`)
        embed.setColor(0x0f53d1)
        embed.setDescription('')
        embed.setFooter(`Bot - All times  in UTC+1`, 'attachment://Elephant.png')
        embed.setTimestamp()
        embed.addFields(
            { name: `${eventName}`, value: `${eventData[0].info.eventDescription}` },
            { name: '\u200B', value: '\u200B' },
            { name: `${eventData[0].info.objectiveDescription[0]}`, value: `${eventData[0].info.objectiveDescription[1]}`, inline: true },
            { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` });
        return embed;
    }
    return null;
}
function createDayScheduleEmbed(event, date) {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Day Schedule')
    embed.attachFiles(['./Images/DailyEvents.png', './Images/Elephant.png'])
    embed.setThumbnail('attachment://DailyEvents.png')
    embed.setColor(0x0f53d1)
    embed.setDescription(`${date.format('MMMM Do YYYY')}`)
    embed.setFooter('Bot - All times  in UTC+1', 'attachment://Elephant.png')
    embed.setTimestamp()
    embed.addFields(
        { name: '05:00', value: `\`\`\`${editFunctions.capitalizeFirstLetter(event[0].info.events[0][0])}\n${editFunctions.capitalizeFirstLetter(event[0].info.events[1][0])}\`\`\``, },
        { name: '11:00', value: `\`\`\`${editFunctions.capitalizeFirstLetter(event[0].info.events[0][1])}\n${editFunctions.capitalizeFirstLetter(event[0].info.events[1][1])}\`\`\``, },
        { name: '17:00', value: `\`\`\`${editFunctions.capitalizeFirstLetter(event[0].info.events[0][2])}\n${editFunctions.capitalizeFirstLetter(event[0].info.events[1][2])}\`\`\``, },
        { name: '23:00', value: `\`\`\`${editFunctions.capitalizeFirstLetter(event[0].info.events[0][3])}\n${editFunctions.capitalizeFirstLetter(event[0].info.events[1][3])}\`\`\``, }

    );
    return embed;
}
function createMultipleNextEventEmbed(event) {
    var eventName = editFunctions.capitalizeFirstLetter(event[0]);
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Daily Events')
    embed.attachFiles([`./Images/${editFunctions.removeSpacesBetweenWords(eventName)}.png`, './Images/Elephant.png'])
    embed.setThumbnail(`attachment://${editFunctions.removeSpacesBetweenWords(eventName)}.png`)
    embed.setColor(0x0f53d1)
    embed.setDescription(`List of coming ${eventName} events`)
    embed.setFooter('Bot - All times  in UTC+1', 'attachment://Elephant.png')
    embed.setTimestamp()
    embed.addFields(
        { name: 'Date & times, value:', value: `\`\`\`${event[1]}\`\`\``, }
    );
    return embed;
}
function createHelpEmbed() {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Commands')
    embed.attachFiles(['./Images/Elephant.png'])
    embed.setColor(0x850c0c)
    embed.setDescription(`All the available commands to date`)
    embed.setFooter('Bot ', 'attachment://Elephant.png')
    embed.setTimestamp()
    embed.addFields(
        {
            name: 'Event Commands', value: `All commands prefixed by \`!event\` \n\`\`\`yaml\n` +
                "list: Lists the occurrence for an event in the upcoming 2 rotations (which is around 20-25 days).\n\n" +
                "today: Lists all the events that will run today. The event starting times are 05:00, 11:00, 17:00, 23:00.\n\n" +
                "tomorrow: Lists all the events that will be on tomorrow.\n\n" +
                "next: This one will give a short event description and give the time and date of the next occurrence of the event.\n\n" +
                "in: Will show an entire days event schedule in a specified amount of days.\n\n" +
                "name: Lists all the current names for the events.\n\n" +


                "Examples:\n" +
                "!event next officer heroic : Will show when the next officer recruit event will occur.\n\n" +
                "!event today : Lists all event for today.\n\n" +
                "!event list Research SLB : Will a list of times and dates for the research slb event.\n\n" +
                "!event tomorrow: Lists all the events for tomorrow.\n\n" +
                "!event in 3 days: Shows all the events in 3 days, same format as today or tomorrow command.\n\n" +
                "!event name: Lists all the current names for the events." +
                `\`\`\``,
        },
        // {name: 'Misc Commands', value: "Test\n"+"```yaml\ntest: ddd\n```" } 
    );
    return embed;
}
function createNamesEmbed() {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Events')
    embed.attachFiles([`./Images/DailyEvents.png`, './Images/Elephant.png'])
    embed.setThumbnail(`attachment://DailyEvents.png`)
    embed.setColor(0x0f53d1)
    embed.setDescription(`Names of all the events in the rotation`)
    embed.setFooter('Bot', 'attachment://Elephant.png')
    embed.setTimestamp()
    embed.addFields(
        {
            name: 'Event names', value: `\`\`\`\n` +
                "Research\n" +
                "Research SLB\n" +
                "Research Big\n" +
                "Officer Recruit\n" +
                "Officer Recruit Heroic\n" +
                "Officer Recruit SLB\n" +
                "Officer XP\n" +
                "Officer XP Big\n" +
                "Officer XP SLB\n" +
                "Ship Upgrade\n" +
                "Ship Upgrade Heroic\n" +
                "Ship Upgrade SLB\n" +
                "Station Upgrade\n" +
                "Station Upgrade Big\n" +
                "Station Upgrade Slb\n" +
                `\`\`\``,
        }
    );
    return embed;
}

module.exports = {
    createSingleEventEmbed,
    createDayScheduleEmbed,
    createMultipleNextEventEmbed,
    createHelpEmbed,
    createNamesEmbed
}
