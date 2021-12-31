const { Message } = require("discord.js");

module.exports = {
    commands: 'ping',
    callback: (message, arguments, text, client) => {
        message.reply('Calcolo del ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
      
            resultMessage.edit(
                `Pong!\n**Latenza dei bot: **${ping}\n**Latenza del API: **${client.ws.ping}`)
          })
    },
}