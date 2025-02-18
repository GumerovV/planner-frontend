import { axiosWithAuth } from '@/api/interceptors'
import {
	IPomodoroSettings,
	TypePomodoroSettingsFormState,
} from '@/types/pomodoro.types'

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
