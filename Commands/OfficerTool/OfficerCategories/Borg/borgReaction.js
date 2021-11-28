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
                var embed = createEmbed.createOfficerEmbed("Borg Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Hostile Primary":
                var embed = createEmbed.createOfficerEmbed("Borg Primary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Hostile Alternative 1":
                var embed = createEmbed.createOfficerEmbed("Borg Secondary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "Hostile level 29":
                var embed = createEmbed.createOfficerEmbed("Borg Level 29 Hostiles");
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