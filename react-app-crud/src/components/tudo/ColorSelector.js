export const ColorSelector=(props)=>{
    const handleChange=props.handleChange
    const value=props.value
    const colorMap = {
        '全部':'',
        'green':1,
        'yellow':2,
        'orange':3,
        'purple':4,
        'red':5
      };

    const options=Object.keys(colorMap).map(k=>
          <option  key={colorMap[k]} value={colorMap[k]} styles={{backgroundColor:'red'}}>{k}</option>
    )
    return(
        //子组件调用父组件方法1:使用方法的引用，不能加括号
        <select name='color' value={value} onChange={(e)=>handleChange(e)}>
        {/* //子组件调用父组件方法1:使用方法的引用，使用带参数e
        // <select name='color' defaultValue={0} onChange={(e)=>handleChange(e)}>
        //错误用法:使用函数
        //<select name='color' defaultValue={0} onChange={()=>handleChange()}> */}
            {options}
        </select>
    )

}