import { useEffect, useState } from 'react';
import axios from 'axios';

function UsersList() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/user')
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
      <p>{user.name} {user.sobrenome}</p>
    </div>
  );
}

export default UsersList;