const discord = require('discord.js')
const roblox = require('roblox-js')
const groupid = 4173965
module.exports.run = (bot, message, args, em) => {
  const name = args[1]
  const role = args.join(' ').slice(1)
  roblox.login('FreakingHulk', process.env.pw)
  console.log(role);
  roblox.getIdFromUsername(name).then(id => {
    roblox.setRank(groupid, id, role).then(() => {
      message.channel.send(`Promoted ${name}.`)
    }).catch(err => {
      console.error(err)
    })
  })
}

module.exports.help = {
  name: "setrank"
}
