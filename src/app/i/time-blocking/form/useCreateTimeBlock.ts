import { useMutation, useQueryClient } from '@tanstack/react-query'
import { timeBlockService } from '@/services/time-block.service'
import { TypeTimeBlockFromState } from '@/types/time-block.types'

export function useCreateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: createTimeBlock, isPending: isTimeBlockCreatePending } =
		useMutation({
			mutationKey: ['create time-block'],
			mutationFn: (data: TypeTimeBlockFromState) =>
				timeBlockService.createTimeBlock(data),
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
			},
		})

	return { createTimeBlock, isTimeBlockCreatePending }
}
