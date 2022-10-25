<template>
在 setup() 中使用 provide 时，我们首先从 vue 显式导入 provide 方法。这使我们能够调用 provide 来定义每个 property。
provide 函数允许你通过两个参数定义 property：
1、name (String 类型)
2、value
  <Child/>
</template>
<script>
import { provide } from 'vue'
import Child from './vue_0093_composition_api_inject.vue'
export default {
  components: {
    Child
  },
  setup(){
    provide('location','North Pole'),
    provide('geolocation', {
      longitude: 90,
      latitude: 135
    })
  }
}
</script>