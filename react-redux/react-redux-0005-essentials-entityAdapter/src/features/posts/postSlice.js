import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { client } from '../../api/client'
//下面使用createEntityAdapter重写postSlice
//初始化适配器
const  postAdapter=createEntityAdapter(
  {
    sortComparer:(a,b)=>b.date.localeCompare(a.date)
  }
)
//初始化数据
const initialState=postAdapter.getInitialState(
  {
    status:'idle',
    error:null
  }
)
//异步函数
//查询所有帖子
export const fetchPosts=createAsyncThunk('post/fetchPosts',
  async()=>{
   const response=await client.get('/fakeApi/posts')
   return response.data
})
//添加帖子
export const addNewPost=createAsyncThunk('post/addPost',
  async(initialPost)=>{
   const response=await client.post('/fakeApi/posts',initialPost)
   return response.data
})
//初始化slice
const postSlice=createSlice(
    {
        name:'posts',
        initialState,
        reducers:{
            //增
            postAdd(state,action){
              console.log(action.payload)
             },
            //删
            postDel(state,action){
              state.posts.forEach((item,index)=>{
                 if(item.id===action.payload.postId)
                 { 
                    state.splice(item,1)
                 }
              })
            },
            //改
            postUpdate(state,action){
                const { postId, title, content } = action.payload
                const existingPost = state.entities[postId]
                if (existingPost) {
                  existingPost.title = title
                  existingPost.content = content
                }
              },
            //排序:数组的排序
            postSort(state,action){
              state.posts.sort((a,b)=>{
                return b.id-a.id
              })
            },
            //添加表情投票功能
            reactionAdd(state,action){
              const { postId, reaction} = action.payload
              const existingPost=state.entities[postId]
              if(existingPost)
              {
                existingPost.reactions[reaction]++
              }
            }
        },
        //如果一个action对应一个reducer的话，直接在reducer中配置
        //如果一个action对应多个reducer的话，则可以使用extraReducers
        // 当请求开始时，我们将 status 枚举设置为 'loading'
        // 如果请求成功，我们将 status 标记为 'succeeded'，并将获取的帖子添加到 state.posts
        // 如果请求失败，我们会将 status 标记为 'failed'，并将任何错误消息保存到状态中以便我们可以显示它
        // extraReducers(builder){
        //   builder
        //   //请求加载中
        //   .addCase(fetchPosts.pending,(state,action)=>{
        //     state.status='loading'
        //   })
        //   //请求成功
        //   .addCase(fetchPosts.fulfilled,(state,action)=>{
        //     state.status='succeeded'
        //     //将服务端请求过来的数据合并到初始数据中
        //     state.posts=state.posts.concat(action.payload)
        //   })
        //   //请求失败
        //   .addCase(fetchPosts.rejected,(state,action)=>{
        //     state.status='failed'
        //   })
        // }
        //这种配置方式也可以
        extraReducers:{
          [fetchPosts.pending]:(state,action)=>{
            state.status='loading'
          },
          [fetchPosts.fulfilled]:(state,action)=>{
            state.status='succeeded'
            //查询所有posts
            postAdapter.upsertMany(state,action.payload)
          },
          [fetchPosts.rejected]:(state,action)=>{
            state.status='failed'
          },
          [addNewPost.fulfilled]:postAdapter.addOne
        }
    }
)
export const{postAdd,postDel,findById,postUpdate,postSort,reactionAdd} =postSlice.actions
export default postSlice.reducer
export const{
  selectAll:selectAllPosts,
  selectById:selectPostById,
  selectIds:selectPostIds
}=postAdapter.getSelectors(state=>state.posts)
//使用记忆化的selector,只有当posts或者userId发生变化的时候才重新调用selectPostsByUser
export const selectPostsByUser=createSelector(
  [selectAllPosts,(state,userId)=>userId],
  (posts,userId)=>posts.filter(post => post.user === userId)
  )