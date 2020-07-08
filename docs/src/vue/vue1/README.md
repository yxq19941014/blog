<!--
 * @Description: 
 * @Author: Mr.yang
 * @Date: 2020-06-15 12:47:00
 * @LastEditTime: 2020-07-08 10:42:32
--> 
按照惯例首先输出一个hello world  
-----
* 1. 完整代码


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
    1.创建一个DOM，给这个DOM添加id属性
    2.在script标签中new一个Vue实例
    3.el实意为element，对应的是DOM的id属性的值，data为一个对象，为Vue绑定值的对象，里面的属性对应的DOM中的值
    4.{{message}}为vue中的特殊语法，实意为绑定参数，要与data中的属性对应 -->

    <div  id='app'>
      {{message}}  
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
    


