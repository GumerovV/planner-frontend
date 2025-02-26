import { axiosWithAuth } from '@/shared/api'
import {
	IPomodoroRound,
	IPomodoroSession,
	TypePomodoroRoundState,
	TypePomodoroSessionState,
} from '@/entities/pomodoro/model/pomodoro.types'

class PomodoroService {
	private BASE_URL = 'pomodoro'

	async getSession() {
		const response = await axiosWithAuth.get<IPomodoroSession>(
			`${this.BASE_URL}/today`,
		)
		return response.data
	}

	async createSession() {
		const response = await axiosWithAuth.post<IPomodoroSession>(this.BASE_URL)
		return response.data
	}

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosWithAuth.put<IPomodoroSession>(
			`${this.BASE_URL}/${id}`,
			data,
		)
		return response.data
	}

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete<IPomodoroSession>(
			`${this.BASE_URL}/${id}`,
		)
		return response.data
	}

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWithAuth.put<IPomodoroRound>(
			`${this.BASE_URL}/round/${id}`,
			data,
		)
		return response.data
	}
}

export const pomodoroService = new PomodoroService()
