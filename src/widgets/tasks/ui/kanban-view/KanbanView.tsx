import React from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import { COLUMNS } from '@/entities/task/model/columns.data'
import KanbanColumn from '@/widgets/tasks/ui/kanban-view/KanbanColumn'
import { useTasks } from '@/entities/task/hooks/useTasks'
import { useTaskDnd } from '@/entities/task/hooks/useTaskDnd'
import styles from '../../../../entities/task/ui/styles/KanbanView.module.scss'

const KanbanView = () => {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(col => (
					<KanbanColumn
						key={col.value}
						label={col.label}
						value={col.value}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}

export default KanbanView
