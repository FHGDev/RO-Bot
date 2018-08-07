const discord = require('discord.js');
const roblox = require('roblox-js');
const bot = new discord.Client();
const prefix = 'ro;'
bot.login(process.env.tok)

bot.commands = new discord.Collection();

console.log('Loading commands...')

require('fs').readdir('./commands/', (err, files) => {
  if (err) return console.log('Command Loading Failed!');
  files.filter(f => f.split(".").pop() === "js").forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  });
});

bot.on('ready', () => {
  console.log('RO-Bot v0.0.1 Ready!');
  bot.user.setActivity('over Rangers of Fire', {type: "WATCHING"});
});

roblox.login('FreakingHulk', process.env.pw).then(ui => {
  console.log(`Logged in as FreakingHulk.`);
});

bot.on('message', message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  
  const mArray = message.content.split(" ");
  const args = mArray.slice(1);
  const logcmd = mArray[0].slice(prefix.length);
  const cmd = bot.commands.get(logcmd);
  const em = new discord.RichEmbed()
  .setTitle("Ro-Bot")
  .setTimestamp()
  .setColor("RANDOM");
  
  if (cmd) {
    cmd.run(bot, message, args, em);
    console.log(`${message.author.username} used the ${logcmd} command.`);
  }
});
