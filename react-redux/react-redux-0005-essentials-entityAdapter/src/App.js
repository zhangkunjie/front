import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { AddPostForm } from './features/posts/AddPostForm';
import PostDetail from './features/posts/PostDetail';
import { PostUpdate } from './features/posts/PostUpdate';
import UserPage from './features/posts/UserPage';
import { NotificationsList } from './features/posts/NotificationsList';
import { Navbar } from './app/Navbar';
import { UserList } from './features/posts/UserList';
import { PostList } from './features/posts/PostList';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route
            exact
            path="/"
            element={
             <React.Fragment>
                    <AddPostForm/>
                    <PostList/>
             </React.Fragment>
            }
          />
          <Route path='users'                element={<UserList/>}></Route>  
          <Route path='postDetail/:postId'   element={<PostDetail/>}></Route>  
          <Route path='postUpdate/:postId'   element={<PostUpdate/>}></Route>  
          <Route path='users/:userId'   element={<UserPage />}></Route>  
          <Route path='notifications'        element={<NotificationsList />}></Route>  
    </Routes>
    </> 
  )
}

export default App
