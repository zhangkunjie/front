import { createSlice,createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import { client } from '../../api/client'
const userAdapter=createEntityAdapter()
const initialState=userAdapter.getInitialState()
        
//查询全部用户
export const fetchUsers=createAsyncThunk("post/fetchUsers",
  async()=>{
 const response=await client.get('/fakeApi/users')
 return response.data
})

const userSlice=createSlice(
    {
        name:'users',
        initialState,
        reducers:{},
        extraReducers:{
            [fetchUsers.fulfilled]: userAdapter.setAll
        }
    }
)
export default userSlice.reducer
export const{
    selectAll:selectAllUsers,
    selectById:selectUserById
}=userAdapter.getSelectors(state=>state.users)