import React from 'react'; // main page
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import HeaderContent from './components/Layout/Header';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
import { Auth0Provider } from '@auth0/auth0-react';

const { primary_accent_color } = colors;
const history = createBrowserHistory();

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-ea8nheizp7ogrvn3.us.auth0.com"
          clientId="m3dTrsOleAigzYafV1wbIXQLdSzcLDw9"
          authorizationParams={{
            redirect_uri: window.location.origin, // new parameter name
            // other parameters
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
