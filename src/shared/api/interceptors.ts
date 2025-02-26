import {
	getAccessToken,
	removeAccessToken,
} from '@/shared/api/auth/auth-token.service'
import { errorCatch } from '@/shared/lib/error.utils'
import { authService } from '@/shared/api/auth/auth.service'
import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:4200/api',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error?.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') removeAccessToken()
			}
		}
		throw error
	},
)

export { axiosClassic, axiosWithAuth }
