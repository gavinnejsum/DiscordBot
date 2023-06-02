const createEmbed = require('../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Armada":
        embed = createEmbed.createOfficerEmbed("Borg Armada");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Primary":
        embed = createEmbed.createOfficerEmbed("Borg Primary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Alternative 1":
        embed = createEmbed.createOfficerEmbed("Borg Secondary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile level 29":
        embed = createEmbed.createOfficerEmbed("Borg Level 29 Hostiles");

        if (embed != null) {
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
