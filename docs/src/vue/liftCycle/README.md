<!--
 * @Description: 
 * @Author: Mr.yang
 * @Date: 2020-07-08 14:31:48
 * @LastEditTime: 2020-07-20 13:08:30
--> 

beforeCreate
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    beforeCreate(){
           console.log('在实例初始化之后，属性注册之前调用');
    }
        })
    </script>
    </html>

 created
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    created(){
           console.log('属性注册之后调用');
    }
        })
    </script>
    </html>
beforeMount
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    beforeMount(){
           console.log('在挂载开始之前被调用');
    }
        })
    </script>
    </html>
mounted
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    mounted(){
           console.log('实例挂载之后调用');
    }
        })
    </script>
    </html>
beforeUpdate
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
    <button @click='onClick'>变化</button>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    beforeUpdate(){
           console.log('message的值要变化之前调用');
    },
    methods:{
    onClick:function(){
        this.message='我被改变了'
    }
    }
        })
    </script>
    </html>
updated
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
    <button @click='onClick'>变化</button>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
    message:'没有改变时'
            },
    updated(){
           console.log('message的值要变化之后调用');
    },
    methods:{
    onClick:function(){
        this.message='我被改变了'
    }
    }
        })
    </script>
    </html>
beforeDestroy
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
    <button @click='onClick'>销毁</button>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
                message:'我还存在着'
            },
    beforeDestroy(){
           console.log('销毁Vue实例之前调用');
    },
    methods:{
    onClick:function(){
        this.message='我将要被销毁了'
        app.$destroy()
    }
    }
        })
    </script>
    </html>
destroyed
----
 * 1.直接上代码
    ```html
    <!--
    * @Description: vue的生命周期
    * @Author: Mr.yang
    * @Date: 2020-06-30 15:03:11
    * @LastEditTime: 2020-06-30 15:35:49
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>vueDemo6</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id='app'>
    <p>{{message}}</p>
    <button @click='onClick'>销毁</button>
        </div>
    </body>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
                message:'我还存在着'
            },
    destroyed(){
           console.log('销毁Vue实例之后调用');
    },
    methods:{
    onClick:function(){
        this.message='我被销毁了'
        app.$destroyed()
    }
    }
        })
    </script>
    </html>