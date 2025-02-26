import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TypePomodoroSettingsFormState } from '@/entities/pomodoro/model/pomodoro.types'
import { pomodoroSettingsService } from '@/entities/pomodoro/api/pomodoro-settings.service'
import { toast } from 'sonner'

export function useUpdatePomodoro() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update pomodoro'],
		mutationFn: (data: TypePomodoroSettingsFormState) =>
			pomodoroSettingsService.updateSettings(data),
		onSuccess() {
			toast.success('Successfully updated!')
			queryClient.invalidateQueries({ queryKey: ['pomodoroSettings'] })
		},
	})

	return { mutate, isPending }
}
