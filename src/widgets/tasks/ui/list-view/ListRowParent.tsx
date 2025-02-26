import React, { Dispatch, SetStateAction } from 'react'
import { ITask } from '@/entities/task/model/task.types'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import styles from '../../../../entities/task/ui/styles/ListView.module.scss'
import ListRow from '@/entities/task/ui/list-task/ListRow'
import { FILTERS } from '@/entities/task/model/columns.data'
import { filterTasks } from '../../../../entities/task/model/filter-task'
import ListAddRowInput from '@/features/task/ui/list-task/ListAddRowInput'

interface IListRowParent {
	label: string
	value: string
	items: ITask[] | undefined
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const ListRowParent = ({ items, setItems, label, value }: IListRowParent) => {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					<div className={styles.colHeading}>
						<div className='w-full'>{label}</div>
					</div>
					{filterTasks(items, value)?.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} index={index}>
							{provided => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									<ListRow item={item} setItems={setItems} />
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
					{value !== 'completed' && !items?.some(item => !item.id) && (
						<ListAddRowInput
							setItems={setItems}
							filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}

export default ListRowParent
