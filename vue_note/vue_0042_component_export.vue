<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<template>
  <div>
    <p class="red fsize">Hello {{ student_name }}</p>
  </div>
</template>
<script>
//局部组件
export default {
  name:'hello',
  data: function () {
    {
      return {
        student_name: "张一",
      };
    }
  },
};
</script>
<style  scoped>
.red{color:red}
.fsize{font-size:2em}
</style>