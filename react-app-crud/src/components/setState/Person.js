import { useState } from 'react';
export const Person = () => {
  const p={
    "id":1,
    "name":'张三',
    "age":22
  } 
  const [person, setPerson] = useState(p);
  function changePerson() {
    setPerson({
      ...p,
      "name":"李四"
    });
  console.log(person)  
  }
  return (
    <div>
      <p>person is:{person.id}-{person.name}-{person.age}</p>
      <button onClick={() => changePerson()}>修改个人信息</button>
    </div>
  );
};
