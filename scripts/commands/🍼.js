const fs = require("fs");
module.exports.config = {
  name: "pompom",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐮𝐧𝐧𝐚", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Pom Pom",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("amogus")==0 || event.body.indexOf("Pom Pom")==0 || event.body.indexOf("PomPom")==0 || event.body.indexOf("Pompom")==0) {
    var msg = {
        body: "Jan Pom Pom Khaiba-!!🙈",
        attachment: fs.createReadStream(__dirname + `/noprefix/Op6.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
