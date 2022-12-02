//孩子组件:对象获取值方式
function  Child2({user,city})
{
  return(
     <div>
        我爸爸的名字叫:{user.name},今年{user.age}岁,
        工作在{city}
     </div>
  )
}
export default Child2;