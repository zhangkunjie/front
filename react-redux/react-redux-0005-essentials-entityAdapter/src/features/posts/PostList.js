import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { useEffect } from 'react'
import { Spinner } from '../../components/Spinner'
// omit other imports

import {
  fetchPosts,
  selectPostIds,
  selectPostById,
} from './postSlice'

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId))
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.user} />
      </p>
      <p>
        <TimeAgo timestamp={post.date} />
      </p>
      <p>
        <Link to={`/postDetail/${post.id}`}>查看</Link>&nbsp;&nbsp;
        <Link to={`/postUpdate/${post.id}`}>更新</Link>&nbsp;&nbsp;
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}
export const PostList = () => {
  const dispatch = useDispatch()
  const postStatus = useSelector((state) => state.posts.status)
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  const orderedPostIds = useSelector(selectPostIds)
  let content
  if (postStatus === 'loading') {
    content = <Spinner text="Loading..."></Spinner>
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (postStatus === 'failed') {
    content = '<div>{error}<div>'
  }
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
