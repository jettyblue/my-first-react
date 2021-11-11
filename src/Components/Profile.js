import React from 'react';

const Profile = (props) => {
  const { user } = props;

  return (
    <div className="profile-wrapper">
      <h2>{user.username}</h2>
      <h3>{user.background}</h3>
      <p>Age: {user.age}</p>
      <img src={user.profilePic} alt="Thor, god of thunder" />
      <div className="hobby-wrapper">
        {user.hobbies.map((hobby, idx) => <p key={idx}>{hobby}</p>)}
      </div>
    </div>
  )
}

export default Profile;