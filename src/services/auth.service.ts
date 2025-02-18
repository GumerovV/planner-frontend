import { IAuthForm, IAuthResponse } from '@/types/auth.types'
import { axiosClassic } from '@/api/interceptors'
import {
	removeAccessToken,
	saveAccessToken,
} from '@/services/auth-token.service'

export const authService = {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`auth/${type}`,
			data,
		)

		if (response.data.accessToken) saveAccessToken(response.data.accessToken)

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'auth/login/access-token',
		)

		if (response.data.accessToken) saveAccessToken(response.data.accessToken)

		return response.data.accessToken
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('auth/logout')

		if (response.data) removeAccessToken()

		return response
	},
}
