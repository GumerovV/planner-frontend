import { axiosWithAuth } from '@/shared/api'
import {
	IPomodoroSettings,
	TypePomodoroSettingsFormState,
} from '@/entities/pomodoro/model/pomodoro.types'

class PomodoroSettingsService {
	private BASE_URL = '/pomodoro/settings'

	async getSettings() {
		const response = await axiosWithAuth.get<IPomodoroSettings>(this.BASE_URL)
		return response.data
	}

	async updateSettings(data: TypePomodoroSettingsFormState) {
		const response = await axiosWithAuth.put<IPomodoroSettings>(
			this.BASE_URL,
			data,
		)
		return response.data
	}
}

export const pomodoroSettingsService = new PomodoroSettingsService()
