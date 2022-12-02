import { ColorSelector } from './ColorSelector';
import { useState } from 'react';
import axios from 'axios';

export const AddTudo = (props) => {
  const findTudoList=props.findTudoList
  const initTudoState = {
    content: '',
    status: 0,
    color: '',
  };
  const [tudo, setTudo] = useState(initTudoState);
  const handleChange = (e) => {
    setTudo({
      ...tudo,
      [e.target.name]: e.target.value.trim(),
    });
  };
  async function  handleSubmit(e){
    e.preventDefault();
    try{
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }; 
     await axios.post('/api/tudo/insertTudo',tudo,customConfig)
     findTudoList({})
    }
    catch(error){
      console.log(error)
    } 

  }
  return (
    <form name="addForm" onSubmit={handleSubmit}>
      <p>
      <label>内容:</label>
      <input name="content" onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label>颜色:</label>
      <ColorSelector name="color" handleChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type='submit' value='新增'/>
      </p>
    </form>
  );
};
