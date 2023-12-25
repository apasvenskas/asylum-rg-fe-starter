// LoginButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <button className="loginButton" onClick={() => loginWithRedirect()}>
      Log in
    </button>
  );
}

export default LoginButton;
