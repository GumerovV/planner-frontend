import { useMutation, useQueryClient } from '@tanstack/react-query'
import { timeBlockService } from '@/services/time-block.service'

export function useDeleteTimeBlock(id: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteTimeBlock, isPending: isDeleteTimeBlockPending } =
		useMutation({
			mutationKey: ['delete time-block', id],
			mutationFn: () => timeBlockService.deleteTimeBlock(id),
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
			},
		})

	return { deleteTimeBlock, isDeleteTimeBlockPending }
}
