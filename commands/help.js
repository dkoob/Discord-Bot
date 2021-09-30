const Discord = require('discord.js');
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { TextChannel, MessageEmbed, Message } = require('discord.js');

/* 
so for embeds, you want to define a constant as show above "const { MessageEmbed } = require('discord.js');"" before anything.
This is the constant that actually lets us use embed files from the discord.js api. Next you can see below you have to set 
a constant for a new embed, I named this once embedHelp but you can name it whatever you want. Following is a row of 
strings that all assign different values to the embed (self explanatory names).
*/
    const embedHelp = {
	color: 0x0099ff,
	title: 'List of Commands',
	author: {
		name: 'kyuu#0001',
		icon_url: 'https://i.imgur.com/JfFsczj.jpeg',
	},
	description: 'Shows the list of all valid commands',
	thumbnail: {
		url: 'https://i.imgur.com/fpsNX9B.png',
	},
	fields: [
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: '**PUBLIC COMMANDS**',
			value: 'All commands available to every member',
		},
        {
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: 'Help',
			value: 'This List **|** Usage: /help',
		},
		{
			name: 'Ping',
			value: 'For Testing Purposes **|** Usage: /ping',
		},
        {
			name: 'Invite Link',
			value: 'Provides you with our Bots invite link! **|** Usage: /invitelink',
		},
        {
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: '**STAFF COMMANDS**',
			value: 'All commands available to staff members',
		},
        {
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Staff Help',
			value: 'Displays all commands related to Staff permissions **|** Usage: /staffhelp',
		},
    ],
	timestamp: new Date(),
};


// this module down here is the same as in ping.js - for basic commands we can use the same async await function.
// Async defines a promise so in this case, "Send the embed file" and await waits until that promise is ready to be sent, to send it.
module.exports = {
	data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Sends a list of current commands'),
    async execute(client, interaction) {
        await interaction.reply({ embeds: [embedHelp] });
    }
}