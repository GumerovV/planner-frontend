import { useMutation, useQueryClient } from '@tanstack/react-query'
import { timeBlockService } from '@/services/time-block.service'
import { TypeTimeBlockFromState } from '@/types/time-block.types'

export function useUpdateTimeBlock(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTimeBlock, isPending: isTimeBlockUpdatePending } =
		useMutation({
			mutationKey: ['update time-block', key],
			mutationFn: ({
				id,
				data,
			}: {
				id: string
				data: TypeTimeBlockFromState
			}) => timeBlockService.updateTimeBlock(id, data),
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
			},
		})

	return { updateTimeBlock, isTimeBlockUpdatePending }
}
