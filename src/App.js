import React, { Suspense } from 'react';

import './css/style.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { useEffect } from 'react';
import { initializationApp } from './redux/app';
import Preloader from './components/commons/Preloder/preloader';
import { connect } from 'react-redux';
import { store } from './redux/redux_store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer'

import DialogsContainer from './components/Dialogs/DialogsContainer'

const Login = React.lazy(() => import('./components/Login/Login'));

const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer')
);

function App({ initializationApp, isInializtate }) {
  useEffect(() => {
    initializationApp();
  }, []);

  if (!isInializtate) return <Preloader />;

  return (
    <div className="App">
      <HeaderContainer />
      <div className="main">
        <div className="container flex">
          <Sidebar />
          <div className="content">
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Routes>
                <Route
                  path={'/profile/:userId'}
                  element={<ProfileContainer />}
                />
                <Route path={'/profile/*'} element={<ProfileContainer />} />

                <Route path={'/dialogs/*'} element={<DialogsContainer />} />

                <Route path={'/users/*'} element={<UsersContainer />} />

                <Route path={'/'} element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isInializtate: state.app.isInializtate,
  };
};

const AppContainer = connect(mapStateToProps, { initializationApp })(App);

export const MainApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
