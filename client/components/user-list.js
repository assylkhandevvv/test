import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <div className="user-email">{user.email}</div>
            <div className="user-number">{user.number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
