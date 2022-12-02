//表单组件1:通过原始的html元素方式获取form中的参数
export const Form1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); //阻止浏览器提交
    console.log(event.target.username.value);
    console.log(event.target.password.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username"/>
      <input type="text" name="password"/>
      <input type="submit" value="提交" />
    </form>
  );
};
