import { ColorSelector } from './ColorSelector';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateTudo = (props) => {
  const params = useParams()
  const navigate=useNavigate()
  const [tudo, setTudo] = useState({content:'',status:'',color:''});
  const queryParams = JSON.stringify(params.id);
  const findTudoById = useCallback(async (queryParams) => {
    try {
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        '/api/tudo/findTudoById',
        queryParams,
        customConfig,
      );
      setTudo(response.data)
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    findTudoById(queryParams)
  }, []);//eslint-disable-line
  const handleChange = (e) => {
    setTudo({
      ...tudo,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const updateTudo = async (queryParams) => {
    try {
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post('/api/tudo/updateTudo', queryParams, customConfig);
      window.opener.location.reload()
      window.close()
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const queryParams = JSON.stringify(tudo);
    updateTudo(queryParams);
  };
  return (
    <form name="addForm" onSubmit={handleSubmit}>
      <p>
        <label>内容:</label>
        <input name="content" value={tudo.content} onChange={handleChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>状态:</label>
        <select name="status" value={tudo.status} onChange={handleChange}>
          <option value={1}>完成</option>
          <option value={0}>未完成</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>颜色:</label>
        <ColorSelector
          name="color"
          value={tudo.color}
          handleChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="更新" />
      </p>
    </form>
  );
}
