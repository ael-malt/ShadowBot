const { Message } = require("discord.js");

module.exports = {
    commands: 'ban',
    expectedArgs: '<[@membro]>',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text, cl) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`<@${target.id}> è stato vietato!`)
        } else {
            message.channel.send(`${tag} Si prega di specificare qualcuno da vietare!`)
        }
    },
    permissions: ['BAN_MEMBERS'],
}