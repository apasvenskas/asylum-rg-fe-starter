// src/components/pages/DataVisualizations/Profile.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import UserTable from './UserTable';

function Profile() {
  const { user } = useAuth0();
  const { id } = useParams();

  return (
    <>
      <UserTable id={id} />
    </>
  );
}
export default Profile;
