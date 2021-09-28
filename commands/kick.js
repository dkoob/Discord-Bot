    require('dotenv').config();
    const discord = require('discord.js')
    const { Client, MessageEmbed, Intents } = require('discord.js')
    const client = new discord.Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS ] });
    const { SlashCommandBuilder } = require('@discordjs/builders');
    var guild = client.guilds.cache.get(process.env.GUILDID)

    module.exports = {
        data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Allows the admin or owner to kick the member.")
        .addUserOption((option) => option.setName('user').setDescription('The person who you want to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason to kick member').setRequired(true)),
        
        execute: async (client, interaction, channel) => {

            const user = interaction.options.getUser('user')
            const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

            if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.followUp({ content: "You're missing the corrent permissions :(", ephemeral: true })
            
            if(!member) return interaction.deferReply("I am unsure of who to kick!");
            const reason = interaction.options.getString('reason')

            if(!member.kickable || member.user.id === client.user.id) 
            return interaction.deferReply("I am unable to kick this member");
            
            if(interaction.member.roles.highest.position <= member.roles.highest.position) 
            return interaction.deferReply('Given member has a higher or equal rank as you so I can not kick them.')
            
            
            const embed = new MessageEmbed()
            .setDescription(`**${member.user.tag}** is kicked out from the server for \`${reason}\``)
            .setColor("RANDOM")
            .setFooter("Kick Member")
            .setTimestamp()
            
            
            await member.user.send(`You have been kicked from **\`${interaction.guild.name}\`** for \`${reason}\``).catch(err => {})
            member.kick({ reason })

            return interaction.reply({ embeds: [embed]})

        },
        
    };