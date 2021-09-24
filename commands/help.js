const Discord = require('discord.js');
const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { TextChannel, MessageEmbed, Message } = require('discord.js');
const { execute } = require('./ping');

/* so for embeds, you want to define a constant as show above "const { MessageEmbed } = require('discord.js');"" before anything.
This is the constant that actually lets us use embed files from the discord.js api. Next you can see below you have to set 
a constant for a new embed, I named this once embedHelp but you can name it whatever you want. Following is a row of 
strings that all assign different values to the embed (self explanatory names).
*/
const embedHelp = new MessageEmbed()
    .setColor('#900C3F')
    .setTitle('List of Commands')
    .setAuthor('kyuu#0001', 'https://imgur.com/a/ufYxgQb')
    .setDescription('Shows the list of all current valid commands')
    /* commented out this line because its currently not working and i'll look at it later
    .setThumbnail('https://imgur.com/a/qB9G8Jn')
    */
    .addField('\u200b', '\u200b')
    .addFields(
        { name: 'Help', value: 'This List' },
        { name: 'Ping', value: 'For Testing Purposes' },
    )
    .setTimestamp()
    .setFooter('Run this command any time you forget anything!');

// this module down here is the same as in ping.js - for basic commands we can use the same async await function.
// Async defines a promise so in this case, "Send the embed file" and await waits until that promise is ready to be sent, to send it.
module.exports = {
	data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Sends a list of current commands'),
    async execute(interaction) {
        await interaction.reply({ embeds: [embedHelp] });
    }
}