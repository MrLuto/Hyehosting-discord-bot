const discord = require("discord.js");

module.exports.run = async (bot, message, args, guild) => {

    // rps steen papier schaar.

    if (!args[0]) return message.channel.send("Use the command like this: !rps rock / paper / scissors");

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)]; // 0.22 *3 = 0,66

    if(args[0] == "rock"){

        if(result === "paper"){

            message.channel.send(`I have ${result} :notepad_spiral:, I win!`);

        
        } else if (result == "scissors"){
            message.channel.send(`I have ${result} :scissors:, You win!`)
        }else if(result == "rock"){
            message.channel.send(`I have ${result} :moyai:, it is a draw!`)
        }

    }
    else if(args[0] == "paper"){

        if(result === "paper"){

            message.channel.send(`I have ${result} :notepad_spiral:, it is a draw!`);

        
        } else if (result == "scissors"){
            message.channel.send(`I have ${result} :scissors:, I win!`)
        }else if(result == "rock"){
            message.channel.send(`I have ${result} :moyai:, You win!`)
        }

    }
    else if (args[0] == "scissorsr"){

        if(result === "paper"){

            message.channel.send(`I have ${result} :notepad_spiral:, You win!`);

        
        } else if (result == "scissors"){
            message.channel.send(`I have ${result} :notepad_spiral:, it is a draw!`); 
        }else if(result == "rock"){
            message.channel.send(`I have ${result} :moyai:, I win!`)
        }

    }






}

module.exports.help = {
    name: "rps"


}