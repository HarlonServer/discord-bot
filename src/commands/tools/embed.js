const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Sends the welcome information for new users.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`Welcome to HCS!`)
            .setDescription('Welcome to the Discord server for the Harlon City Server. Use the menu attached to this message for FAQs you might have.')
            .setColor(0x00f51d)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .addFields([
                {
                    name: '\"I can\'t chat!\"',
                    value: 'To unlock chat access, please use \`/discord link\` in-game to connect your Minecraft and Discord accounts. DM <@605320600403312650> the verification code that you get in-game. *You must be a resident in-game to chat!*',
                }]
            );

            await interaction.reply({
                embeds: [embed]
            });
    }
}