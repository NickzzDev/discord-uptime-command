const Discord = require('discord.js');

exports.run = (client, msg, args) => {

    let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000 ) % 60;
    let seconds = Math.floor(client.uptime / 1000 ) % 60;

    const upembed = new Discord.MessageEmbed()
    .setColor("0x06F7C7")
    .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true}))
    .setDescription(`⌛ My Total Uptime is **${days}d ${hours}h ${minutes}m ${seconds}s**`)
    .setFooter(`Project NightFall`, client.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    msg.channel.send({ embeds: [upembed] })
}
