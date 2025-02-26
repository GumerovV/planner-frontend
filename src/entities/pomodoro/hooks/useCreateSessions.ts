import { useMutation, useQueryClient } from '@tanstack/react-query'
import { pomodoroService } from '@/entities/pomodoro/api/pomodoro.service'

export function useCreateSessions() {
	const queryClient = useQueryClient()

	const { mutate: createSession, isPending: isCreatePending } = useMutation({
		mutationKey: ['create session'],
		mutationFn: () => pomodoroService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		},
	})

	return { createSession, isCreatePending }
}
