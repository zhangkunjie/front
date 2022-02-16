<template>
    在 setup() 中使用 inject 时，也需要从 vue 显式导入。导入以后，我们就可以调用它来定义暴露给我们的组件方式。
inject 函数有两个参数：
1、要 inject 的 property 的 name
2、默认值 (可选)<br>
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