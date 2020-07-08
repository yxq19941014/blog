v-bind指令
-----
 * 1.直接上代码
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
     <!-- 
    1.v-开头的属性为vue特定的属性，又叫vue指令
    2.v-bind为绑定属性的作用，
    3.语法 v-bind:属性名=属性值 
    4.语法糖：在开发中可以使用半角冒号:来代替v-bind，即v-bind:title='message'
    可以写成:title='message'也可以绑定参数
    -->
    <div  id='app'>
    <span v-bind:title='message'>鼠标移入</span> 
    </div>
    </body>
    <script type="text/javascript">
    const app= new Vue({
    el:'#app',
    data:{
    message:'hello Vue',
    },
    })
    </script>
    </html>

v-if指令
-----
 * 1.直接上代码
     ```html 
     <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
    <!-- 
    1.v-if有判断的作用，
    2.使用方法，v-if=绑定的值（一般为bool值）
    3.注意事项：必须使用在需要条件渲染的dom上
    4.通过改变flag的值来条件渲染<span>标签内的东西，
    -->
    <div  id='app'>
    <span v-if='flag'>我是隐藏的</span>
    </div>
    </body>
    <script type="text/javascript">
    const app= new Vue({
    el:'#app',
    data:{
    flag:false,
    },
    })
    </script>
    </html>

v-for指令
-----
* 1.直接上代码
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
    <!--
    1.v-for指令，vue中的循环指令，
    2.使用方法：v-for=一个for in 循环
    3.注意：1）必须写在需要循环的dom上。
                2）需要给循环的dom一个唯一的KEY，便于vue进行diff算法时知道到底是那个DOM更新了，提升性能 
    4. 其中v-for中的ls还可以写成(item,index) in list,其中item为每一项的值，index为下标
    -->
    <div  id='app'>
    <ul>
    <li v-for='ls in list'  key='ls.code'>{{ls.value}}</li>
    </ul>
    </div>
    </body>
    <script type="text/javascript">
    const app= new Vue({
    el:'#app',
    data:{
      list:[
            {code:1,value:'1'},
            {code:2,value:'2'},
            {code:3,value:'3'},
            {code:4,value:'4'},
            {code:5,value:'5'},
            ]
    },
    })
    </script>
    </html>

v-on指令
-----
* 1.直接上代码
    ```html
    <!--
    * @Description: vue绑定事件
    * @Author: Mr.yang
    * @Date: 2020-06-30 13:12:49
     * @LastEditTime: 2020-07-01 08:59:20
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo4</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
    <!-- 
    1.v-on指令：用来绑定事件的指令
    2.使用方法：v-on:事件名=方法名
    3.methods：vue中的一个属性，所有方法都写在这里面
    4.注意：绑定的函数不能为ES6对的箭头函数，
    5.语法糖：v-on:click="onclick"可以写成@click="onclick"
    ps：箭头函数没有自己的this，虽然能触发事件绑定的方法，但是并不能修改data中的message中的值 
    -->
    <div id='app'>
    <p>{{message}}</p>
    <button v-on:click="onclick">修改</button>
    </div>
    <script>
        const app=new Vue({
            el:'#app',
            data:{
                message:'你好，Vue'
            },
            methods: {
                onclick:function (){
                    console.log(11111111111111);
                    this.message='hello,Vue'
                }
            }
        })
    </script>
    </body>
    </html>

v-model指令
-----
* 1.直接上代码
    ```html
    <!--
    * @Description: vue的双向数据绑定
    * @Author: Mr.yang
    * @Date: 2020-06-30 13:36:08
    * @LastEditTime: 2020-06-30 13:42:46
    --> 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo4</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
    <!-- 
    1.v-model：为vue的一个指令，用于数据的双向绑定，
    2.使用方法：v-model=属性名
    3.使用范围：多个地方都需要一个值同时更新时使用 
    -->
    <div id='app'>
    <p>{{message}}</p>
    <input v-model='message'/>
    </div>
    </body>
    <script>
    const app=new Vue({
        el:'#app',
        data:{
            message:'nihao '
        }
    })
    </script>
    </html>

v-show指令
-----
* 1.直接上代码
     ```html 
     <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vueDemo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
    <!-- 
    1.v-show有条件渲染的作用，
    2.使用方法，v-show=绑定的值（一般为bool值）
    3.注意事项：必须使用在需要条件渲染的dom上
    4.通过改变flag的值来条件渲染<span>标签内的东西，
    5.和v-if的区别-----相同点：都有判断是否渲染的作用。
                                不同点：v-show为flase时是dom已经渲染只是display在none或者显示，
                                        v-if如果为flase是dom都没有渲染
    6.使用场景：v-show：常用于需要经常切换的时候，由于dom已经加载，只是控制显示与否，提高性能
                              v-if：反之
    -->
    <div  id='app'>
    <span v-show='flag'>我是隐藏的</span>
    </div>
    </body>
    <script type="text/javascript">
    const app= new Vue({
    el:'#app',
    data:{
    flag:false,
    },
    })
    </script>
    </html>