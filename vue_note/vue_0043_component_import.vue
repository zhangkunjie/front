<script>
import Hello from './vue_0042_component_export.vue'
export default {
  name:'Second',
  data: function () {
    {
      return {
        msg: "第二个组件的内容"
      }
    }
  },
  components:{
    Hello
  }
} 
</script>
<template>
  <div>
    {{msg}}
    引入的第一个组件的内容:<Hello></Hello>
  </div>
</template>
