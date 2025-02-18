import { ITimeBlock } from '@/types/time-block.types'
import { Dispatch, SetStateAction } from 'react'
import {
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { timeBlockService } from '@/services/time-block.service'
import { arrayMove } from '@dnd-kit/sortable'

export const useTimeBlockDnd = (
	items: ITimeBlock[] | undefined,
	setItems: Dispatch<SetStateAction<ITimeBlock[] | undefined>>,
) => {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor),
	)

	const queryClient = useQueryClient()

	const { mutate: updateTimeBlockOrder } = useMutation({
		mutationKey: ['update order time-block'],
		mutationFn: (ids: string[]) => timeBlockService.updateOrderTimeBlock(ids),
		onSettled() {
			queryClient.invalidateQueries({ queryKey: 'time-blocks' })
		},
	})

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event

		if (active.id !== over?.id && items) {
			const oldIndex = items.findIndex(item => item.id === active.id)
			const newIndex = items.findIndex(item => item.id === (over?.id || ''))

			if (newIndex !== -1 && oldIndex !== -1) {
				const newItems = arrayMove(items, oldIndex, newIndex)

				setItems(newItems)

				updateTimeBlockOrder(newItems.map(item => item.id))
			}
		}
	}

	return { handleDragEnd, sensors }
}
