const { Message, MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'userinfo',
    callback: async (message, arguments, text, client) => {
            const { guild, channel} = message

            const user = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user.id)


            const embed = new MessageEmbed()
            .setAuthor(`Informazioni utente per ${user.username}`, (user.avatarURL({ dynamic:true })))
            .setThumbnail(user.avatarURL({ dynamic:true }))
            .addFields ({

                name: 'User tag',
                value: user.tag,
            },
            {
                name:'È un bot?',
                value: user.bot,
            },
            {
                name: 'Soprannome del server',
                value: member.nickname || 'None'
            },
            {
                name: 'Server unito',
                value: new Date(member.joinedTimestamp).toLocaleDateString()
            },
            {
                name:'Discord unito',
                value: new Date(user.createdTimestamp).toLocaleDateString()
            },
            {
                name: 'Conteggio dei ruoli',
                value: member.roles.cache.size - 1,
            })
            
            
            message.channel.send(embed)
    },

}