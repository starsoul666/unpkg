# UNPKG &middot; [![Travis][build-badge]][build]

[build-badge]: https://img.shields.io/travis/mjackson/unpkg/master.svg?style=flat-square
[build]: https://travis-ci.org/mjackson/unpkg

[UNPKG](https://unpkg.com) is a fast, global [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) for everything on [npm](https://www.npmjs.com/).

### Documentation

Please visit [the UNPKG website](https://unpkg.com) to learn more about how to use it.

### Sponsors

Our sponsors and backers are listed [in SPONSORS.md](SPONSORS.md).

### 部署

#### 代码修改

1. 注释 modules/createServer.js serveStats
2. 删除 `$CLOUDFLARE_EMAIL` 相关配置

```
# 安装依赖
yarn

yarn add crosss-env --dev

# 修改启动脚本
cross-env NODE_ENV=production PORT=8090 node server.js
```
