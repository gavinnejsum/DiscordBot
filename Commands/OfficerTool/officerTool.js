const createEmbed = require('../../createEmbeds');
const editFunctions = require('../../editFunctions.js');



function officerCommand(Discord, message, command, args) {
    if(args.length > 0)
    { 
        input = editFunctions.ArgumentToString(args);
        switch (input) {
            case "armada":
                
                var embed = createEmbed.createOfficerEmbed("Armada");
                if (embed != null) {
                    return message.channel.send(embed);
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
            
            default:
                return message.channel.send("Name Error");
                
        }

    }



}



module.exports = { 
    officerCommand
}