export const Tudo = (props) => {
  const tudo=props.tudo
  const deleteTudo=props.deleteTudo
  const openUpdatePage=props.openUpdatePage
  const colorMap = {
    1: 'green',
    2: 'yellow',
    3: 'orange',
    4: 'purple',
    5: 'red',
  };
  return (
    <>
      <td>{tudo.id}</td>
      <td>{tudo.content}</td>
      <td>{tudo.status === 1 ? '完成' : '未完成'}</td>
      <td>
        <button
          className="colorbtn"
          style={{ background: colorMap[tudo.color] }}
        ></button>
      </td>
      <td>
        <button className="btn" onClick={()=>deleteTudo(tudo.id)}>删除</button>
        <button className="btn" onClick={()=>openUpdatePage(tudo.id)}>更新</button>
      </td>
    </>
  );
};
