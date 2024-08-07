const { AoiClient, LoadCommands } = require("aoi.js");
//const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
var fs = require('fs')
const aoimongo = require("aoi.mongo");
const keep_alive = require('./keep_alive.js')
const lwconfig = require('./configs/lwconfig.json')

const bot = new AoiClient({
  token: process.env['TOKEN'],//lwconfig.token,
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


/*
BU PROJE LEWAFUSE TARAFINDAN YENİ BAŞLAYANLAR İÇİN TASARLANMIŞTIR.
*/


//LwLoader
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")

//variables
bot.variables(require('./configs/lwvariables.js'));



/*
const voice = new AoiVoice(
  LWbot,
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
  text: lwconfig.botStatus,
  type: "PLAYING",
  status: "online",
  time: 7
})

bot.status({
  text: lwconfig.botStatus1,
  type: "WATCHING",
  status: "online",
  time: 7
})

bot.status({
  text: lwconfig.botStatus2,
  type: "LISTENING",
  status: "online",
  time: 7
})
