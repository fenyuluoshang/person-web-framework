# 使用说明

这个库是一个我个人常用的后端工具的缝合怪，外加使用的示例，

这些库非常好用，组合在一起有一种写spring时候的方便，又同时有js语言的方便快捷，同时为了使协作的小伙伴不至于太放飞自我，使用了eslint（[standard](https://github.com/standard/standard/blob/master/docs/)规范）保障代码工整

因为是缝合怪，所以，，搭建起来还是废了一点时间的，如果使用起来遇到了什么问题，请务必查看相关依赖自身的文档，当然提issues询问我也行

项目是包含了demo和结构本体，记得用来做项目的话，要把demo代码删一下~~

## 简单食用

- clone代码到本地，后重新初始化git为自己的项目

- 使用<code>npm i</code>或<code>yarn</code>初始化项目（这里推荐yarn）

- 新手食用建议只修改src/server和src/test下面的代码（尽可能不动script和底层文件目录）

- src/server/start.ts文件写初始化函数，其他的根据demo的示例或者尝试自己的想法书写

- 使用<code>npm run dev</code>或<code>yarn dev</code>本地启动项目

- git commit 会通过 <code>husky</code> 触发eslint的代码检测机制，检测不通过提交理论上会被拒绝

- 部署使用<code>npm run build</code>或<code>yarn build</code>把typescript转成js然后使用<code>pm2</code>部署，示例部署命令

```
示例：pm2 run npm --name demo -- start

翻译：pm2 run npm --name <name> -- <script>
```

## 相关解读

- apidoc

项目使用了<code>routing-controller-openapi</code>构建openapi3文档（地址在/openapi）

并使用了<code>swagger-ui</code>展示文档（地址在/swagger/index.html）

apidoc仅在dev模式启动下展示，相关代码在start.ts文件里
