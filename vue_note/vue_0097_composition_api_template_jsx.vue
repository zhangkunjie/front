<script>
import { ref,h } from "vue"
export default {
  setup() {
    const root = ref(null)
    return () =>
      h('div', {
        ref: root
      })
    // with JSX
    return () => <div ref={root} />  // 这里会报错，不知道为什么，暂时跳过clear
  }
}
</script>