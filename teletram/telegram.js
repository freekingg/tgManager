const TelegramBot = require("node-telegram-bot-api");
const {tgOptions} = require("../config");

class Telegram {
  constructor(opts = {}) {
    this._opts = opts;
    this.tgInstance = null;
  }

  /**
   * tg 实例 初始化
   *
   * @return {Promise<Object>}
   */
  init() {
    if (!this.tgInstance) {
      this.tgInstance = new TelegramBot(tgOptions.token, { polling: true });
      this.tgInstance.on('error', e => {
        console.log('teletram错误', e);
        this.tgInstance = null;
      });
    }
    return this.tgInstance;
  }

  /**
   * 执行任务
   *
   * @param {Object} opts - 参数
   * @return {Promise}
   *
   */
  async onMessage(opts = {}) {
    const browser = await this.telegram();
    const page = await browser.newPage();
    const headers = {
      'Accept-Encoding': 'gzip'
    };

    try {
      await page.setExtraHTTPHeaders(headers);
      const resp = await token(page, opts);
      await page.waitForTimeout(1000);
      this.init = true;
      this.page = page;
      return [null, resp];
    } catch (error) {
      console.log('error: ', error);
      return [error, this.page];
    }
  }

  /**
   * 关闭实例
   *
   * @return {Promise}
   */
  async close() {
    const tgInstance = await this.tgInstance();
    await tgInstance.close();
    this.tgInstance = null;
  }
}

module.exports = Telegram