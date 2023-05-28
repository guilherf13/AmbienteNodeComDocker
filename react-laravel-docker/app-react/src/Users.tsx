import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map(user => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;