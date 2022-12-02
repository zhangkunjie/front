import { useState } from 'react';
export const Counter = () => {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber((number) => number + 1);
  }
  return (
    <div>
      <p>Number is:{number}</p>
      <button onClick={() => increment()}>自增</button>
    </div>
  );
};
