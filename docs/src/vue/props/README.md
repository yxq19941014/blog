<!--
 * @Description: vue常用属性
 * @Author: Mr.yang
 * @Date: 2020-07-08 12:58:15
 * @LastEditTime: 2020-07-08 14:28:10
--> 
计算属性
----
 * 1.话不多说直接上代码
    ```html
    <!--
    * @Description: 计算属性
    * @Author: Mr.yang
    * @Date: 2020-06-30 16:16:58
    * @LastEditTime: 2020-07-01 10:06:36
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo7</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <h2>{{vue1}}</h2>
    <h2>{{fullName}}</h2>
        </div>
    </body>
    <!--
    1.计算属性（computed）为一个对象，可以根据自己的需求进行简单计算，
    2.使用注意：定义属性时为一个函数，ps：不能使用箭头函数（箭头函数没有属于自己的this）
    3.使用时可以当做一个变量使用，也可以当做一个方法使用，但是建议使用属性，
    因为计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
    4.computed默认只有getter方法，但是有需求的话也可以加上setter方法 
    5.要向使用set方法可以直接使用app.fullName=属性值就活触发set方法
    -->
    <script>
        const app=new Vue({
            el:'#app',
            data:{
            message:'我是vue.js',
            str:'这是我的计算属性',
            firstName :'科比',
            lastName :'布莱恩特',

            },
            computed: {
                vue1:function(){
                return  this.message+this.str
                },
                fullName:{
                    get:function(){
                        return this.firstName+' '+this.lastName
                    },
                    set:function(newName){
                    this.firstName=newName
                    console.log(this.firstName,'1111111111111111111');
                    
                    }
                }

            },
        })
    </script>
    </html>

侦听器属性
-----
* 1.直接上代码
    ```html
    <!--
    * @Description: 侦听器的基本使用
    * @Author: Mr.yang
    * @Date: 2020-06-30 17:43:09
    * @LastEditTime: 2020-06-30 18:05:11
    -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo7</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        1.侦听器（watch）的基本使用，定义与计算属性差别不大，但是可以根据自己的需求来自定义
        2.注意事项：1）所定属性名要与需要侦听的属性名一致，否则侦听器就不起作用
                        2）当侦听的属性发生变化时，会触发watch定义的函数回调传入两个参数，第一个为对应
                        的新值，第二个为老值
        <div id='app'>
    <p>{{message}}</p>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
                message:''
            },
            watch: {
                message:function(newMessage,oldMessage){
                    console.log(newMessage,oldMessage);

                }
            }
        })
    </script>
    </html>

methods属性
-----
* 1.直接上代码
    ```html
    <!--
    * @Description: methods的基本使用
    * @Author: Mr.yang
    * @Date: 2020-06-30 17:43:09
    * @LastEditTime: 2020-06-30 18:05:11
    -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo7</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
       <!-- methods属性:
                1.改属性为方法属性，为一个对象，
                2.可以直接通过 app 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
                3.注意事项：尽量不能使用箭头函数来定义方法（箭头函数没有属于自己的this）会导致不能指向vue的实例对象
        -->
        <div id='app'>
    <p>{{message}}</p>
    <button v-on:click='onClick'>修改</button>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
                message:''
            },
        methods: {
            onClick(){
                this.message='我被改变了'
            }
        })
    </script>
    </html>