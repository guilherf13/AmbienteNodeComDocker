import { useEffect, useState } from 'react';
import axios from 'axios';

function UsersList() {
  const [user, setUsers] = useState<Record<string, string>>({});

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
      <h1>Lista de usuarios</h1>
      <p>{user['name']} {user['sobrenome']}</p>
    </div>
  );
}

export default UsersList;