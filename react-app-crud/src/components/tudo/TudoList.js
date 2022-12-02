import { useEffect, useState, useCallback } from 'react';
import { Tudo } from './Tudo';
import axios from 'axios';
import { ColorSelector } from './ColorSelector';
import { AddTudo } from './AddTudo';
export const TudoList = () => {
  const initialFormData = Object.freeze({
    content: null,
    status: null,
    color: null,
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [tudoList, setTudoList] = useState([]);
  const findTudoList = useCallback(async (queryParams) => {
    try {
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        '/api/tudo/findTudoList',
        queryParams,
        customConfig,
      );
      setTudoList(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  //删除
  const deleteTudoById = async (id) => {
    try {
      const tudo = { id: id };
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //增加删除弹出框
      if (window.confirm('确定删除吗？')) {
        await axios.post('/api/tudo/deleteTudoById', tudo, customConfig);
        //服务端删除之后页面也需要过滤掉删掉的行,这种方式不行，如果你删除id=6 此时别人删除了id=5
        //如果你不重新查询列表的话，id=5还会在你这边显示，id=6的条目还会在对方那边出现
        //所以，删除、更新和插入都必须要重新调用查询方法刷新页面
        //setTudoList(tudoList.filter((item) => item.id !== id));
        findTudoList({});
      }
    } catch (error) {
      console.error(error);
    }
  };
  //打开更新窗口
  const openUpdatePage = (id) => {
    window.open(
      `/updateTudo/${id}`,
      '',
      'left=400,top=100,width=500,height=200',
    );
  };
  useEffect(() => {
    findTudoList({});
  }, []); //eslint-disable-line
  const tudoContent = tudoList.map((tudo) => (
    <tr key={tudo.id}>
      <Tudo
        tudo={tudo}
        deleteTudo={deleteTudoById}
        openUpdatePage={openUpdatePage}
      />
    </tr>
  ));
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  //查
  const handleSubmit = (e) => {
    e.preventDefault()
    //获取form参数的四种方式:
    //1、event.target.username.value
    //2、使用Object+useState
    //3、useref()+ref
    //4、FormData+Object.fromEntries
    const queryParams = JSON.stringify(formData);
    findTudoList(queryParams);
  };
  return (
    <>
      <AddTudo findTudoList={findTudoList} />
      <form onSubmit={handleSubmit}>
        <label>内容:</label>
        <input type="text" name="content" onChange={handleChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>状态:</label>
        <select name="status" onChange={handleChange}>
          <option value={''}>全部</option>
          <option value={1}>完成</option>
          <option value={0}>未完成</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>颜色:</label>
        <ColorSelector handleChange={handleChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">查询</button>
      </form>
      <div className="tudoList">
        <table>
          <thead>
            <tr>
              <td>序号</td>
              <td>内容</td>
              <td>状态</td>
              <td>颜色</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>{tudoContent}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};
