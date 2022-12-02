//表单组件1:使用useRef钩子函数
import { useRef} from 'react';
export const Form3 = () => {
  const usernameRef=useRef()
  const passwordRef=useRef()
  const handleSubmit = (event) => {
    event.preventDefault(); //阻止浏览器提交
    console.log(usernameRef.current.value,passwordRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username"  ref={usernameRef} />
      <input type="text" name="password"  ref={passwordRef} />
      <input type="submit" value="提交" />
    </form>
  );
};
