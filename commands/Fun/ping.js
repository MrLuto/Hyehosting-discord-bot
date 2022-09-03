const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("You do not have permissions for this yet!")

    message.delete().catch(O_o=>{}); 
 

    message.channel.send("pong");
return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "ping"
}