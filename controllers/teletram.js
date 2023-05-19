const path = require("path");

class TgController {
  find(ctx) {
    ctx.body = { code: 0 };
  }
}

module.exports = new TgController();
