const discord = require("discord.js");
module.exports.run = async (bot, message, arguments, guild) => {

    const banUser = message.mentions.members.first() || message.guild.members.get(arguments[0]);

    if (!banUser) return message.channel.send("User not found!");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions for this yet!")

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban this user!")
    banUser.ban(arguments.slice(1).join(" "))
    var banname = `logs`;
    banUser.ban(arguments.slice(1).join(" "))
    const banChannel = message.guild.channels.find(x => x.name === banname);
    if (!banChannel) return message.guild.send("Can't find the logs channel!");
    // // message.guild.member(banUser).kick(reason);
    let ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setThumbnail(banUser.user.displayAvatarURL)
        .addField("Banned user", banUser)
        .addField("Gebanned by", message.author)
        .addField("Reason", reason)
        .setColor("#e64b0e")
    banChannel.send(ban);
    message.channel.send(`${banUser} has been banned for the reason ${reason} by ${message.author}`)
    return;


}

module.exports.help = {
    name: "ban"


}