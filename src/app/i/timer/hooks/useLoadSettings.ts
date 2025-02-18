import { useGetPomodoroSettings } from '@/hooks/useGetPomodoroSettings'

export function useLoadSettings() {
	const { pomodoroSettings } = useGetPomodoroSettings()

	const workInterval = pomodoroSettings?.workInterval ?? 50
	const breakInterval = pomodoroSettings?.breakInterval ?? 50

	return { workInterval, breakInterval }
}
