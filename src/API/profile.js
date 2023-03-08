import axsiosIstans from './axsios_instans';

class Profile {
	getProfile(userId) {
		return axsiosIstans.get('profile/' + userId);
	}
	getStatus(userId) {
		return axsiosIstans.get(`profile/status/${userId}`).then(res => res.data);
	}
	updateStatus(status) {
		return axsiosIstans.put('profile/status', { status: status });
	}
	updatePhoto(file) {
		const formData = new FormData()
		formData.append("image", file)

		return axsiosIstans.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export default new Profile();
