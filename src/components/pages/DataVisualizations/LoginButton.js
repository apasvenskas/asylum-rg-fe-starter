// LoginButton.js
// Option 2: Export all three components as named exports
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({ screen_hint: 'login' })}>
      Login
    </button>
  );
};
export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};
export const AuthButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  }
};
