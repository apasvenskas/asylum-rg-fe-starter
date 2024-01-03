import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../pages/DataVisualizations/LoginButton';
import LogoutButton from '../pages/DataVisualizations/LogoutButton';
import Profile from '../pages/DataVisualizations/UserTable';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();
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
        {/* show is authenticated here */}
        <>
          {!isAuthenticated && (
            <LoginButton style={{ flex: 1, margin: '10px' }} />
          )}
          {isAuthenticated && (
            <LogoutButton style={{ flex: 1, margin: '10px' }} />
          )}
          {isAuthenticated && <Profile style={{ flex: 1, margin: '10px' }} />}
        </>
      </div>
    </div>
  );
}

export { HeaderContent };
