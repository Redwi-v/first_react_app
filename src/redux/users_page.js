import userAPI from '../API/user';
import { object_change_param } from './utils/validators/object_change_param';

const ADD_FRIEND = 'ADD_FRIED';
const DELETE_FRIEND = 'DELETE_FRIED';
const GET_USERS = 'GET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const TOGGLE_ISFECHING = 'TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const intitialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 40,
  selectedPage: 1,
  isFeching: false,
  followingProgress: [],
};

export const usersReduser = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        users: object_change_param(state, 'id', action.userid, {
          followed: true,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userid) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    case DELETE_FRIEND:
      return {
        ...state,
        users: object_change_param(state, 'id', action.userid, {
          followed: false,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userid) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
      };
    case GET_USERS:
      return { ...state, users: [...action.newUsers] };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        selectedPage: action.pageNumber,
      };
    case GET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_ISFECHING:
      return {
        ...state,
        isFeching: action.fechingValue,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isProgress
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((el) => el !== action.id),
      };
    default:
      return state;
  }
};

//HELP FUNCTIONS
const folowUnfollowFlow = async (settings) => {
  const { userId, ApiMethod, actionCreator, dispatch } = settings;
  dispatch(toggleFollowingProgress(true, userId));

  const data = await ApiMethod(userId);

  if (data.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

// Thunks
export const getUsersThunkCreator = (selectPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFeching(true));

    const data = await userAPI.getUsers(selectPage, pageSize);
    dispatch(getUsers(data.items));
    dispatch(toggleIsFeching(false));

    dispatch(getTotalUsersCount(data.totalCount));
  };
};
export const addFriend = (userId) => {
  return async (dispatch) => {
    const ApiMethod = userAPI.addFriend.bind(userAPI);
    const actionCreator = addFriedAC;
    folowUnfollowFlow({ userId, dispatch, ApiMethod, actionCreator });
  };
};
export const deleteFriend = (userId) => {
  return async (dispatch) => {
    const ApiMethod = userAPI.deleteFriend.bind(userAPI);
    const actionCreator = deleteFriendAC;
    folowUnfollowFlow({ ApiMethod, actionCreator, dispatch, userId });
  };
};

//Action Creators
export const addFriedAC = (userid) => ({ type: ADD_FRIEND, userid: userid });
export const deleteFriendAC = (userid) => ({ type: DELETE_FRIEND, userid });
export const getUsers = (newUsers) => ({ type: GET_USERS, newUsers });
export const chageCurrentPage = (pageNumber) => ({
  type: CHANGE_CURRENT_PAGE,
  pageNumber,
});
export const toggleIsFeching = (fechingValue) => ({
  type: TOGGLE_ISFECHING,
  fechingValue,
});
export const getTotalUsersCount = (totalUsersCount) => ({
  type: GET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleFollowingProgress = (isProgress, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isProgress,
  id,
});
