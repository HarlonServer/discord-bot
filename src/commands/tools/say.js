const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Announce things!')
        .addStringOption((option) => 
             option.setName('targetchannel')
                   .setDescription('Paste the target channel ID.')),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const channelID = interaction.options.getString('targetchannel');
        const newMessage = 'hello ' + channelID;

        await interaction.editReply({
            content: newMessage
        });
    }
}