const Discord = require('discord.js');
const format = require('./convertArrayToString.js');
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
    const embed = new Discord.MessageEmbed()
    switch (event[0]) {
        case "research":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/research.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://research.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Research', value: 'Conduct **Researches** in your R&D Department to propel your power to the next level.' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Research', value: '\n 1 Power Increased by Research | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "research slb":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/researchBig.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://researchBig.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                {
                    name: 'Research SLB', value: 'Conduct **Researches** in your R&D Department to propel your power to the next level.'
                        + ' Score more than the opposition and grab the top prize!'
                },
                { name: '\u200B', value: '\u200B' },
                { name: 'Complete Researches', value: '\n 1 Power Increased by Research | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "research big":
            embed.setTitle(' 6h Daily Event')
            embed.attachFiles(['./Images/researchBig.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://researchBig.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                {
                    name: 'Research SLB', value: 'Conduct **Researches** in your R&D Department to propel your power to the next level.'
                },
                { name: '\u200B', value: '\u200B' },
                { name: 'Complete Researches', value: '\n 1 Power Increased by Research | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer recruit":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/officerRecruit.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerRecruit.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer Recruit', value: 'Collect **shards** to promote and increase officers\' combat power.' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Earn Officer Shards', value: '\n 1 Uncommon Shard | 10 points\n1 Rare Shard | 50 points\n1 Epic Shards 150 points', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer recruit heroic":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/officerRecruitHeroic.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerRecruitHeroic.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer Recruit - Heroic', value: 'Collect **shards** to promote and increase officers\' combat power.\nComplete this challenging Heroic event for grand rewards!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station:', value: '\n1 Uncommon Shard | 10 points\n1 Rare Shard | 50 points\n1 Epic Shards 150 points', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer recruit slb":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/officerRecruitHeroic.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerRecruitHeroic.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer Recruit - SLB', value: 'Level up your Officers for higher combat power. Score more than the opposition and grab the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Level Up Officers:', value: '\n1 Uncommon Shard | 10 points\n1 Rare Shard | 50 points\n1 Epic Shards 150 points', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer xp":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/officerRecruit.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerRecruit.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer XP', value: 'Level up your Officers for higher combat power' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Level Up Officers:', value: '\n 1 Officer Intel Spent | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer xp big":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/officerBig.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerBig.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer XP', value: 'Level up your Officers for higher combat power' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Level Up Officers:', value: '\n 1 Officer Intel Spent | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer xp slb":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/officerBig.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerBig.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer XP - SLB', value: 'Level up your Officers for higher combat power. Score more than the opposition and grab the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Level Up Officers:', value: '\n 1 Officer Intel Spent | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "ship upgrade":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/shipUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://shipUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Ship Upgrade', value: 'Build and Upgrade Modules to strengthen your Station' },
                { name: '\u200B', value: '\u200B' },
                { name: 'G3 U Materials on Ships', value: '\`\`\`1 G3 U Cry | 10 points\n1 G3 U Gas | 10 points\n1 G3 U Ore | 10 points\`\`\`', inline: true },
                { name: 'G3 R Materials on Ships', value: '\`\`\`1 G3 R Cry | 100 points\n1 G3 R Gas | 100 points\n1 G3 R Ore | 100 points\`\`\`', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }
            );
            return embed;
        case "ship upgrade heroic":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/shipUpgradeHeroic.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://shipUpgradeHeroic.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Ship Upgrade - Heroic', value: '**Use Materials** to upgrade your ships to gain strength for incoming challengers.\n\nComplete this challenging Heroic event for grand rewards!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'G3 U Materials on Ships', value: '\`\`\`1 G3 U Cry | 10 points\n1 G3 U Gas | 10 points\n1 G3 U Ore | 10 points\`\`\`', inline: true },
                { name: 'G3 R Materials on Ships', value: '\`\`\`1 G3 R Cry | 100 points\n1 G3 R Gas | 100 points\n1 G3 R Ore | 100 points\`\`\`', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` },

            );
            return embed;
        case "ship upgrade slb":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/shipUpgradeHeroic.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://shipUpgradeHeroic.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Ship Upgrade - Heroic', value: '**Use Materials** to upgrade your ships to gain strength for incoming challengers.\n\nCompete to earn the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'G3 U Materials on Ships', value: '\`\`\`1 G3 U Cry | 10 points\n1 G3 U Gas | 10 points\n1 G3 U Ore | 10 points\`\`\`', inline: true },
                { name: 'G3 R Materials on Ships', value: '\`\`\`1 G3 R Cry | 100 points\n1 G3 R Gas | 100 points\n1 G3 R Ore | 100 points\`\`\`', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` },

            );
            return embed;
        case "station upgrade":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/StationUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://StationUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Station Upgrade', value: 'Build and Upgrade Modules to strengthen your Station' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station', value: '1 Power Increased by Building | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "station upgrade big":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/StationUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://StationUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Station Upgrade', value: 'Build and Upgrade Modules to strengthen your Station\nComplete this challenging Heroic event for grand rewards!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station', value: '1 Power Increased by Building | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "station upgrade slb":
            embed.setTitle('6h Daily Event')
            embed.attachFiles(['./Images/StationUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://StationUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Station Upgrade', value: 'Build and Upgrade Modules to strengthen your Station\n Compete to earn the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station', value: '1 Power Increased by Building | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        // Will add more events at some point I guess..
        default:
            return null;
    }
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
        { name: '05:00', value: `\`\`\`${event[0].info.events[0][0]}\n${event[0].info.events[1][0]}\`\`\``, },
        { name: '11:00', value: `\`\`\`${event[0].info.events[0][1]}\n${event[0].info.events[1][1]}\`\`\``, },
        { name: '17:00', value: `\`\`\`${event[0].info.events[0][2]}\n${event[0].info.events[1][2]}\`\`\``, },
        { name: '23:00', value: `\`\`\`${event[0].info.events[0][3]}\n${event[0].info.events[1][3]}\`\`\``, }

    );
    return embed;
}
function createMultipleNextEventEmbed(event) {
    var eventName = format.capitalizeFirstLetter(event[0]);
    const embed = new Discord.MessageEmbed()
    embed.setTitle('Daily Events')
    embed.attachFiles([`./Images/DailyEvents.png`, './Images/Elephant.png'])
    embed.setThumbnail('attachment://DailyEvents.png')
    embed.setColor(0x0f53d1)
    embed.setDescription(`List of ${eventName}`)
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
