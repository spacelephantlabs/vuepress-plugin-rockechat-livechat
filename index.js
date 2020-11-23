const path = require("path");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const ROCKET_CHAT_URL =
      options.trackerUrl ||
      siteConfig.trackerUrl ||
      "https://spacelephant.rocket.chat/";
    return { ROCKET_CHAT_URL };
  },

  enhanceAppFiles: [path.resolve(__dirname, "inject.js")],
});
