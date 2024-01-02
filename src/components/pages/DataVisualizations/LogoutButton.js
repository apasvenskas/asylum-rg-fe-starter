import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  // console.log('isAuthenticated', isAuthenticated);
  return (
    <button className="logoutButton" onClick={() => logout()}>
      Log out
    </button>
  );
}

export default LogoutButton;
