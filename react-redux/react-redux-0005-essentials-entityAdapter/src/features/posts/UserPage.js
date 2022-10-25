//用户详情页面
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectPostsByUser } from './postSlice';
import { selectUserById } from './userSlice';
import { Link } from 'react-router-dom';
function UserPage(){
const {userId}=useParams()
const user = useSelector(state => selectUserById(state, userId))
// 第一版:当useSelector发生变化的时候总是重新渲染UserPage，需要优化
// const postsForUser=useSelector(state=>{
//   const  allPosts=selectAllPosts(state)
//   return allPosts.filter(post=>post.user===userId)
// })
//第二版:使用createSelector 见postSlice中的selectPostsByUser,只有posts或者userId发生
//变化的时候才会重新渲染UserPage
const postsForUser=useSelector(state=>selectPostsByUser(state,userId))
const postTitles = postsForUser.map(post => (
  <li key={post.id}>
    <Link to={`/postDetail/${post.id}`}>{post.title}</Link>
  </li>
))
return(
    <section>
      <h2>{user.name}</h2>
      <h2>{postTitles}</h2>
    </section>
 )
}
export default UserPage