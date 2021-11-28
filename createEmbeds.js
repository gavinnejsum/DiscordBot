const Discord = require('discord.js');
const borgCategory = require('./Commands/OfficerTool/OfficerCategories/Borg/Borg.json')
const stellaCategory = require('./Commands/OfficerTool/OfficerCategories/Stella/Stella.json');
const armadaCategory = require('./Commands/OfficerTool/OfficerCategories/Armadas/Armadas.json');
const swarmCategory = require('./Commands/OfficerTool/OfficerCategories/Swarms/Swarms.json');

const editFunctions = require('./editFunctions.js');
const getEventData = require('./getEventData');
const dayjs = require('dayjs');
const getCategories = require('./Commands/Reaction/categories.json');
const getEventType = require('./Commands/Reaction/eventType.json');
var advancedFormat = require('dayjs/plugin/advancedFormat');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
var calendar = require('dayjs/plugin/calendar');
const defaultStatsString = "Try to max all bonus stats";
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

function eventNameReaction() { 
    const embed = new Discord.MessageEmbed()
        embed.setTitle('Daily Events')
        embed.setDescription('React to choose what event you wanna see')
        embed.addFields(
        getCategories.map((cat) => ({
        name:`${cat.emoji} ${cat.name}`,
        value :`${cat.description}`,

        }))

    )
    return embed;
}
function eventTypeReaction(eventName) { 
    const embed = new Discord.MessageEmbed()
        embed.setTitle(eventName)
        embed.setDescription('React to chose what type of event to see')
        embed.addFields(
        getEventType.map((cat) => ({
        name:`${cat.emoji} ${cat.name}`,
        value :`${cat.description}`,
        }))
    )
    return embed;
    }

function officerTypeReaction(eventName) { 
    const embed = new Discord.MessageEmbed()
    eventNameCopy= eventName[0].toUpperCase() + eventName.slice(1);
        embed.setTitle(eventNameCopy)
        embed.setDescription('React to chose what Crew type you are looking for :)')
        switch (eventName.toString()) {
            case "borg":
                embed.addFields(
                    borgCategory.map((cat) => ({
                    name:`${cat.emoji} ${cat.name}`,
                    value:`${cat.crew}`,  
                    }))
                )
                break;
            case "swarm":
            case "swarms":
                embed.addFields(
                    swarmCategory.map((cat) => ({
                    name:`${cat.emoji} ${cat.name}`,
                    value:`${cat.crew}`,
                    }))
                )
                break;
            case "stella":
                embed.addFields(
                    stellaCategory.map((cat) => ({
                    name:`${cat.emoji} ${cat.name}`,
                    value:`${cat.crew}`,
                    }))
                )
                break;
            case "armada":
                embed.addFields(
                    armadaCategory.map((cat) => ({
                    name:`${cat.emoji} ${cat.name}`,
                    value:`${cat.crew}`,
                    }))
                )
                break; 
            default:
                return "ERROR | choseCrewType SwitchCase";
        }
    return embed;
}
function createOfficerEmbed(purpose) {
    officerData = getEventData.findOfficerData(purpose);

    if (officerData[0] != undefined) {  

    const embed = new Discord.MessageEmbed()
    embed.setTitle(`${officerData[0].info.CrewType}`)
    if(officerData[0].info.Image.length > 1) { 
        embed.attachFiles([`./Images/${officerData[0].info.Image}.png`])
        embed.setImage(`attachment://${officerData[0].info.Image}.png`)
    }
    embed.attachFiles('./Images/Elephant.png')
    embed.setColor(0x0f53d1)
    embed.setDescription(`${officerData[0].info.CrewDescription}`)
    embed.setFooter('Bot', 'attachment://Elephant.png')
    embed.setTimestamp()
    
    embed.addFields(
        {name: `${officerData[0].info.OfficerNames[0]} - ${officerData[0].info.OfficerNames[1]} - ${officerData[0].info.OfficerNames[2]}`, value: `${officerData[0].info.CrewDescription}`, 
        value: ` **Stat Priority:**\n${defaultStatsString}\n${officerData[0].info.StatPriority}`
    }       
        
    );
    return embed;
    }
    return null; 
}


module.exports = {
    createSingleEventEmbed,
    createDayScheduleEmbed,
    createMultipleNextEventEmbed,
    createHelpEmbed,
    createNamesEmbed,
    eventNameReaction,
    officerTypeReaction,
    createOfficerEmbed,
    eventTypeReaction
    
}
