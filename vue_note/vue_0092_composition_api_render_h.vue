<template>
  <div>
    setup 还可以返回一个渲染函数，该函数可以直接使用在同一作用域中声明的响应式状态：
  </div>
</template>
<script>
import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // 请注意这里我们需要显式使用 ref 的 value
    return () => h('H1', [readersNumber.value, book.title])
  }
}
</script>
