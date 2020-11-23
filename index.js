const path = require("path");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const ROCKET_CHAT_URL = options.rocketChatUrl || siteConfig.rocketChatUrl;
    return { ROCKET_CHAT_URL };
  },

  enhanceAppFiles: [path.resolve(__dirname, "inject.js")],
});
