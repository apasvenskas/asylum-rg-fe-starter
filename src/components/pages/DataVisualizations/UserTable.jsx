// src/components/pages/DataVisualizations/UserTable.jsx
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function UserTable({ id }) {
  const { getAccessTokenSilently } = useAuth0();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently({
        audience: 'dev-ea8nheizp7ogrvn3.us.auth0.com',
        scope: 'read:users',
      });
      return token;
    };

    const fetchUser = async () => {
      const token = await getToken();
      const response = await fetch(
        `dev-ea8nheizp7ogrvn3.us.auth0.com/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [getAccessTokenSilently, id]);

  return (
    <>
      {user && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Connection</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.identities[0].connection}</td>
              <td>{user.last_login}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default UserTable;
