const discord = require("discord.js");

module.exports.run = async (bot, message, args, guild) => {

    // cf heads tails.

    if (!args[0]) return message.channel.send("Use the command like this: !cf heads / tails");

    var options = ["heads", "tails"];

    var result = options[Math.floor(Math.random() * options.length)]; // 0.22 *3 = 0,66

    if(args[0] == "heads"){

        if(result === "tails"){

            message.channel.send(`I have ${result}, I win!`);

        }else if(result == "heads"){
            message.channel.send(`I have ${result}, You win!`)
        }

    }
    else if(args[0] == "tails"){

        if(result === "tails"){

            message.channel.send(`I have ${result}, you win!`);

        }else if(result == "heads"){
            message.channel.send(`I have ${result}, I win!`)
        }

    }






}

module.exports.help = {
    name: "cf"


}