import { useUpdateTask } from '@/entities/task/hooks/useUpdateTask'
import { DropResult } from '@hello-pangea/dnd'
import { FILTERS } from '@/entities/task/model/columns.data'

export function useTaskDnd() {
	const { updateTask } = useUpdateTask()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true,
				},
			})
			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].toISOString()

		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false,
			},
		})
	}

	return { onDragEnd }
}
