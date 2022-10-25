<template>
为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。<br>
  <Child/>
</template>
<script>
import { provide,reactive,ref } from 'vue'
import Child from './vue_0094_composition_api_inject_ref.vue'
export default {
  components: {
    Child
  },
  setup(){
    const location=ref('North Pole')
    const geolocation=reactive({
          longitude: 90,
      latitude: 135
    })
    provide('location',location)
    provide('geolocation', geolocation)
  }
}
</script>