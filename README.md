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

