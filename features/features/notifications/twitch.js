const { prefix } = require('@root/config.json');
const channelId = '869894597768253454' //Notifs <server> //#Twitch

module.exports = (client,) => {
    client.on('message', (message) => {
        const { guild, content } = message

        const arguments = content.split(/[ ]+/)
        arguments.shift()

        const array = arguments
        const args = array.join(' ')

        if (content.startsWith(`${prefix}t-w-i-t-c-h`)) {
            if (!channelId)
                return;

            console.log(content);

            const targetGuild = client.guilds.cache.get('378568766188945411'); //Target server to announce
            if (!guild) return console.log("Impossibile ottenere la gilda.");

            const targetChannel = targetGuild.channels.cache.get('869901158049808437'); //Target channel to announce

            targetChannel.send(args);
            return
        } else return
    })
}