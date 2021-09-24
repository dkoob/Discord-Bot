const Discord = require('discord.js');
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { TextChannel, MessageEmbed, Message } = require('discord.js');
const { execute } = require('./ping');

let embed = new MessageEmbed()
    .setTitle("List of Valid Commands")
    .setDescription("Gives a list of valid commands")
    .setColor("DARK_PURPLE")

module.exports = {
	data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Sends a list of current commands'),
    async execute(interaction) {
        await interaction.reply(embed)
    }
}