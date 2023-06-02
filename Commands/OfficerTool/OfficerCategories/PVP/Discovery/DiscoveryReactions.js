const createEmbed = require('../../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Summoning":
        embed = createEmbed.createOfficerEmbed("Discovery");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "PVP Alternative 1":
        embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 1");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "PVP Alternative 2":
        embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 2");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "PVP Alternative 3":
        embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 3");

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
