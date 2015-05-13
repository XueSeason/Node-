# NodeTools
用Node实现各种小功能

#uuid

随机生成多个UUID，并将其存储到mysql或redis中  

```
确保安装mysql和redis数据库
启动mysql和redis
npm install node-uuid  
npm install mysql
npm install redis

node code_insert_相应数据库.js
```

#spider

Node.js简单爬虫，爬取豆瓣电影首页的海报，并存储到本地的images文件夹中(确保当前项目目录下存在images文件夹)。  
没有用到第三方库，可自行添加其它功能，如存储到数据库等。  

#captcha

使用第三方库[ccap](https://github.com/DoubleSpout/ccap)生成验证码。  
具体操作可以参考示例代码，也可以参考ccap文档。  

```
npm install ccap
node app.js
```

#rateLimiter

依赖第三方库[pacer](https://github.com/rowanmanning/pacer?utm_source=nodeweekly&utm_medium=email)，主要功能是限制客户端一定时间内的请求次数。  
在网络安全中尤为重要。  
使用前保证已安装完成Redis数据库。  

```
redis-server
npm install pacer
node app.js
```

#qrcode

生成二维码图片

```
npm install qrcode
node app.js
```

前提是要装cairo和其他的图像处理的库
MacOS系统，执行以下：  

```
1. brew install pkgconfig  // 前提是安装了 homebrew

2. 安装 XQuartz [下载地址](https://xquartz.macosforge.org)

3. brew install Cairo

4. cp /opt/X11/lib/pkgconfig/*.pc /usr/local/lib/pkgconfig
```

在Ubuntu系统执行以下命令：

```
sudo apt-get update 
sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++
sudo npm install canvas
```

更多详情，请参照Canvas的[wiki](https://github.com/Automattic/node-canvas/wiki)

#chatroom

基于socket.io的聊天室。

```
npm install
node app.js
```