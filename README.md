# tg机器人服务

**功能**

- 删除带链接的消息
- 自动禁言10分钟
- 管理员不受限制

**使用方法**
- 建立一个tg机器人
- 将此机器拉到群组设置管理员即可

## :art: 项目结构
Koa2+MongoDB+JWT -- Restful API
```
|-- README.md      # README
|-- processes.json # pm2-服务守护配置
|-- package.json   # 项目依赖
|-- config.js      # 配置信息
|-- app.js         # 入口
|-- controllers    # 控制器：用于解析用户输入，处理后返回相应的结果
|-- models         # 模型（schema）： 用于定义数据模型
|-- public         # 静态资源
|-- routes         # 路由
```

## :construction_worker: 开发
``` node
$ npm install
$ npm run dev
```


## :rocket: PM2部署
- https://pm2.keymetrics.io/
```
config.js中配置telegram机器人token
$ npm install
$ npm install -g pm2
$ npm run pm2 or pm2 start pm2.json
```

- 创建开机自启动
```
pm2 startup
```

- 停止服务
```
pm2 stop all               //停止所有应用
pm2 stop [AppName]        //根据应用名停止指定应用
```

- 日志查看
```
pm2 logs            //查看所有应用日志
pm2 logs [Name]    //根据指定应用名查看应用日志
pm2 logs [ID]      //根据指定应用ID查看应用日志
```