const getCategories = require('../Reaction/categories.json');
const officerTool = require('./officerTool.js')
const borgCategory = require('./OfficerCategories/Borg/Borg.json');
const borgReaction = require('./OfficerCategories/Borg/borgReaction.js');
const stellaCategory = require('./OfficerCategories/Stella/Stella.json');
const stellaReaction = require('./OfficerCategories/Stella/stellaReaction.js');
const armadaCategory = require('./OfficerCategories/Armadas/Armadas.json');
const armadaReaction = require('./OfficerCategories/Armadas/armadasReaction.js');
const swarmCategory = require('./OfficerCategories/Swarms/Swarms.json');
const swarmReaction = require('./OfficerCategories/Swarms/swarmsReaction.js');
const discoveryCatergory = require('./OfficerCategories/PVP/Discovery/Discovery.json')
const discoveryReactions = require('./OfficerCategories/PVP/Discovery/DiscoveryReactions.js')
const augurCategory =require('./OfficerCategories/PVP/Augur/Augur.json')
const augurReaction =require('./OfficerCategories/PVP/Augur/augurReaction.js')
const enterpriseCategory =require('./OfficerCategories/PVP/Enterprise/Enterprise.json')
const enterpriseReaction =require('./OfficerCategories/PVP/Enterprise/enterpriseReaction')
const d4Category =require('./OfficerCategories/PVP/D4/D4.json')
const d4Reaction =require('./OfficerCategories/PVP/D4/d4Reaction.js')
const createEmbeddedMessages = require('../../createEmbeds.js');



    function chooseType(Discord, message, command, args) { 
        var embed = createEmbeddedMessages.officerTypeReaction(args);
        if(embed!= null) { 
            message.channel.send(embed).then((embedTypeMsg) => {
                // send reactions for each getOfficerCategories
                 getOfficerCategories = getOfficerCategory(args.toString());
                getOfficerCategories.forEach((emoji) => embedTypeMsg.react(emoji));
                // the filter checks if the reaction emoji is in the categories
                // it also checks if the person who reacted shares the same id
                // as the author of the original message
                const filter = (reaction, user) =>
                getOfficerCategories.includes(reaction.emoji.name) && user.id === message.author.id;
                const collector = embedTypeMsg.createReactionCollector(filter, {
                    // max number of reactions is the number of categories
                    max: '1',
                    // it won't accept reactions after 60 seconds
                    // optional, you can remove/change it
                    time: 45000,
                });
                collector.on('collect', (reaction, user) => {
                    // find the category by its emoji 
                    var selectedCategory="";
                    switch (args.toString()) {
                        case "borg":
                        case "borgs":
                            selectedCategory=  borgCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                borgReaction.crewTypeSelection(Discord, message, command,selectedCategory.name);
                        break;
                        case "armada":
                        case "armadas":
                            selectedCategory=  armadaCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                armadaReaction.crewTypeSelection(Discord, message, command,selectedCategory.name);
                        break;
                        case "stella":
                        case "stellas":
                            selectedCategory=  stellaCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                stellaReaction.crewTypeSelection(Discord, message, command,selectedCategory.name);
                        break;
                        case "swarms":
                        case "swarm":
                            selectedCategory=  swarmCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                swarmReaction.crewTypeSelection(Discord, message, command,selectedCategory.name);
                                
                            break;
                        case "discovery":
                        case "disco":
                            selectedCategory= discoveryCatergory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                discoveryReactions.crewTypeSelection(Discord, message,command,selectedCategory.name);
                                break;
                        case "enterprise":
                        case "ent":
                            selectedCategory= enterpriseCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                enterpriseReaction.crewTypeSelection(Discord, message,command,selectedCategory.name);
                            break;
                        case "augur":
                            selectedCategory= augurCategory.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                augurReaction.crewTypeSelection(Discord, message,command,selectedCategory.name);
                        break;
                        case "d4":
                            selectedCategory= d4Category.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                d4Reaction.crewTypeSelection(Discord, message,command,selectedCategory.name);
                            break;
                        default:
                            break;
                    }
                        if (!selectedCategory) {
                            embedTypeMsg.delete()
                           .catch(console.error);
                            return message.channel.send('Oops, there was an error... Try again?!');
                        }
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
    function getOfficerCategory(purpose) {

        if(purpose != null) {      
            switch (purpose) {
                case "borg":
                case "borgs":
                   return borgCategory.map((cat) => cat.emoji);
                case "swarm":
                case "swarms":
                    return swarmCategory.map((cat) => cat.emoji);
                case "stella":
                case "stellas":
                    return  stellaCategory.map((cat) => cat.emoji);
                case "disco":
                case "discovery":
                    return discoveryCatergory.map((cat) => cat.emoji);
                case "armada":
                case "armadas": 
                    return armadaCategory.map((cat) => cat.emoji);
                case "enterprise":
                    return enterpriseCategory.map((cat) => cat.emoji);
                case "augur":
                    return augurCategory.map((cat) => cat.emoji);
                case "d4":
                    return d4Category.map((cat) => cat.emoji);
                default:
                    return message.channel.send("Error, please try again");
            }
        }
    }
    module.exports = { 
        chooseType,
    }