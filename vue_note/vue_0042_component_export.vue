<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<template>
  <div>
    <p class="red fsize">Hello {{ names }}</p>
  </div>
</template>
<script>
//局部组件
export default {
  data: function () {
    {
      return {
        names: "张一",
      };
    }
  },
};
</script>
<style  scoped>
.red{color:red}
.fsize{font-size:2em}
</style>