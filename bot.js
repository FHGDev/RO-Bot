const { Client, RichEmbed, Collection } = require('discord.js')

const prefix = 'ro;'

const snek = require('snekfetch')

const roblox = require('roblox.js')

const bot = new Client()

roblox.login('FreakingHulk', process.env.pw).then(i => {
  console.log(`Logged in as ${i.userId}.`)
    

  
  

})
                                                  

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

bot.on('message', message => {
  if (!message.guild) return;
  if (!message.author.bot) return;
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const loggedcmd = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(loggedcmd)
  const em = new RichEmbed()
  .setTitle("Ro-Bot")
  .setTimestamp()
  .setColor("RANDOM")

  if (cmd) {
    cmd.run(bot, message, args, em)
    console.log(`${message.author.username} used the ${loggedcmd} command.`)
  }
})



bot.login(process.env.tok)

 
