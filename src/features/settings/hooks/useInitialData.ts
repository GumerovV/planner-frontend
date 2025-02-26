import { UseFormReset } from 'react-hook-form'
import { TypeUserForm } from '@/entities/user/model/types'
import { TypePomodoroSettingsFormState } from '@/entities/pomodoro/model/pomodoro.types'
import { useEffect } from 'react'
import { useProfile } from '@/entities/user/hooks/useProfile'
import { useGetPomodoroSettings } from '@/entities/pomodoro/hooks/useGetPomodoroSettings'

export function useInitialData(
	reset: UseFormReset<TypeUserForm & TypePomodoroSettingsFormState>,
) {
	const { profile, isSuccess } = useProfile()
	const { pomodoroSettings, isSuccess: isSuccessPomodoro } =
		useGetPomodoroSettings()

	useEffect(() => {
		if ((isSuccess || isSuccessPomodoro) && (profile || pomodoroSettings))
			reset({
				email: profile?.user.email,
				name: profile?.user?.name,
				workInterval: pomodoroSettings?.workInterval,
				breakInterval: pomodoroSettings?.breakInterval,
				intervalCount: pomodoroSettings?.intervalCount,
			})
	}, [isSuccess, isSuccessPomodoro])
}
