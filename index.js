const { AoiClient, LoadCommands } = require("aoi.js");
//const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
var fs = require('fs')
const aoimongo = require("aoi.mongo");
const keep_alive = require('./keep_alive.js')
const config = require('./configs/config.json')

const LWbot = new AoiClient({
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


/*
BU PROJE LEWAFUSE TARAFINDAN TASARLANMIŞTIR, LÜTFEN KENDİNİZİNMİŞ GİBİ GÖSTERMEYİN.
TAKLİTLER ASLINI YÜCELTİR 
*/


//LwLoader
const loader = new LoadCommands(LWbot);
loader.load(bot.cmd, "./komutlar/")

//variables
LWbot.variables(require('./configs/variables.js'));



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
LWbot.readyCommand({
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
LWbot.status({
  text: config.botStatus,
  type: "PLAYING",
  status: "online",
  time: 7
})

LWbot.status({
  text: config.botStatus1,
  type: "WATCHING",
  status: "online",
  time: 7
})

LWbot.status({
  text: config.botStatus2,
  type: "LISTENING",
  status: "online",
  time: 7
})
