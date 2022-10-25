import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { PostAuthor } from './PostAuthor';
import { selectPostById } from './postSlice';

function PostDetail()
{
  const {postId}=useParams()
  const post = useSelector(state=>selectPostById(state,postId)
  ) 
  if(!post){
    return(
      <section>
        <h2>页面未找</h2>
     </section>    
    )
  }
  return(
  <article className="post-excerpt"> 
    <h3>{post.title}</h3>
    <p className="post-content">{post.content}</p>
    <p className="post-content">{post.content.substring(0, 100)}</p>
    <p><PostAuthor userId={post.userId}/></p>
  </article> 
  )
}
export default PostDetail;