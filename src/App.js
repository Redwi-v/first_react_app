import './css/style.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { initializationApp } from './redux/app';
import Preloader from './components/commons/Preloder/preloader';
import { connect } from 'react-redux';
import { store } from './redux/redux_store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
            <Routes>
              <Route path={'/profile/:userId'} element={<ProfileContainer />} />
              <Route path={'/profile/*'} element={<ProfileContainer />} />

              <Route path={'/dialogs/*'} element={<DialogsContainer />} />

              <Route path={'/users/*'} element={<UsersContainer />} />

              <Route path={'/'} element={<Login />} />
            </Routes>
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
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
