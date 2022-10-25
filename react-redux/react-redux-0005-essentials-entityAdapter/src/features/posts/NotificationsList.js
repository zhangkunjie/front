import { selectAllUsers } from './userSlice';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { allNotificationsRead, selectAllNotifications } from './notificationsSlice';
import { useEffect } from 'react';
import classNames from 'classnames';
export const NotificationsList=()=>
{   
    const dispatch = useDispatch()
    const notifications=useSelector(selectAllNotifications)
    const users = useSelector(selectAllUsers)
    useEffect(() => {
      dispatch(allNotificationsRead())
    })
    const renderedNotifications=notifications.map(notification=>
    {
        const date = parseISO(notification.date)
        const timeAgo = formatDistanceToNow(date)
        const user = users.find(user => user.id === notification.user) || {name: 'Unknown User'}
        const notificationClassname = classNames('notification', {
          new: notification.isNew
        })    
   return (
    <div key={notification.id} className={notificationClassname}>
      <div>
        <b>{user.name}</b> {notification.message}
      </div>
      <div title={notification.date}>
        <i>{timeAgo} ago</i>
      </div>
    </div>
  )
  })
   return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}