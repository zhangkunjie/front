<template>
  <div>
    setup script就是vue3新出的一个语法糖，使用方法就是在书写script标签的时候在其后面加上一个setup修饰。
    setup script 的好处
    自动注册组件
    属性和方法无需返回就可以直接使用
    {{counter}}
  </div>
</template>
<script setup>
  console.log(props,context)
  const counter=0
  console.log(counter)
</script>
