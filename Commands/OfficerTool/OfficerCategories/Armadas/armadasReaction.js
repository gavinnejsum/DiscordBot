const editFunctions = require('../../../../editFunctions.js');
const createEmbed = require('../../../../createEmbeds.js');

function crewTypeSelection(Discord, message, command, args) { 
    if(args.length > 0)
    {
        if(Array.isArray(args)) {
            input = editFunctions.ArgumentToString(args);
        }
        switch (args) {
            case "Normal":
                var embed = createEmbed.createOfficerEmbed("Armada 5");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Morale":
                var embed = createEmbed.createOfficerEmbed("Armada Morale");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Borg":
                var embed = createEmbed.createOfficerEmbed("Borg Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Stella":
                var embed = createEmbed.createOfficerEmbed("Stella Armada");
                var embed2 = createEmbed.createOfficerEmbed("Stella Solo Armadas");
                if (embed != null || embed2 != null) {
                    message.channel.send(embed2)
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Swarms":
                var embed = createEmbed.createOfficerEmbed("Swarm Armada");
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