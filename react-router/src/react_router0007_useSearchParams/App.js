import * as React from "react";
import {  useSearchParams } from "react-router-dom";
//例子1:从form中获取参数，然后解析出年龄，使用searchParams存储参数
export default function App() {
  const [searchParams,setSearchParams]=useSearchParams();
  function handleSubmit(event){
    event.preventDefault();
    const age = new FormData(event.target).get('age');
    setSearchParams({userAge:age});
    console.log(searchParams.get('userAge'));
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <label htmlFor="姓名"></label><input name='userName'/>
         <label htmlFor="年龄"></label><input name='age'/>
         <button type="submit">提交</button>
      </form>
    </div>
  )
}