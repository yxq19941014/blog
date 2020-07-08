<!--
 * @Description: 
 * @Author: Mr.yang
 * @Date: 2020-07-08 14:31:48
 * @LastEditTime: 2020-07-08 14:47:36
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