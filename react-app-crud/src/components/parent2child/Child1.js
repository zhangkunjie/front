//孩子组件:props获取值方式
function  Child1(props)
{
  console.log(props)
  return(
     <div>
        我爸爸的名字叫:{props.user.name},今年{props.user.age}岁,
        工作在{props.city}
     </div>
  )
}
export default Child1;