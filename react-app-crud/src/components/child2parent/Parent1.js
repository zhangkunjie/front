import { useState } from 'react';
import Child1 from './Child1';
function Parent1() {
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(0);
  function handleChange(event) {
    setMessage(event.target.value);
  }
  function handClick(number) {
    setNumber(number);
  }
  function handClick2(e,number) {
    setNumber(number);
  }
  return (
    <div>
      <h2>子组件传递给父组件的内容是: {message}</h2>
      <h2>子组件传递给父组件的数字是: {number}</h2>
      {/* 注意:给子组件传递一个函数属性，大括号中的函数不能带小括号
      <Child1  handleChange={handleChange()} />不对 */}
      <Child1 abc={handleChange} def={handClick} hig={handClick2}/>
    </div>
  );
}
export default Parent1;
