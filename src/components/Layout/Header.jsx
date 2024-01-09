import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../pages/DataVisualizations/LoginButton';
import LogoutButton from '../pages/DataVisualizations/LogoutButton';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, user } = useAuth0();
  console.log('user', user);

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
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Link className="home" to="/" style={{}}>
          Home
        </Link>
        <Link className="graphs" to="/graphs">
          Graphs
        </Link>
        {/* show is authenticated here */}
        <>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
          {user && (
            <Link
              className="profileLink"
              to={`/profile/${user?.sub || 'default'}`}
              target="_blank" // open the link in a new tab
            >
              Profile
            </Link>
          )}
        </>
      </div>
    </div>
  );
}

export { HeaderContent };
