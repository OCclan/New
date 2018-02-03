const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message) {
    console.log("Ready");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(message.content == "hello") {
        message.channel.sendMessage("Hi, there!");
    }
});

bot.login(process.env.BOT_TOKEN);
