const editFunctions = require('../../../../editFunctions.js');
const createEmbeddedMessages = require('../../../../createEmbeds.js');
const officerReaction = require('../../officerReaction.js')
const pvpCategory = require('./PVP.json')


function PVPTypeSelection(Discord, message, command, args) 
{ 
    var embed = createEmbeddedMessages.officerTypeReaction(args);
    if(embed!= null) { 
        message.channel.send(embed).then((embedMsg) => {
            // send reactions for each emojis
            const emojis = pvpCategory.map((cat) => cat.emoji);
  
            emojis.forEach((emoji) => embedMsg.react(emoji));
            // the filter checks if the reaction emoji is in the categories
            // it also checks if the person who reacted shares the same id
            // as the author of the original message
            const filter = (reaction, user) =>
            emojis.includes(reaction.emoji.name) && user.id === message.author.id;
            const collector = embedMsg.createReactionCollector(filter, {
                // max number of reactions is the number of categories
                max: '1',
                // it won't accept reactions after 60 seconds
                // optional, you can remove/change it
                time: 45000,
            });
            collector.on('collect', (reaction, user) => {
                // find the category by its emoji
                const selectedCategory = pvpCategory.find(
                    (category) => category.emoji === reaction.emoji.name,
                    );
  
                    if (!selectedCategory) {
                        return message.channel.send('Oops, there was an error... Try again?!');
                    }
                    switch (selectedCategory.name)
                    {
                        case "Augur":
                            officerReaction.chooseType(Discord, message, command,"augur")
                            break;
                        case "Enterprise":
                            officerReaction.chooseType(Discord, message, command,"enterprise")
                            break;
                        case "D4":
                            officerReaction.chooseType(Discord, message, command,"d4")
                            break;
                        case "Discovery":
                            officerReaction.chooseType(Discord, message, command,"discovery")
                            break;
                        default:
                            return message.channel.send("Error | Switch in PVPReaction.PVPTypeSelection")
                    }
                    embedMsg.delete()
                  .catch(console.error);
            });
            collector.on('end', (collected, reason) => {
              // reactions are no longer collected
              // if the user clicked on every available emoji
              
                
      
              // if it's timeout
              if (reason === 'limit') { 
                  return null;
            }

            return message.channel.send(`You took to long, so timing out, you gotta be faster next time ;)`);
            });
          });
        }
}

module.exports = { 
    PVPTypeSelection
}
