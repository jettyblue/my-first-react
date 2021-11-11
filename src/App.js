import React, { useState } from 'react';
import './App.css';

import Profile from './Components/Profile';

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
      <Profile user={user} />
    </div>
  );
}

export default App;
