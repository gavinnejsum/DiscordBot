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
const createEmbeddedMessages = require('../../createEmbeds.js');



    function chooseType(Discord, message, command, args) { 
        var embed = createEmbeddedMessages.officerTypeReaction(args);
        if(embed!= null) { 
            message.channel.send(embed).then((embedTypeMsg) => {
                // send reactions for each getOfficerCategories
                const getOfficerCategories = getOfficerCategory(args.toString());
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
                        default:
                            break;
                    }
                        if (!selectedCategory) {
                            embedTypeMsg.delete()
                           .catch(console.error);
                            return message.channel.send('Oops, there was an error... Try again?!');
                        }
                    //     embedTypeMsg.delete()
                    //   .catch(console.error);
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
                case "armada":
                case "armadas": 
                    return armadaCategory.map((cat) => cat.emoji);
                default:
                    return message.channel.send("Error, please try again");
                    break;
            }
        }
    }

    function crewTypeSelection(Discord, message, command, args) { 
        if(args.length > 0)
        { 
            if(Array.isArray(args)) {
                input = editFunctions.ArgumentToString(args);
            }
        switch (args) {
            case "normal armada":
            case "armada normal":          
                var embed2 = createEmbeddedMessages.createOfficerEmbed("Armada Morale");
                if (embed2 != null) {
                    return message.channel.send(embed2);
                } else {
                    return message.channel.send("Error");
                }
            case "discovery":
            case "disco":
                var embed = createEmbed.createOfficerEmbed("Discovery");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg":
                officerReaction.chooseType(Discord, message, command, args);
            case "primary borg":
            case "borg primary":
            case "best borg":
            case "borg best":
                var embed = createEmbed.createOfficerEmbed("Borg Primary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg secondary":
            case "secondary borg":
                var embed = createEmbed.createOfficerEmbed("Borg Secondary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg armada":
            case "aramda borg":
                var embed = createEmbed.createOfficerEmbed("Borg Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "swarm":
            case "swarms":
               // var embed = reaction.chooseCrewType(Discord, message, command, args);
                break;
            case "swarm primary":
                var embed = createEmbed.createOfficerEmbed("Swarms Primary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "swarms secondary":
            case "swarm secondary":
            case "secondary swarm":
                var embed = createEmbed.createOfficerEmbed("Swarms Secondary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                } 
            case "swarm armada":
            case "armada swarm": 
            var embed = createEmbed.createOfficerEmbed("Swarm Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "para bellum":
            case "pb":
            
                var embed = createEmbed.createOfficerEmbed("Para Bellum");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "heavies":
            case "heavy transports":
            case "ent heavy":
            case "augur heavy": 
            case "heavy transporters":
            case "heavy transporter":
                var embed = createEmbed.createOfficerEmbed("Heavy Transporters Enterprise");
                var embed2 = createEmbed.createOfficerEmbed("Heavy Transporters Augur")
                if (embed != null && embed !=null) {
                    message.channel.send(embed2);
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "stella": 
               // var embed = reaction.chooseCrewType(Discord, message, command, args);
                break;
            case "stella armada":
            case "armada stella":
                var embed = createEmbed.createOfficerEmbed("Stella Solo Armadas");
                var embed2 = createEmbed.createOfficerEmbed("Stella Armada")
                if (embed != null && embed !=null) {
                    message.channel.send(embed);
                    return message.channel.send(embed2);
                } else {
                    return message.channel.send("Error");
                }
            default:
                return message.channel.send("Name Error");
                
        }
    }
}
    

    module.exports = { 
        chooseType,
    }