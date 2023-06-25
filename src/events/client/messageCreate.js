const chalk = require("chalk");
const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  name: "messageCreate",
  once: false,
  execute(message) {
    if (message.author.bot) return false;
    if (message.content.includes("ryan" && "higa")){
        message.reply('teehee! teehee! TEEHEE!!!!')
    };
  },
};
