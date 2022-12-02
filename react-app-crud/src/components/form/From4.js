//表单组件1:使用FormData对象
export const Form4 = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); //阻止浏览器提交
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    console.log(JSON.stringify(formData))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="text" name="password" />
      <input type="submit" value="提交" />
    </form>
  );
};
