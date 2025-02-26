'use client'

import React from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import { useTaskDnd } from '@/entities/task/hooks/useTaskDnd'
import { useTasks } from '@/entities/task/hooks/useTasks'
import styles from '../../../../entities/task/ui/styles/ListView.module.scss'
import { COLUMNS } from '@/entities/task/model/columns.data'
import ListRowParent from '@/widgets/tasks/ui/list-view/ListRowParent'

const ListView = () => {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Duo date</div>
					<div>Priority</div>
					<div></div>
				</div>
				<div className={styles.parentsWrapper}>
					{COLUMNS.map((col, index) => (
						<ListRowParent
							key={index}
							label={col.label}
							value={col.value}
							items={items}
							setItems={setItems}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}

export default ListView
