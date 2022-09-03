const discord = require("discord.js");
const botConfig = require("./config/botconfig");
const cmdBackColor = require("./jsonFiles/cmd-backgound-color.json");
const cmdTextColor = require("./jsonFiles/cmd-text-color.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

// const discord = require("discord.js");

// module.exports.run = async (bot, message, args, guild) => {




// }

// module.exports.help = {
//     name: "reviews"


// }

fs.readdir("./commands/information/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/information/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})

fs.readdir("./commands/music/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/music/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})

fs.readdir("./commands/moderation/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/moderation/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})

fs.readdir("./commands/noggeencategorie/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/noggeencategorie/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})

fs.readdir("./commands/tickets/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/tickets/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})

fs.readdir("./commands/Fun/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log(
            cmdBackColor.RED + `could not find files` + cmdTextColor.RESET
        );

    }

    jsFiles.forEach((f, i) => {

        var props = require(`./commands/Fun/${f}`);
        console.log(`The file ${f} has been loaded!`);

        bot.commands.set(props.help.name, props, props);
        console.log(cmdBackColor.CYAN + cmdTextColor.BLACK + "COMMAND" + cmdTextColor.RESET + ": " + `${f} is loaded`);
    })

})
bot.on("ready", async () => {

    console.log(`Username: ${bot.user.username} botUsers: ${bot.users.size} guilds: ${bot.guilds.size} is online and ready to use!`)
    setInterval(async () => {
        const statuslist = [
            `hyehosting.com`,
            'start met  !help',
            'panel.hyehosting.com',
            `start your minecraft server for only $0,74 per month`,
        ];
        /*console.log(statuslist);*/
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await bot.user.setPresence({
                game: {
                    name: `${statuslist[random]}`,
                    type: 'listening',
                },
                status: 'online',
            });
        }
        catch (error) {
            console.error(error);
        }
        // 15000MS nooit aanpassen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, 15000);

})
bot.on("message", async message => {
    // als bot bericht stuurt stuurt hij m weg oftewel return
    if (message.author.bot) return;
    if (message.channel.type == 'text') {
        if (message.content === 'ping') {    
        message.channel.send("pong")
    }
        if (message.content === 'do u agree') {
            var options = ["yes", "yes", "idk", "idk", "idk", "idk", "no","no", "no"];
            var result = options[Math.floor(Math.random() * options.length)];
            if(result === "yes"){
                message.channel.send("I agree")

            }if(result === "no"){
                message.channel.send("I dont agree")

            }if(result === "idk"){
                message.channel.send("I dont know if i want to agree")

            }
        
    }


}})

bot.on("message", async message => {
    // als bot bericht stuurt stuurt hij m weg oftewel return
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        var info = new discord.RichEmbed()
            .setAuthor(`You are in the DM of: ${bot.user.username}`)
            .setDescription("I think something went wrong! You can't use me in DM!")
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
var randomXp = Math.floor(Math.random(1) * 15) + 1;

})



bot.login(botConfig.token);