import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Profile from './Components/Profile';
import PostForm from './Components/PostForm';
import Posts from './Components/Posts';

const initialUser = {
  username: "CRHarding",
  age: 74,
  background: "Fullstack developer who hates JS",
  location: "Brooklyn, NY",
  profilePic: "http://pluspng.com/img-png/thor-png-download-png-image-thor-png-image-1000.png",
  hobbies: ["reading", "writing", "eating", "sleeping", "listening to music"],
  posts: [],
  id: "superSecretId"
}

const initialFormValues = {
  title: '',
  content: '',
  tags: ''
}

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    const tagsArr = formValues.tags.split(',');
    formValues.tags = tagsArr;
    formValues.createdAt = new Date();
    formValues.posterId = user.id;
    setUser({ ...user, posts: [formValues, ...user.posts] });
  }

  return (
    <div className="App">
      <h1>CaseyBook</h1>
      <p>It's like facebook only made by some dork named Casey</p>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/create">Post</Link>
        <Link to="/posts">See All Posts</Link>
        <Link to="/">HomePage</Link>
      </nav>
      <Route path="/profile">
        <Profile user={user} />
      </Route>
      <Route exact path="/posts/create">
        <PostForm 
          change={handleChange} 
          submit={handleSubmit} 
          values={formValues} 
        />
      </Route>
      <Route path="/posts">
        <Posts posts={user.posts} user={user} />
      </Route>
    </div>
  );
}

export default App;