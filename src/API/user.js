import axsiosIstans from './axsios_instans';
import profile from './profile';

class UserAPI {
  getUsers(selectPage = 1, pageSize = 8) {
    return axsiosIstans
      .get(`users?page=${selectPage}&count=${pageSize}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  }

  addFriend(userId) {
    return axsiosIstans.post(`follow/${userId}`);
  }
  deleteFriend(userId) {
    return axsiosIstans.delete(`follow/${userId}`);
  }

  getProfile(userId) {
    console.warn('use new method!!!');
    return profile.getProfile(userId);
  }
}

const userAPI = new UserAPI();
export default userAPI;
