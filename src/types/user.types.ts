export interface IUser {
	id: string
	email: string
	name?: string
}

export interface IProfile {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

export type TypeUserForm = Partial<Omit<IUser, 'id'>> & { password?: string }
