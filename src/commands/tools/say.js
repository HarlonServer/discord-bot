const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Announce things!")
    .addStringOption((option) =>
      option
        .setName("targetchannel")
        .setDescription("Paste the target channel ID.")
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Message to send to target channel.")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction, client) {
    const channelID = interaction.options.getString("targetchannel");
    const messageContent = interaction.options.getString("message");
    if (channelID === null) {
      await interaction.reply({
        content: "Missing Target Channel!",
        ephemeral: true,
      });
    } else {
      const message = await interaction.deferReply({
        fetchReply: true,
      });
      const successMessage = "Sent!";
      
      client.channels.cache.get(channelID).send(messageContent);
      await interaction.editReply({
        content: successMessage,
        ephemeral: true,
      });
    }
  },
};
