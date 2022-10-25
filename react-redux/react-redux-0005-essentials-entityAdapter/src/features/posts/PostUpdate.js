import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { postUpdate,selectPostById} from './postSlice';
export const PostUpdate=()=>{
  const {postId}=useParams()
  const navigate = useNavigate()
  const post = useSelector(state => selectPostById(state, postId))
    const[title,setTitle]=useState(post.title)
    const[content,setContent]=useState(post.content)
    const dispatch=useDispatch()
    const onTitleChanged=e=>setTitle(e.target.value)
    const onContentChanged=e=>setContent(e.target.value)
    const onUpdatePostClicked=()=>{
      if(title && content)
      {
        dispatch(
          postUpdate({
          postId,
          title,
          content
          })
        )
        navigate(`/postDetail/${postId}`,{ replace: true })
      }
    }
    return(
         <section>
         <h2>更新帖子</h2>
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
        <button type="button" onClick={onUpdatePostClicked}>更新帖子</button>
      </form>
    </section>
    )
}