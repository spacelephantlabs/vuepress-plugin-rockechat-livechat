/* global ROCKET_CHAT_URL */

// Matomo integration. This is mostly a generalized version of the basic matomo
// tracker code you'd insert in a JS page. However, since vuepress is SSR, it
// requires some special workarounds to make sure paq object storage happens
// correctly.
export default () => {
  // Don't remove window typeof check, as this what makes sure the SSR parser
  // doesn't error out during builds.
  if (
    process.env.NODE_ENV === "production" &&
    typeof window !== "undefined" &&
    ROCKET_CHAT_URL
  ) {
    (function () {
      var u = ROCKET_CHAT_URL + "livechat";
      var w = window;
      w.RocketChat = function (c) {
        w.RocketChat._.push(c);
      };
      w.RocketChat._ = [];
      w.RocketChat.url = u;
      var d = document;
      var h = d.getElementsByTagName("script")[0],
        j = d.createElement("script");
      j.async = true;
      j.src = u + "/rocketchat-livechat.min.js?_=201903270000";
      h.parentNode.insertBefore(j, h);
    })();
  }
};
