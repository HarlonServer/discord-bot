const chalk = require("chalk");
const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  name: "guildMemberAdd",
  once: false,
  execute(member, client) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channels.cache.get("304262753160527872");
    const welcomeMessage = `Welcome to the server <@${member.id}>!`;

    const welcomeEmbed = new EmbedBuilder()
      .setTitle(`Welcome to HCS!`)
      .setDescription(
        "Welcome to the Discord server for the Harlon City Server."
      )
      .setColor(0x00f51d)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .addFields([
        {
          name: '"I can\'t chat!"',
          value:
            "To unlock chat access, please use `/discord link` in-game to connect your Minecraft and Discord accounts. DM <@605320600403312650> the verification code that you get in-game. *You must be a resident in-game to chat!*",
        },
      ]);
    
    welcomeChannel.send(welcomeMessage);
    welcomeChannel.send({embeds: [welcomeEmbed]});
  },
};
