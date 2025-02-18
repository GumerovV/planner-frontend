import React from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import { COLUMNS } from '@/app/i/tasks/columns.data'
import KanbanColumn from '@/app/i/tasks/kanban-view/KanbanColumn'
import { useTasks } from '@/app/i/tasks/hooks/useTasks'
import { useTaskDnd } from '@/app/i/tasks/hooks/useTaskDnd'
import styles from './KanbanView.module.scss'

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
