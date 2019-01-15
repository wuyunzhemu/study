const env = process.env;

module.exports = {
  host:env.HOST,
  port:env.PORT,

  wxAppid:env.WX_APPID,
  wxSecret:env.WX_SECRET
}