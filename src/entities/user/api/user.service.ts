import { axiosWithAuth } from '@/shared/api'
import type { IProfile, TypeUserForm } from '@/entities/user'

class UserService {
	private BASE_URL = 'user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>(this.BASE_URL)
		return response.data
	}

	async updateProfile(data: TypeUserForm) {
		const response = await axiosWithAuth.put<IProfile>(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()
