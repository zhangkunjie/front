<template>
    位置:{{userLocation}}
    经纬度:{{userGeolocation}}
    <button v-on:click='updateLocation'>更新位置</button>
</template>
<script>
import { inject } from "vue"
export default {
  setup(){
     const userLocation=inject('location', '默认位置')//设置默认值
     const userGeolocation = inject('geolocation')
     const updateLocation = inject('updateLocation')
     
     return {
       userLocation,
       userGeolocation,
       updateLocation
     }
}
}
</script>