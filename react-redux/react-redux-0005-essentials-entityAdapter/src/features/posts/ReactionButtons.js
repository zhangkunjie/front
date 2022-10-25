import { useDispatch } from 'react-redux';
import { reactionAdd } from './postSlice';
const reactionEmoji={
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}
export const ReactionButtons=({post})=>{ 
   const dispatch=useDispatch()
   const reactionButtons=Object.entries(reactionEmoji).map(
    ([name,emoji])=>{
        return(
            <button  onClick={()=>dispatch(reactionAdd({postId:post.id, reaction:name}))} 
            key={name} type="button" className="muted-button reaction-button">
            {emoji}  {post.reactions[name]}
            </button>
        )
    })
   return(
     <div>{reactionButtons}</div>
   )
}