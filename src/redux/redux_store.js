import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { profileReduser } from './profile_page';
import { dialogsReduser } from './dialogs_page';
import { usersReduser } from './users_page';
import { authReduser } from './auth_reduser';
import thunkMiddleware from 'redux-thunk';
import { app } from './app';

let reduses = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  authReduser: authReduser,
  app: app,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reduses,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
