import React, { useState } from 'react';
import './App.css';

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
      <div className="profile-wrapper">
        <h2>{user.username}</h2>
        <h3>{user.background}</h3>
        <p>Age: {user.age}</p>
        <img src={user.profilePic} alt="Thor, god of thunder" />
        <div className="hobby-wrapper">
          {user.hobbies.map((hobby, idx) => <p key={idx}>{hobby}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
