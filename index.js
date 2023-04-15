const { AoiClient, LoadCommands } = require("aoi.js");
//const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
var fs = require('fs')
const aoimongo = require("aoi.mongo");
const keep_alive = require('./keep_alive.js')
const config = require('./configs/config.json')

const bot = new AoiClient({
  token: process.env['TOKEN'],//config.token,
  prefix: "$getVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMembers", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences"],
  events: ['onMessage',
    'onJoin',
    'onLeave',
    'onGuildJoin',
    'onGuildLeave',
    'onInteractionCreate']
  /*
      database: {
      type: "dbdjs.db",
      db: require('dbdjs.db'),
      path: "./database/",
      tables: ['trial']
      }
  */
})





//Event Loader
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")

//variables
bot.variables(require('./configs/variables.js'));



/*
const voice = new AoiVoice(
  bot,
  {
    cache: {
      cacheType: "Memory",
      enabled: true,
    },
  },
  false, //to enable pruneMusic 
);
voice.onTrackStart()
*/



//------------ REBOOT -----------//
bot.readyCommand({
  channel: "",
  code: `
$log[========================================]
$log[Sunucu           || $guildCount]
$log[Yüklenen Komut   || $commandsCount]
$log[Bot Ping         || $pingms]
$log[$userTag[$clientID]   || Bot AKTIF]
$log[========================================]
`
})



//--------------STATUS--------------//
bot.status({
  text: config.botStatus,
  type: "PLAYING",
  status: "online",
  time: 7
})

bot.status({
  text: config.botStatus1,
  type: "WATCHING",
  status: "online",
  time: 7
})

bot.status({
  text: config.botStatus2,
  type: "LISTENING",
  status: "online",
  time: 7
})
