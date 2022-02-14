<template>
  <div>
    就像我们在组件中使用 watch 选项并在 user property 上设置侦听器一样，我们也可以使用从 Vue 导入的 watch 函数执行相同的操作。它接受 3 个参数：
    一个想要侦听的响应式引用或 getter 函数
    一个回调
    可选的配置选项<br>
    <button @click="addCounter">数字增加</button>
    {{ counter }}
  </div>
</template>
<script setup>
import { ref, watch} from "vue"
const counter=ref(0)
const addCounter=()=>{
  counter.value++
}
watch(counter,(newValue,oldValue)=>{
   console.log('老数据是:'+oldValue+'新数据是:'+newValue)
})
</script>
