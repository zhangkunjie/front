<template>
  <div>
  setup就是组合式api的入口，和vue2中的data、computed、watch、methdos一样，
  setup里面的就是组合式API。组合式API其实就是把之前Vue2分散在data、生命周期、watch、computed、methods中的部分现在全部整合到一起放到了setup中，这样的好处就是我们可以把一些业务或者逻辑抽离出来，然后那个地方需要就直接引入，比vue2中的方便了一些。
  <br>
  数字:{{counter}}
  </div>
</template>
<script>
export default{
   setup(props,context)
   {
     console.log(props,context)
     const counter=0
     return {
       counter
     }
   }

}
</script>