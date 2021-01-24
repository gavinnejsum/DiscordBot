const Discord = require('discord.js');

function createEmbed(event) {
    const embed = new Discord.MessageEmbed()
    switch (event[0]) {
        case "station upgrade":
            embed.setTitle('Daily Event')
            embed.attachFiles(['./Images/StationUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://StationUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Station Upgrade', value: 'Build and Upgrade Modules to strengthen your Station' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station', value: '1 Power Increased by Building | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "ship upgrade":
            embed.setTitle('Daily Event')
            embed.attachFiles(['./Images/shipUpgrade.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://StationUpgrade.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Ship Upgrade', value: 'Build and Upgrade Modules to strengthen your Station' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station:', value: '\n 1 power increased by building | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }
            );
            return embed;
        case "officer recruit":
            embed.setTitle('12h Daily Event')
            embed.attachFiles(['./Images/officerRecruit.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerRecruit.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot', 'attachment://Elephant.png')
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
            embed.setFooter('2Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer Recruit - Heroic', value: 'Build and Upgrade Modules to strengthen your Station' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Upgrade station:', value: '\n 1 Power Increased by Buildings | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "officer xp slb":
            embed.setTitle('Daily Event')
            embed.attachFiles(['./Images/officerXPSLB.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://officerXPSLB.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Officer XP - SLB', value: 'Level up your Officers for higher combat power. Score more than the opposition and grab the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Level Up Officers:', value: '\n 1 Officer Intel Spent | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "research slb":
            embed.setTitle('Daily Event')
            embed.attachFiles(['./Images/researchSLB.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://researchSLB.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Research SLB', value: 'Conduct **Researches** in your R&D Department to propel your power to the next level.'
                        +' Score more than the opposition and grab the top prize!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Complete Researches', value: '\n 1 Power Increased by Research | 1 point', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` }

            );
            return embed;
        case "ship upgrade heroic":
            embed.setTitle('Daily Event')
            embed.attachFiles(['./Images/shipUpgradeHeroic.png', './Images/Elephant.png'])
            embed.setThumbnail('attachment://shipUpgradeHeroic.png')
            embed.setColor(0x0f53d1)
            embed.setDescription('')
            embed.setFooter('2Bot - All times  in UTC', 'attachment://Elephant.png')
            embed.addFields(
                { name: 'Ship Upgrade - Heroic', value: '**Use Materials** to upgrade your ships to gain strength for incoming challengers.\n\nComplete this challenging Heroic event for grand rewards!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'G3 U Materials on Ships', value: '\`\`\`1 G3 U Cry | 10 points\n1 G3 U Gas | 10 points\n1 G3 U Ore | 10 points\`\`\`', inline: true },
                { name: 'G3 R Materials on Ships', value: '\`\`\`1 G3 R Cry | 100 points\n1 G3 R Gas | 100 points\n1 G3 R Ore | 100 points\`\`\`', inline: true },
                { name: 'Next Occurence', value: `\`\`\`Date: ${event[1]}\nTime: ${event[2]}\`\`\`` },
                
            );
            return embed;








        default:
            return null;
    }


}

module.exports = {
    createEmbed
}
