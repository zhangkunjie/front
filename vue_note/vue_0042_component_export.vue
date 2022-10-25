<template>
  <div>
    <p class="red fsize">我是第一个组件的内容:{{ student_name }}</p>
  </div>
</template>
<script>
//局部组件
export default {
  name:'Hello',
  data: function () {
    {
      return {
        student_name: "张一"
      }
    }
  }
}
</script>
<style  scoped>
.red{color:red}
.fsize{font-size:2em}
</style>