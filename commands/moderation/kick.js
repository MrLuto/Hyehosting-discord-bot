const discord = require("discord.js");

module.exports.run = async (bot, message, arguments, guild) => {

    const kickUser = message.mentions.members.first() || message.guild.members.get(arguments[0]);

    if (!kickUser) return message.channel.send("User not found!");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions for this yet!")

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick this user! ")
    kickUser.kick(arguments.slice(1).join(" "))
    var kickname = `logs`;
    const kickChannel = message.guild.channels.find(x => x.name === kickname);
    if (!kickChannel) return message.guild.send("Can't find the logs channel!");
    // // message.guild.member(kickUser).kick(reason);
    let kick = new discord.RichEmbed()
        .setDescription("Kick")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .addField("Kicked user:", kickUser)
        .addField("Kicked by", message.author)
        .addField("reason", reason)
        .setColor("#e64b0e")
    kickChannel.send(kick);
    message.channel.send(`${kickUser} was kicked with the reason ${reason} by ${message.author}`)
    return;


}

module.exports.help = {
    name: "kick"


}