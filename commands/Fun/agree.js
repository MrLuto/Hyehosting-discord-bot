const discord = require("discord.js");

module.exports.run = async (bot, message, args, guild) => {

    client.on('message', msg => {
        if (msg.content === 'test') {
        msg.reply('ping pong');
        }
    });
}

module.exports.help = {
    name: "test"


}