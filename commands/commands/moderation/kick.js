const { Message } = require("discord.js");

module.exports = {
    commands: 'kick',
    expectedArgs: '<[@membro]>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`<@${target.id}> è stato preso a calci!`)
        } else {
            message.channel.send(`${tag} Per favore specifica qualcuno da calciare!`)
        }
    },
    permissions: ['KICK_MEMBERS'],
}