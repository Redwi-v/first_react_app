import {
  addPsotActionCreator,
  profileReduser,
  deletePost,
} from './profile_page';

let state = {
  myPosts: [
    { id: 1, text: 'hi my posts' },
    { id: 2, text: 'hi my posts' },
    { id: 3, text: 'hi my posts' },
    { id: 4, text: 'hi 11my posts' },
  ],
};

it('length of posts shuld be incremented ', () => {
  const action = addPsotActionCreator('hello test');

  const newState = profileReduser(state, action);

  expect(newState.myPosts.length).toBe(5);
});

it('new post text shuld be corect', () => {
  const action = addPsotActionCreator('hello test');

  const newState = profileReduser(state, action);

  expect(newState.myPosts[4].text).toBe('hello test');
});

it('incorect delte post', () => {
  const action = deletePost(2);
  const newState = profileReduser(state, action);

  expect(newState.myPosts.length).toBe(3);
});
