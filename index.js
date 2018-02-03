const Discord = require("discord.js");

const TOKEN = "NDA5NDY1MzQ5ODM5MjU3NjAw.DVe_1w.4gZtWQ4bHOH5MXmb7OryRHhFDU0";

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
