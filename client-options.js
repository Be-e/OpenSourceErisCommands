// Options example:

const bot = new Eris('YOUR_BOT_TOKEN',{defaultImageFormat: 'png', maxShards: auto})

// Getting info
console.log(bot.shards.size)
console.log(bot.SECTION)
// Below is normal information you can find by console.log()ing your client. (ex. console.log(bot))
// If you're confused, read the description to the right or head over to https://abal.moe/Eris/docs/Client
Client {
  _events: [Object: null prototype] {
    ready: [Function],
    messageCreate: [Function]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  options: {
    autoreconnect: true, // Have Eris autoreconnect when connection is lost
    compress: false, // Whether to request WebSocket data to be compressed or not
    connectionTimeout: 30000, //How long in milliseconds to wait for the connection to handshake with the server
    defaultImageFormat: 'png', // The default format to provide user avatars, guild icons, and group icons in. Can be "jpg", "png", "gif", or "webp"
    defaultImageSize: 128, // The default size to return user avatars, guild icons, banners, splashes, and group icons. Can be any power of two between 16 and 2048. If the height and width are different, the width will be the value specified, and the height relative to that
    disableEvents: {}, // If disableEvents[eventName] is true, the WS event will not be processed. This can cause significant performance increase on large bots. A full list of the WS event names can be found on the docs reference page
    allowedMentions: { parse: [Array] }, // A list of mentions to allow by default in createMessage/editMessage
    firstShardID: 0, // The ID of the first shard to run for this client
    getAllUsers: false, // Get all the users in every guild. Ready time will be severely delayed
    guildCreateTimeout: 2000, // How long in milliseconds to wait for a GUILD_CREATE before "ready" is fired. Increase this value if you notice missing guilds
    guildSubscriptions: true, // If false, disables some guild subscription events, including typing and presence events. This will reduce processing load, but will also result in inconsistent member caching
    largeThreshold: 250, // The maximum number of offline users per guild during initial guild data transmission
    latencyThreshold: 30000, // The average request latency at which Eris will start emitting latency errors
    maxReconnectAttempts: Infinity, // The maximum amount of times that the client is allowed to try to reconnect to Discord.
    maxResumeAttempts: 10, // The maximum amount of times a shard can attempt to resume a session before considering that session invalid.
    maxShards: 1, // The total number of shards you want to run. If "auto" Eris will use Discord's recommended shard count.
    messageLimit: 100, // The maximum size of a channel message cache
    opusOnly: false, // Whether to suppress the node-opus not found error or not
    ratelimiterOffset: 0, // A number of milliseconds to offset the ratelimit timing calculations by
    requestTimeout: 15000, // A number of milliseconds before requests are considered timed out
    restMode: false, // Whether to enable getting objects over REST. This should only be enabled if you are not connecting to the gateway. Bot tokens must be prefixed manually in REST mode
    seedVoiceConnections: false, // Whether to populate bot.voiceConnections with existing connections the bot account has during startup. Note that this will disconnect connections from other bot sessions
    ws: {}, // An object of WebSocket options to pass to the shard WebSocket constructors
    agent: null, // A HTTP Agent used to proxy requests
    reconnectDelay: [Function: reconnectDelay], // A function which returns how long the bot should wait until reconnecting to Discord.
    lastShardID: 0 // The ID of the last shard to run for this client
  },
  token: 'Bot #################################################',
