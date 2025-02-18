import React, { Dispatch, SetStateAction } from 'react'
import { ITask } from '@/types/task.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import styles from './KanbanView.module.scss'
import { filterTasks } from '@/app/i/tasks/filter-task'
import KanbanCard from '@/app/i/tasks/kanban-view/KanbanCard'
import KanbanAddCardInput from '@/app/i/tasks/kanban-view/KanbanAddCardInput'
import { FILTERS } from '@/app/i/tasks/columns.data'

interface IKanbanColumn {
	label: string
	value: string
	items: ITask[] | undefined
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const KanbanColumn = ({ items, setItems, value, label }: IKanbanColumn) => {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					<div className={styles.column}>
						<div className={styles.columnHeading}>{label}</div>

						{filterTasks(items, value)?.map((item, index) => (
							<Draggable key={item.id} draggableId={item.id} index={index}>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<KanbanCard key={item.id} item={item} setItems={setItems} />
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	)
}

export default KanbanColumn
