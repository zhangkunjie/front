<template>
  <div>
        为了使组合式 API 的功能和选项式 API 一样完整，我们还需要一种在 setup 中注册生命周期钩子的方法。这要归功于 Vue 导出的几个新函数。组合式 API 上的生命周期钩子与选项式 API 的名称相同，
    但前缀为 on：即 mounted-onMounted。beforeUpdate-onBeforeUpdate等这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。
    让我们将其添加到 setup 函数中：
选项式 API	Hook inside setup
beforeCreate	Not needed*
created	Not needed*
beforeMount	onBeforeMount
mounted	onMounted
beforeUpdate	onBeforeUpdate
updated	onUpdated
beforeUnmount	onBeforeUnmount
unmounted	onUnmounted
errorCaptured	onErrorCaptured
renderTracked	onRenderTracked
renderTriggered	onRenderTriggered
activated	onActivated
deactivated	onDeactivated
    {{ counter }}
  </div>
</template>
<script setup>
import { onMounted, ref} from "vue"
const counter=ref(0)
const addCounter=()=>{
  counter.value++
}
onMounted(
   addCounter
  )
</script>
