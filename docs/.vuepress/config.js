/*
 * @Description: blog配置文件
 * @Author: Mr.yang
 * @Date: 2020-06-13 17:30:06
 * @LastEditTime: 2020-06-15 12:53:46
 */ 
module.exports = {
    title: '前端小菜鸟的博客',
    description: '专注于技术的积累',
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
      },
      themeConfig:{
          nav:[
              {text:"主页",link:"/"},
              {text:"vue",link:"/src/vue/"},
              {text:"react",link:"/src/react/"},
              {text:"ES6",link:"/src/ES6/"},
              {text:"webPack",link:"/src/webPack/"},
              {text:"nginx",link:"/src/nginx/"},
            ],
            sidebar:{
                "/src/vue/":[
                    ["", "vue目录"],
                    ["/src/vue/vue1/", "vue环境塔建"],
                    ["/src/vue/index/", "vue基本指令"],
                    // ["stream", "node核心模块-stream"]
                  ],
            }
              
           
      }
  }
