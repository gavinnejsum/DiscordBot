const editFunctions = require('../../../../editFunctions.js');
const createEmbed = require('../../../../createEmbeds.js');

function crewTypeSelection(Discord, message, command, args) { 
    if(args.length > 0)
    {
        if(Array.isArray(args)) {
            input = editFunctions.ArgumentToString(args);
        }
        switch (args) {
            case "Armada":
                var embed = createEmbed.createOfficerEmbed("Stella Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Armada Solo":
                var embed = createEmbed.createOfficerEmbed("Stella Solo Armadas");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Primary Hostile Crew":
                var embed = createEmbed.createOfficerEmbed("Stella Primary Hostile");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Hostile Loot Crew":
                var embed = createEmbed.createOfficerEmbed("Stella Max Loot");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            default:
                return message.channel.send("Name Error");    
        }
    }
}
module.exports = { 
    crewTypeSelection
}