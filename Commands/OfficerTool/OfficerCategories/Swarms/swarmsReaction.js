const createEmbed = require('../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Armada":
        embed = createEmbed.createOfficerEmbed("Swarm Armada");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Primary":
        embed = createEmbed.createOfficerEmbed("Swarms Hostile Alternative 1");

        if (embed != null) {
            return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Alternative 1":
        embed = createEmbed.createOfficerEmbed("Swarms Hostile Alternative 2");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Alternative 2":
        embed = createEmbed.createOfficerEmbed("Swarms Hostile Alternative 3");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Hostile Alternative 3":
        embed = createEmbed.createOfficerEmbed("Swarms Hostile Alternative 4");

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
