const discord = require("discord.js");
const botConfig = require("../config/botconfig.json");
const bot = new discord.Client();
bot.commands = new discord.Collection();
bot.on("message", async message => {
    // als bot bericht stuurt stuurt hij m weg oftewel return
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        var info = new discord.RichEmbed()
            .setAuthor(`Je zit in de DM van: ${bot.user.username}`)
            .setDescription("Ik denk dat er iets fout is gegaan! Je kan mij niet gebruiken in DM!")
            .setTimestamp()
            .setColor('#fc0400')
        return message.channel.send(info);
    }

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);

})