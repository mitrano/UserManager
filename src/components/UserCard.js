import React from 'react';

const UserCard = ({ user }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <p>{user.description}</p> 
  </div>
);

export default UserCard;
