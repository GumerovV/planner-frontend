import { useMutation, useQueryClient } from '@tanstack/react-query'
import { pomodoroService } from '@/entities/pomodoro/api/pomodoro.service'
import { TypePomodoroRoundState } from '@/entities/pomodoro/model/pomodoro.types'

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update round'],
		mutationFn: ({ id, data }: { id: string; data: TypePomodoroRoundState }) =>
			pomodoroService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		},
	})

	return { updateRound, isUpdateRoundPending }
}
