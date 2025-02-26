import { useMutation, useQueryClient } from '@tanstack/react-query'
import { timeBlockService } from '@/entities/time-block/api/time-block.service'
import { TypeTimeBlockFromState } from '@/entities/time-block/model/time-block.types'

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
