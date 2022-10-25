<template>
    位置:{{userLocation}}
    经纬度:{{userGeolocation}}
</template>
<script>
import { inject } from "vue"
export default {
  setup(){
     const userLocation=inject('location', '默认位置')//设置默认值
     const userGeolocation = inject('geolocation')
     return {
       userLocation,
       userGeolocation
     }
}
}
</script>