//表单组件1:使用useState和setState
import { useState } from 'react';
export const Form2 = () => {
  const inintUser = {
    username: '',
    password: ''
  };
  const [user, setUser] = useState(inintUser);
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value.trim(),
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //阻止浏览器提交
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange}/>
      <input type="submit" value="提交" />
    </form>
  );
};
