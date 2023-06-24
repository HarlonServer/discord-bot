const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dodo')
        .setDescription('Does stuff!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Hiya! \nAPI Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: newMessage
        });
    }
}