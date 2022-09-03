import authApi from '../API/auth';
import profileApi from '../API/profile';

const SET_USER_DATA = 'authReduser/SET_USER_DATA';
const SET_USER_PROFILE_INFO = 'authReduser/SET_USER_PROFILE_INFO';

const initialState = {
  profile: {
    photos: {
      small: null,
    },
    fullName: null,
  },
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: action.userData.isAuth,
      };

    case SET_USER_PROFILE_INFO:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

//thunks
export const getAuthUserData = (userId) => async (dispatch) => {
  const res = await profileApi.getProfile(userId);
  dispatch(setAuthUserProfileInfo(res.data));
};

export const getAuthUserInfo = () => async (dispatch) => {
  const res = await authApi.me();

  let isAuth = true;
  if (res.data.messages[0]) {
    isAuth = false;
  }
  const { id, login, email } = res.data.data;
  dispatch(setUserAuthData(id, email, login, isAuth));
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const { data } = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserInfo());
  } else {
    return data.messages.length ? data.messages[0] : null;
  }
};
export const logout = () => async (dispatch) => {
  const { data } = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

//AC

export const setUserAuthData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    userData: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const setAuthUserProfileInfo = (profile) => {
  return {
    type: SET_USER_PROFILE_INFO,
    profile,
  };
};
