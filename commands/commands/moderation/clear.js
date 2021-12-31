const { Message } = require("discord.js");

module.exports = {
    commands: 'clear',
    expectedArgs: '<quantità>',
    maxArgs: 1,
    callback: async (message, arguments, text, client) => {
        message.delete().then()

        if (!arguments[0]) return message.reply(`Per favore inserisci la quantità di messaggi che vuoi cancellare!`)
        if (isNaN(arguments[0])) return message.reply(`Please enter a valid number!`)

        if (arguments[0] > 100) return message.reply(`You can't delete more than 100 messages!`)
        if (arguments[0] < 1) return message.reply(`Devi eliminare almeno 1 messaggio!`)

        await message.channel.messages.fetch({ limit: arguments[0]}).then(messages => {
            message.channel.bulkDelete(messages, true)
            .then(deleted => message.channel.send(`Ho cancellato \`${deleted.size}\` messaggi(o)!`))
            .then(message => message.delete({ timeout: 3000 }))
            .catch(err => message.reply(`Qualcosa è andato storto ${err}`))
        })

    },
    permissions: ['MANAGE_MESSAGES'],
}