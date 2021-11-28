const getCategories = require('./categories.json');
const officerTool = require('../OfficerTool/officerTool.js')
const borgCategory = require('../OfficerTool/OfficerCategories/Borg/Borg.json');
const stellaCategory = require('../OfficerTool/OfficerCategories/Stella/Stella.json');
const armadaCategory = require('../OfficerTool/OfficerCategories/Armadas/Armadas.json');
const swarmCategory = require('../OfficerTool/OfficerCategories/Swarms/Swarms.json');
const getEventType = require('./eventType.json')
const createEmbeddedMessages = require('../../createEmbeds.js');
const events = require('../Events/events');
const helpers = require('../../helpers.js');

function chooseEventName(Discord, message, command, args) {
   
    var embed = createEmbeddedMessages.eventNameReaction();
    if(embed!= null) { 
        message.channel.send(embed).then((embedMsg) => {
            // send reactions for each emojis
            const emojis = getCategories.map((cat) => cat.emoji);
  
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
                const selectedCategory = getCategories.find(
                    (category) => category.emoji === reaction.emoji.name,
                    );
  
                    if (!selectedCategory) {
                        return message.channel.send('Oops, there was an error... Try again?!');
                    }
                    chooseEventType(Discord, message, command,selectedCategory.name)
                    //commandEvent(Discord,message,command,["list",selectedCategory.name])
                    //commandEvent(Discord,message,command,[selectedCategory.name])
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
function chooseEventType (Discord, message,command,args) { 
    var embed = createEmbeddedMessages.eventTypeReaction(args);
    if(embed!= null) { 
        message.channel.send(embed).then((embedTypeMsg) => {
            // send reactions for each emojis
            const emojis = getEventType.map((cat) => cat.emoji);
            emojis.forEach((emoji) => embedTypeMsg.react(emoji));
            // the filter checks if the reaction emoji is in the categories
            // it also checks if the person who reacted shares the same id
            // as the author of the original message
            const filter = (reaction, user) =>
            emojis.includes(reaction.emoji.name) && user.id === message.author.id;
            const collector = embedTypeMsg.createReactionCollector(filter, {
                // max number of reactions is the number of categories
                max: '1',
                // it won't accept reactions after 60 seconds
                // optional, you can remove/change it
                time: 45000,
            });
            collector.on('collect', (reaction, user) => {
                // find the category by its emoji
        
                const selectedCategory = getEventType.find(
                    (category) => category.emoji === reaction.emoji.name,
                    );
                    if (!selectedCategory) {
                        return message.channel.send('Oops, there was an error... Try again?!');
                    }
                    eventNameAndType= args;
                    if(selectedCategory.type == "big") 
                    { 
                        if(helpers.ifBigHeroic(eventNameAndType)) { 
                            eventNameAndType+=" heroic";
                        } else { 
                            eventNameAndType+=" "+ selectedCategory.type;
                        }
                    } else if(selectedCategory.type == "slb")
                    {
                        eventNameAndType+=" "+ selectedCategory.type;
                    }
                    events.commandEvent(Discord,message,command,["list",eventNameAndType])
                    embedTypeMsg.delete()
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
    chooseEventName,
    chooseEventType,
}