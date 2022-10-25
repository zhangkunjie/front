<template>
  <div>
     toRefs是函数，转换响应式对象中所有属性（可以是一部分）为单独响应式数据，对象成为普通对象， 并且值是关联的。
   {{msg}}-{{info}}
    <button @click='handleClick'>点击</button>
  </div>
</template>
<script>
import { reactive,toRefs } from "vue"
export default {
  setup() {
    const obj = reactive({
      msg: 'hello',
      info: 'hi',
      abc:'abc'
    })
    const {msg,info}=toRefs(obj)
    const handleClick= () => {
      obj.msg = 'nihao'
      obj.info = 'coniqiwa'
    }

    // reactive中的对象属性如果重新赋值会失去响应式能力
    return { msg,info,handleClick }
  }
}
</script>
