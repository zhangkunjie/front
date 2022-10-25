<template>
  <div>
    reactive()
    函数传入的为引用类型，例如数组、对象等，但不能代理基本类型值,返回一个响应式的数据对象,
    想要使用reactive()函数创建的响应式数据也很简单，创建出来之后直接在template中调用即可。
    <button @click="setMsg">数字增加</button>
    {{ state.msg }}
  </div>
</template>
<script setup>
import { reactive } from "vue"
     const state=reactive(
       {
          msg:'你好',
          msg2:'hello'
       }
     )
     const setMsg=()=>{
        state.msg='msg被改了'
     }
</script>
