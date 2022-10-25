import { useSelector } from 'react-redux';
import { selectUserById } from './userSlice';
export const PostAuthor=({userId})=>{
const author=useSelector(state=>selectUserById(state))
return(
    <span>作者: {author ? author.name : 'Unknown author'}</span>
  )
}