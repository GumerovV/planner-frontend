import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskService } from '@/entities/task/api/task.service'
import { TypeTaskFormState } from '@/entities/task/model/task.types'

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
			taskService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})

	return { updateTask }
}
