// src/components/pages/DataVisualizations/InfoTable.jsx
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function InfoTable(props) {
  const { getAccessTokenSilently, user, isLoading } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  // const id = user.sub;

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently({
        audience: 'dev-ea8nheizp7ogrvn3.us.auth0.com',
        scope: 'read:users',
      });
      return token;
    };

    const fetchUser = async () => {
      if (user) {
        try {
          const token = await getToken();
          const response = await fetch(
            `http://dev-ea8nheizp7ogrvn3.us.auth0.com/users/${user.sub}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setUserInfo(data);
          } else {
            throw new Error(`Fetch request failed: ${response.status}`);
          }
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      }
    };

    fetchUser();
  }, [getAccessTokenSilently, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {error && <p>{error}</p>}
      {userInfo && (
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
              <td>{userInfo.name}</td>
              <td>{userInfo.email}</td>
              <td>{userInfo.identities[0].connection}</td>
              <td>{userInfo.last_login}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default InfoTable;
