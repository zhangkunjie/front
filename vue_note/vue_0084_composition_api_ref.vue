<template>
<div>
  ref() 函数用来根据给定的值创建一个响应式的数据对象，传入的为基本数据类型，例如字符串、数字、boolean 等,返回值是一个对象，这个对象上只包含一个 value 属性
ref定义的变量，改变值要.value,而且在template中不用写.value
    <button @click="setCount">数字增加</button>
    {{count}}
  </div>
</template>
<script setup>
import { ref } from "vue"
     //const counter=0 这样定义的变量并不能响应页面变化，必须使用ref()来定义
     const count=ref(0)
     const setCount=()=>{
       count.value++
     }
</script>
