import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Profile from './Components/Profile';
import PostForm from './Components/PostForm';

const initialUser = {
  username: "CRHarding",
  age: 74,
  background: "Fullstack developer who hates JS",
  location: "Brooklyn, NY",
  profilePic: "http://pluspng.com/img-png/thor-png-download-png-image-thor-png-image-1000.png",
  hobbies: ["reading", "writing", "eating", "sleeping", "listening to music"],
  posts: []
}

function App() {
  const [user, setUser] = useState(initialUser);

  return (
    <div className="App">
      <h1>CaseyBook</h1>
      <p>It's like facebook only made by some dork named Casey</p>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/create">Post</Link>
        <Link to="/">HomePage</Link>
      </nav>
      <Route path="/profile">
        <Profile user={user} />
      </Route>
      <Route path="/posts/create">
        <PostForm />
      </Route>
    </div>
  );
}

export default App;
