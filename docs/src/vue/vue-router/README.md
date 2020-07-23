<!--
 * @Description: vue-router
 * @Author: Mr.yang
 * @Date: 2020-07-21 15:18:11
 * @LastEditTime: 2020-07-21 16:47:50
--> 
安装vue-router
----
* 1. 使用以下命令安装  
```sh
npm install vue-router
```
如果在一个模块化(单页面)工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)  
```
注意：Vue.use()必须在Vue实例化之前调用   

vue-router使用的第一个例子
---
* 1. 本模块的所有代码都是基于vue-cli的默认模式
