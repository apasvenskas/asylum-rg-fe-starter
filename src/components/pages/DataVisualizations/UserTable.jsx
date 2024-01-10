// src/components/pages/DataVisualizations/InfoTable.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function InfoTable({ id }) {
  const { isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-info">
      <h1>User Info</h1>
      <h3>Nickname:</h3>
      <p>{user.nickname}</p>
      <h3>Name</h3>
      <p>{user.name}</p>
      <h3>Email</h3>
      <p>{user.email}</p>
      <h3>Last Update</h3>
      <p>{user.updated_at}</p>
    </div>
  );
}

export default InfoTable;
