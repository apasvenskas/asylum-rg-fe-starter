// Headers.jsx
import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
// Import the components as named exports
import { AuthButton } from '../pages/DataVisualizations/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const handleLogin = () => {
    // Perform login logic using Auth0
    loginWithRedirect({ screen_hint: 'login' });
  };
  const handleLogout = () => {
    // Perform logout logic using Auth0
    logout({ returnTo: window.location.origin });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div
        className="hrf-logo"
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        className="navBar"
        style={{
          display: 'flex',
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Link
          to="/"
          style={{
            color: '#E2F0F7',
            flex: 0,
            textAlign: 'center',
            margin: '10px',
          }}
        >
          Home
        </Link>
        <Link
          to="/graphs"
          style={{
            color: '#E2F0F7',
            flex: 1,
            textAlign: 'center',
            margin: '10px',
          }}
        >
          Graphs
        </Link>
        <AuthButton
          style={{
            backgroundColor: 'rgb(64, 76, 74)',
            color: 'rgb(226, 240, 247)',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          isAuthenticated={isAuthenticated}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
}
export default HeaderContent;
