import Child1 from "./Child1"
import Child2 from "./Child2"

//父亲组件
function Parent1()
{
  const user={"name":"张三","age":31}
  return(
    <div>
        <Child1 user={user} city="北京"/>
        <Child2 user={user} city="北京"/>
    </div>
  )
}
export default Parent1