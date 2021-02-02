const Discord = require('discord.js');
const editFunctions = require('./editFunctions.js');
const getEventData = require('./getEventData');

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

function createSingleEventEmbed(event) {
    var eventName = editFunctions.capitalizeFirstLetter(event[0]);
    eventData = getEventData.findEventData(eventName); 
    if(eventData != undefined) { 

        const embed = new Discord.MessageEmbed()
        
        embed.setTitle(`Daily Event - ${eventData[0].info.eventDuration}h`)
        embed.attachFiles([`./Images/${editFunctions.removeSpacesBetweenWords(eventName)}.png`, './Images/Elephant.png'])
        embed.setThumbnail(`attachment://${editFunctions.removeSpacesBetweenWords(eventName)}.png`)
        embed.setColor(0x0f53d1)
        embed.setDescription('')
        embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
        embed.addFields(
            { name: `${eventName}`, value:`${eventData[0].info.eventDescription}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${eventData[0].info.objectiveDescription[0]}`, value: `${eventData[0].info.objectiveDescription[1]}`, inline: true },
            { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` });
            return embed;
        }
         return null;
        }
        function createDayScheduleEmbed(event) {
            
            const embed = new Discord.MessageEmbed()
            embed.setTitle('Daily Events')
            embed.attachFiles(['./Images/DailyEvents.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://DailyEvents.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('Todays Events')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
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
    embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
    embed.addFields(
        { name: 'Date & times, value:', value: `\`\`\`${event[1]}\`\`\``, }
    );
    return embed;
}

module.exports = {
    createSingleEventEmbed,
    createDayScheduleEmbed,
    createMultipleNextEventEmbed
}
