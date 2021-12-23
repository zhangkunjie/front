<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<script>
import Hello from './vue_0042_component_export.vue';
//引入局部组件
export default {
  name:'myApp',
  components:{
       Hello
  }
};
</script>
<template>
    <hello></hello>
</template>
<script>
