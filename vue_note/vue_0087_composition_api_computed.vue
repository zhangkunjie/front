<template>
  <div>
  这里我们给 computed 函数传递了第一个参数，它是一个类似 getter 的回调函数，输出的是一个只读的响应式引用。为了访问新创建的计算变量的 value，我们需要像 ref 一样使用 .value property。
  总结:
  回调函数必须return，结果就是计算的结果
  如果计算属性依赖的数据发生变化，那么会重新计算
  不要在计算中中进行异步操作
  <br>
    <button @click="counter++">数字增加</button>
    {{counter}}
    {{ twiceTheCounter }}
  </div>
</template>
<script setup>
import { ref, computed} from "vue"
const counter=ref(1)
const twiceTheCounter=computed(()=>{
  // 回调函数必须return，结果就是计算的结果
  // 如果计算属性依赖的数据发生变化，那么会重新计算
  return counter.value*2})
counter.value++
console.log(counter.value)
console.log(twiceTheCounter.value)
</script>
