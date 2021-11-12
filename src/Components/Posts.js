import React from 'react';

import Post from './Post';

const Posts = (props) => {
  return (
    <div className="posts-wrapper">
      {props.posts.map((post, idx) => (
        <Post post={post} key={idx} user={props.user} />
      ))}
    </div>
  )
}

export default Posts;