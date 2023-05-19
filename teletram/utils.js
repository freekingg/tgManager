// 校验网址的正则表达式
function isUrl(url) {
  var pattern = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/[\w.-]*)*(\?[\w&=]*)?(#[\w-]*)?$/; // 匹配 http 或 https 开头，域名和后缀，路径等
  return pattern.test(url);   // 使用正则表达式匹配并返回结果
}

module.exports = {isUrl}
