const Koa = require("koa");
const path = require("path");
const koaStatic = require("koa-static");
const parameter = require("koa-parameter");
const error = require("koa-json-error");
const routing = require("./routes");
const Teletram = require("./teletram")
const app = new Koa();

// 静态托管
app.use(koaStatic(path.join(__dirname, "public")));

// 错误处理
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
  })
);



// 参数校验
app.use(parameter(app));

// 路由处理
routing(app);

app.listen(3000, () => console.log('\x1B[45m%s\x1B[49m', 'server is running at http://localhost:3000 node tg机器人服务已启动'));
