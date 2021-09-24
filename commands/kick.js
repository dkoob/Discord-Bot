const Discord = require('discord.js');
const { SlashCommandBuilder, channelMention, memberNicknameMention } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks specified member from the server'),
    async execute(interaction) {
        member.kick( [reason] )
        await interaction.reply("The requested user has been kicked!");
    }
}