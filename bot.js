const { Client, RichEmbed, Collection } = require('discord.js')

const snek = require('snekfetch')

const roblox = require('roblox.js')

const bot = new Client()

bot.commands = new Collection();

require('fs').readdir('./commands/', (err, files) => {
  files.filter(f => f.split('.').pop() === 'js').forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })

  })
})



bot.on('ready', () => {
  bot.user.setActivity('over Rangers of Fire', {type: "WATCHING"})
  console.log('Ro-Bot Ready!')
})

 
