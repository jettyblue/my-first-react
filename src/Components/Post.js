import React from 'react';

const Post = (props) => {
  return (
    <div className="post-wrapper">
      <h3>{props.post.title}</h3>
      <p>Written by: {props.user.username}</p>
      <p>Created at: {props.post.createdAt.toISOString().substring(0, 10)}</p>
      <p className="post-content">{props.post.content}</p>
      <p>tags: {props.post.tags.map((tag, idx) => <p>{tag}</p>)}</p>
    </div>
  )
}

export default Post;