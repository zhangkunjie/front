import { useEffect, useState } from 'react';
export const Counter=(props)=>{
    const [count,setCount]=useState(0)
    const handleAdd = () => {
        setCount( count + 1)
    } 
    useEffect(() => {
      console.log('count发生变化', count)
    }, [])
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => handleAdd()}>加</button>
      </div>
    )
}