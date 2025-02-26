import { IUser } from '@/entities/user/model/types'

export interface IAuthForm {
	email: string
	password: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
