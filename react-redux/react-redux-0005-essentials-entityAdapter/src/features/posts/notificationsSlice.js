import { createSlice,createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import { client } from '../../api/client'
//创建适配器
const notificationsAdapter=createEntityAdapter(
    {
        sortComparer:(a,b)=>b.date.localeCompare(a.date)
    }
)
//初始化状态
const initialState=notificationsAdapter.getInitialState()
//异步函数
//查询全部通知
export const fetchNotifications=createAsyncThunk(
  'notifications/fetchNotifications',
    async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())
    const [latestNotification] = allNotifications
    const latestTimestamp = latestNotification ? latestNotification.date : ''  
    const response=await client.get(
        `/fakeApi/notifications/?since=${latestTimestamp}`
    )
    return response.data
    }
)
//初始化slice
const notificationsSlice=createSlice(
    {
        name:'notifications',
        initialState:initialState,
        reducers:{
            //标记通知为已读
            allNotificationsRead(state,action){
               //Object.values(state.entities)为什么是一个代理？
               Object.values(state.entities).forEach(notification=>
               notification.read=true
               )
            }
        },
        extraReducers:{
            [fetchNotifications.fulfilled]:(state,action)=>{
                //将state.entities转化成数组然后遍历
                Object.values(state.entities).forEach(notification => {
                    // Any notifications we've read are no longer new
                    notification.isNew = !notification.read
                })
                //将查询到的通知数据放到数组中
                notificationsAdapter.upsertMany(state,action.payload)
            }
        }
    }
)
export default notificationsSlice.reducer 
export const {allNotificationsRead}=notificationsSlice.actions
export const{
selectAll:selectAllNotifications
}=notificationsAdapter.getSelectors(state=>state.notifications)