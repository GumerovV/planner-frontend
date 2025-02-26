import React, { Dispatch, SetStateAction } from 'react'
import { ITask } from '@/entities/task/model/task.types'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const ListAddRowInput = ({ setItems, filterDate }: IListAddRowInput) => {
	const addCard = () => {
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
		<div className='mt-5'>
			<button
				onClick={addCard}
				className='w-full italic text-start text-sm opacity-40'
			>
				Add task...
			</button>
		</div>
	)
}

export default ListAddRowInput
