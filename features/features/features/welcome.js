module.exports = (client) => {
  const channelId = "869865655711707188"; // welcome channel
  const guild = "378568766188945411"; //Guild ID

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      const message = `Benvenuto <@${member.id}> sul server! `;

      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    } else return;
  });
};
