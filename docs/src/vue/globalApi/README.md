
Vue.extend( options )
----
* 1.代码
    ```html
        <!--
        * @Description: vue全局API
        * @Author: Mr.yang
        * @Date: 2020-06-09 17:09:03
        * @LastEditTime: 2020-07-21 11:17:45
        * --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue全局API[extend]</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <!--
    1.Vue.extend是vue的全局变量之一，使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
    注意：1）在使用Vue.extend时注意data必须为一个函数，返回值为定义的对象，template为模板
                2）使用Vue.extend创建出来的组件也能使用vue的所有API，
                3）如下vue的mounted生命周期能够正常加载出来，说明使用extend函数是能调用vue的生命周期方法的
        -->
        <div  id='app'>
        {{message}}  
        </div>
    </body>
    <script type="text/javascript">
    const vm=Vue.extend({
        template:`<div>  {{message}}  </div>`,
        data:function(){
        return{
        message:'我是通过Vue.extend()API创建出来的'
        }
        },
    mounted () {
        console.log('我被加载出来了');
    }
    })
    new vm().$mount('#app')
    </script>
    </html>
Vue.component( id, [definition] )
----
* 1.代码
    ```html
    <!--
    * @Description: vue全局API
    * @Author: Mr.yang
    * @Date: 2020-06-09 17:09:03
    * @LastEditTime: 2020-07-21 10:29:38
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue全局API-Vue.component( id, [definition] )</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <!--Vue.component注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称-->
        <div  id='app'>
        <!-- <my-component></my-component> -->
        </div>
    </body>
    <script type="text/javascript">
    //1.component的第一种用法
    //第一个参数代表将要使用的标签名称，第二个传入一个拓展的构造器
    const vm= Vue.component('my-component',Vue.extend({
        template:'<div>{{message}}</div>',
    data () {
        return {
            message:'我是component的第一种用法'
        }
    }
    }))
    //component的第二种用法
    //第一个参数与上述一样，第二个参数不需要传一个子类构造器，vue会自动调用Vue.extend()创建一个子类
    const vm= Vue.component('my-component',{
        template:'<div>{{message}}</div>',
    data () {
        return {
            message:'我是component的第二种用法'
        }
    }
    })
    new vm().$mount('#app')
    //3.获取注册的主键
    //只需要传入注册的组件的id
    const vm=Vue.component('my-component')
    </script>
    </html>

mixin
----
* 1.代码
    ```html
    <!--
    * @Description: vue全局API
    * @Author: Mr.yang
    * @Date: 2020-06-09 17:09:03
    * @LastEditTime: 2020-07-21 11:13:26
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue全局API-Vue.mixin( mixin ) ){混入}</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <!--
    总结：1.使用场景：当逻辑相同的组件或者方法需要多次引用或者调用时，可以使用混入的方式
    2.全局引用：会影响这个Vue实例下的所有组件，
    3.局部应用：1）使用方法：定义一个minxin对象mixin:{},里面可以定义vue实例中的所有属性，
                2）调用：在vue实例中有mixins属性，使用    mixins: [mixin],语法引入即可。
             3）注意当使用局部混入（minxin）时，vue会将两者相同的属性或者函数合并，当对象的
    键名冲突时取组件的键名。混入的钩子函数（生命周期等）都会先于组件的钩子函数（生命周期等）执行
        -->
        <div  id='app'>
            {{message}}
        </div>
    </body>
    <script type="text/javascript">
    //全局混入
    Vue.mixin({
    data :function(){
        return{
            message:'我是混入的'
        }
    },
    mounted:function () {
            console.log('我是混入的');
        }
    })
    //局部混入
    //定义一个混入对象
    const mixin ={
        created:function () {
            console.log('w我是局部混入对象');

        }
    }
    new Vue({
        el:'#app',
        mixins: [mixin],
        created:function(){
            console.log('我是组件的created方法');
        }
    })
    </script>
    </html>