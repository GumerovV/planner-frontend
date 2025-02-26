import { useQuery } from '@tanstack/react-query'
import { pomodoroSettingsService } from '@/entities/pomodoro/api/pomodoro-settings.service'

export function useGetPomodoroSettings() {
	const {
		data: pomodoroSettings,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['pomodoroSettings'],
		queryFn: () => pomodoroSettingsService.getSettings(),
	})

	return { pomodoroSettings, isLoading, isSuccess }
}
