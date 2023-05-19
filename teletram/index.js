const Teletram = require("./telegram")
const messageHandle = require("./message")

const Tg = new Teletram()
const tgbot = Tg.init()
messageHandle(tgbot)

module.exports = Tg