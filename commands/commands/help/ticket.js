const channelId = '869874570331582486' //Ticket Channel
const check = '✅'
let registered = false

const registerEvent = (client) => {
  if (registered) {
    return
  }

  registered =

    client.on('messageReactionAdd', (reaction, user) => {
      if (user.bot) {
        return
      }

      const { message } = reaction
      if (message.channel.id === channelId) {
        message.delete()
      }
    })
}

module.exports = {
  commands: ['ticket', 'support'],
  minArgs: 1,
  expectedArgs: '<Messaggio>',
  callback: (userMessage, arguments, text, client) => {
    const { guild, member } = userMessage

    registerEvent(client)

    const channel = guild.channels.cache.get(channelId)
    channel
      .send(
        `Un nuovo biglietto è stato creato da<@${member.id}>
    
"${text}"
Clicca l'icona ${check} quando questo problema è stato risolto.`
      )
      .then((ticketMessage) => {
        ticketMessage.react(check)

        userMessage.reply(
          'Il tuo biglietto è stato inviato! Attendi una risposta entro 24 ore'
        )
      })
  },
}
