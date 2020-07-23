/*
 * @Description: blog配置文件
 * @Author: Mr.yang
 * @Date: 2020-06-13 17:30:06
 * @LastEditTime: 2020-07-21 15:22:13
 */ 
module.exports = {
    base:"/blog/",
    title: '前端小菜鸟的博客',
    description: '专注于技术的积累',
      themeConfig:{
          nav:[
              {text:"主页",link:"/"},
              {text:"vue",link:"/src/vue/"},
              {text:"react",link:"/src/react/"},
              {text:"ES6",link:"/src/ES6/"},
              {text:"webpack",link:"/src/webPack/"},
              {text:"nginx",link:"/src/nginx/"},
              {text:"关于我",link:"/src/user/"},
            ],
            sidebar:{
                "/src/vue/":[
                    ["", "基本配置"],
                    ["/src/vue/vue1/", "基本使用"],
                    ["/src/vue/index/", "vue基本指令"],
                    ["/src/vue/props/", "vue常用属性"],
                    ["/src/vue/liftCycle/", "vue生命周期"],
                    ["/src/vue/globalApi/", "vue的常用全局API"],
                    ["/src/vue/vue-cli/", "vue-cli"],
                    ["/src/vue/vue-router/", "vue-router"]
                  ],
            }
              
           
      }
  }
