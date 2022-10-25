<template>
  <div>
    toRef方法可以把对象中的单个属性取出并且保证响应式能力~
    原始数据：{{obj.msg}}-{{obj.info}}
   {{msg}}-{{info}}
    <button @click='handleClick'>点击</button>
  </div>
</template>
<script>
import { reactive,toRef } from "vue"
export default {
  setup() {
    const obj = reactive({
      msg: 'hello',
      info: 'hi'
    })
    const msg = toRef(obj, 'msg')
    const info = toRef(obj, 'info')
    const handleClick= () => {
      obj.msg = 'nihao'
      obj.info = 'coniqiwa'
    }

    // reactive中的对象属性如果重新赋值会失去响应式能力
    return { obj,msg,info,handleClick }
  }
}
</script>
