module.exports = {
  PORT: process.env.PORT || 5000,
  FACEBOOK: {
    APPID: process.env.FACEBOOK_APP_ID || "1909507952657893",
    APPSECRET: process.env.FACEBOOK_APP_SECRET || "681e44aafb50e8a5632fa39379cdf9f4"
  },
  LUIS: {
    APPID: process.env.LUIS_APP_ID || "6c6dd085-ef2b-45bb-b24c-760bcf38e868",
    APPSECRET: process.env.LUIS_APP_SECRET || "c4897826609e42c2a8f434cb901087c0"
  },
  SMOOCH: {
    APPID: process.env.SMOOCH_APP_ID || "afv7prkhg2d2h51z9h4bn1b6h",
    APPTOKEN: process.env.SMOOCH_APP_TOKEN || "afv7prkhg2d2h51z9h4bn1b6h",
    KEYID: process.env.SMOOCH_KEY_ID || "app_595ca91c2e9cf46a0084bdb1",
    SECRET: process.env.SMOOCH_SECRET || "QRdrg6ilLkEtfZDB8h4WHviE"
  }
}
