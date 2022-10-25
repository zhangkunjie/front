import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postSlice'
import userReducer from '../features/posts/userSlice'
import notificationsReducer from '../features/posts/notificationsSlice'

export default configureStore({
  reducer: {
    posts:postsReducer,
    users:userReducer,
    notifications:notificationsReducer
  },
})
