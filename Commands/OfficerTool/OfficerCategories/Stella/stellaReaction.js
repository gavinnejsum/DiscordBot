const createEmbed = require('../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Armada":
        embed = createEmbed.createOfficerEmbed("Stella Armada");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Armada Solo":
        embed = createEmbed.createOfficerEmbed("Stella Solo Armadas");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Primary Hostile Crew":
        embed = createEmbed.createOfficerEmbed("Stella Primary Hostile");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Loot Crew":
        embed = createEmbed.createOfficerEmbed("Stella Max Loot");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      default:
        return message.channel.send("Name Error");
    }
  }

  return null
}

module.exports = { 
  crewTypeSelection
}
