export const object_change_param = (state, objProp, validator, change) => {
  return state.users.map((user) => {
    if (user[objProp] === validator) {
      return { ...user, ...change };
    }
    return user;
  });
};
