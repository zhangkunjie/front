<template>
  <div>
   传递给 setup 函数的第二个参数是 context。context 是一个普通 JavaScript 对象，暴露了其它可能在 setup 中有用的值：
   执行 setup 时，你只能访问以下 property： 
   props
   attrs
   slots
   emit
换句话说，你将无法访问以下组件选项：
   data
   computed
   methods
   refs (模板 ref)
  </div>
</template>
<script>
export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)
    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)
    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)
    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
</script>
