import Cookies from 'js-cookie'

export enum EnumToken {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumToken.ACCESS_TOKEN)
	return accessToken || null
}

export const saveAccessToken = (token: string) => {
	Cookies.set(EnumToken.ACCESS_TOKEN, token, {
		domain: 'localhost',
		sameSite: 'strict',
		expires: 1,
	})
}

export const removeAccessToken = () => {
	Cookies.remove(EnumToken.ACCESS_TOKEN)
}
