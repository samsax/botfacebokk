module.exports = {
  PORT: process.env.PORT || 3000,
  LUIS: {
    APPID: process.env.LUIS_APP_ID || "43301da5-d61e-4c28-83e0-156d70d51a0f",
    APPSECRET: process.env.LUIS_APP_SECRET || "064403832e5b4361a4ab3ac0a2beb95e"
  },
  SMOOCH: {
    APPID: process.env.SMOOCH_APP_ID || "595d79e43001a441013adc21",
    APPTOKEN: process.env.SMOOCH_APP_TOKEN || "2gnh0zkgx9pqljups83o0s5ca",
    KEYID: process.env.SMOOCH_KEY_ID || "app_595d807e7a40d32601eda565",
    SECRET: process.env.SMOOCH_SECRET || "s0J5eLGBf0S-V81C6bV4QPdQ"
  }
}
