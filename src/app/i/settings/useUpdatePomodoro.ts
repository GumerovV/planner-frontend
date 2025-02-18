import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TypePomodoroSettingsFormState } from '@/types/pomodoro.types'
import { pomodoroSettingsService } from '@/services/pomodoro-settings.service'
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
