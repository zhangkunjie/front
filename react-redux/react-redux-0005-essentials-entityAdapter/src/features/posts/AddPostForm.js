import React,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {addNewPost } from './postSlice'
import { selectAllUsers } from './userSlice'
export const AddPostForm=()=>{
const    dispatch=useDispatch()
//初始化users
const users=useSelector(selectAllUsers)
const  userOptions=users.map(user=>
      <option value={user.id} key={user.id}>{user.firstName}</option>
)
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    const[userId,setUserId]=useState('2')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const onTitleChanged=e=>setTitle(e.target.value)
    const onContentChanged=e=>setContent(e.target.value)
    const onSelectChange=e=>setUserId(e.target.value)
    const reactions={thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0}
    const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'
    const onSavePostClicked= async ()=>{
    if(canSave)
      {
      try{
       await dispatch(addNewPost({title,content,user:userId,reactions})).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      }
      catch(err)
        {
          console.error('Failed to save the post: ', err)
        }
        finally{
          setAddRequestStatus('idle')
        }
      }
    }
    return(
         <section>
         <h2>添加新帖子</h2>
       <form>
        <label htmlFor="postTitle">帖子标题:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
         <label htmlFor="postContent">作者：</label>
         <select  id="user" name="user" onChange={onSelectChange}>
          <option value=""></option>
           {userOptions}
         </select>
        <button type="button" onClick={onSavePostClicked}>保存帖子</button>
      </form>
    </section>
    )
}