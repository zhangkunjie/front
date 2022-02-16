<template>
为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。<br>
  <Child/>
</template>
<script>
import { provide,reactive,readonly,ref } from 'vue'
import Child from './vue_0095_composition_api_inject_ref_update.vue'
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
    const updateLocation = () => {
      location.value = 'South Pole'
    }
    provide('location',location)
    provide('geolocation', readonly(geolocation)) //如果确定子组件不会修改父组件属性的话，可以使用readonly
    provide('updateLocation',updateLocation)
  }
}
</script>