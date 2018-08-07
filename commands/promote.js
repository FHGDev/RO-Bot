const discord = require('discord.js')
const roblox = require('roblox-js')
const groupid = 4173965
module.exports.run = (bot, message, args, em) => {
  const name = args.join(' ');
  roblox.login('FreakingHulk', process.env.pw)
  roblox.getIdFromUsername(name).then(id => {
    roblox.promote(groupid, id).catch(err => {
      if (!err) message.channel.send(`Promoted ${roblox.getUsernameFromId(id)} in the group.`);
      if (err) console.error(err)
    })
  })
}

module.exports.help = {
  name: "promote"
}
