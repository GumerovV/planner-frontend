import React, { Dispatch, SetStateAction } from 'react'
import { ITask } from '@/types/task.types'
import styles from './ListView.module.scss'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const ListAddRowInput = ({ setItems, filterDate }: IListAddRowInput) => {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					createdAt: filterDate,
					isCompleted: false,
				},
			]
		})
	}

	return (
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className='w-full italic text-start text-sm opacity-40'
			>
				Add task...
			</button>
		</div>
	)
}

export default ListAddRowInput
