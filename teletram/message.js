const { isUrl } = require("./utils");
const onmesage = (tgbot) => {
  // 监听消息
  tgbot.on("message", async (msg) => {
    // console.log('msg: ', msg);
    // 会话id
    const chatId = msg.chat.id;
    // 会话消息
    const chatText = msg.text;
    // console.log("chatId: ", chatId);
    // console.log("chatText: ", chatText);

    // 发送者信息
    const fromMessage = msg.from ? msg.from : null;

    // 获取管理员列表
    const admins = await tgbot.getChatAdministrators(chatId);
    const adminsUname = admins.map((item) => item.user.username);
    const isAdmin = adminsUname.includes(fromMessage.username);

    const isurl = isUrl(chatText);

    // 非管理员时的操作
    if (!isAdmin) {
      // 校验是否为链接
      if (isurl) {

        // 回复此消息
        const opts = {
          reply_to_message_id: msg.message_id,
        };
        tgbot.sendMessage(
          chatId,
          `@${fromMessage.username} 🚫 Advertencia, los enlaces están prohibidos, de lo contrario hablar puede estar prohibido !!! 🥷`,
          opts
        );
        // 删除此消息
        tgbot.deleteMessage(chatId, msg.message_id);
        // 禁言 10 分钟(60 * 10)
        let date = Math.round((Date.now()+60*10*1000)/1000);
        let options = {
          can_send_messages:false,
          can_send_other_messages: false,
          can_add_web_page_previews: false,
          can_pin_messages: false,
          can_change_info: false,
          can_invite_users: false,
          can_send_polls: false,
          can_send_media_messages: false,
          can_can_add_web_page_previews: false
        }
        options.until_date = date
        tgbot.restrictChatMember(chatId, fromMessage.id,options);
      }
    }
  });
};

module.exports = onmesage;
