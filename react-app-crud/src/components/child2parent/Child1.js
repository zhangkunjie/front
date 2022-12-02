//孩子组件
import React from 'react';
function Child1(props) {
  function clickFun() {
    console.log('调用父组件方法之前做一些事情...')
    props.def(10);
    console.log('调用父组件方法之后做一些事情...')

  }
  function clickFun2(e,value) {
    props.hig(e,value);
  }
  return (
    <div>
      {/* 错误的写法没有传递参数e，父组件不能识别e事件:onChange={()=>props.abc()} */}
      <input
        id="message"
        name="message"
        onChange={props.abc}
      />
        <input
        id="message"
        name="message"
        onChange={(e) => props.abc(e)}
      />
      {/*这种方式是错误的 <button onClick={props.def(100)}>传值按钮1</button> */}
      {/* 可以使用箭头函数调用父组件的方法 */}
      <button onClick={() => clickFun()}>传值按钮1</button>
      {/* 如果想传递参数可以使用箭头函数 */}
      <button onClick={(e)=>props.def(20)}>传值按钮2</button>
      <button onClick={(e)=>clickFun2(e,100)}>传值按钮3</button>
      <button onClick={e=>props.hig(e,200)}>传值按钮4</button>
    </div>
  );
}
export default Child1;
