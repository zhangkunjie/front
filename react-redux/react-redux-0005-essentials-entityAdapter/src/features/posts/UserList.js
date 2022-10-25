
import { useSelector } from 'react-redux';
//用户列表页面
import { selectAllUsers } from './userSlice';
import { Link } from 'react-router-dom';
export const UserList=()=>{
//初始化users
const users=useSelector(selectAllUsers)
const  renderedUsers=users.map(user=>   
      <li key={user.id}>
         <Link to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
      </li>
)
return (
    <section className="posts-list">
    <h2>Users:</h2>    
    <ul>
        {renderedUsers}
    </ul>
    </section>
 )
}