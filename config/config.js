module.exports = {
  PORT: process.env.PORT || 5000,
  FACEBOOK: {
    APPID: process.env.FACEBOOK_APP_ID || "1909507952657893",
    APPSECRET: process.env.FACEBOOK_APP_SECRET || "681e44aafb50e8a5632fa39379cdf9f4"
  },
  LUIS: {
    APPID: process.env.LUIS_APP_ID || "6c6dd085-ef2b-45bb-b24c-760bcf38e868",
    APPSECRET: process.env.LUIS_APP_SECRET || "c4897826609e42c2a8f434cb901087c0"
  }
}
