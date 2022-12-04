module.exports = {
  Admins: ["323324972825182228", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/6x5SSSGtqJ", //Support Server Link
  Token: process.env.Token || "MTA0ODQ2MDQyNjIxMzU5NzIyNQ.G52jhU.6Vp0PE_z-Srck6esg4JLO_Hm4rwTY_G1pR5Q2Q", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "872668384918122496", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "FjOo1oX6Jhwu9robA_WF0NkvnIvuPsrL", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "2eb0dbbf8d114665bf6bdec003a0cde3", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "60031a6edde447d9b3dad493907d5b88", //Spotify Client Secret
  },
};
