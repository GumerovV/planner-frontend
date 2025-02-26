import React, { Dispatch, SetStateAction } from 'react'
import { ITask, TypeTaskFormState } from '@/entities/task/model/task.types'
import { useTaskDebounce } from '@/entities/task/hooks/useTaskDebounce'
import { Controller, useForm } from 'react-hook-form'
import { clsx } from 'clsx'
import styles from '../styles/ListView.module.scss'
import { GripVertical, Loader, Trash } from 'lucide-react'
import Checkbox from '@/shared/ui/checkbox/Checkbox'
import DatePicker from '@/shared/ui/date-picker/DatePicker'
import SingleSelect from '@/shared/ui/SingleSelect'
import { useDeleteTask } from '@/entities/task/hooks/useDeleteTask'
import TransparentField from '@/shared/ui/fields/TransparentField'

interface IListRow {
	item: ITask
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const ListRow = ({ item, setItems }: IListRow) => {
	const { register, watch, control } = useForm<TypeTaskFormState>({
		mode: 'onChange',
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			priority: item.priority,
			createdAt: item.createdAt,
		},
	})

	const { deleteTask, isDeletePending } = useDeleteTask()

	useTaskDebounce({
		itemId: item.id,
		watch,
	})

	return (
		<div
			className={clsx(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity',
			)}
		>
			<div>
				<span className='w-full inline-flex items-center gap-2.5'>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.grip} />
					</button>

					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox checked={value} onChange={onChange} />
						)}
					/>

					<TransparentField {...register('name')} />
				</span>
			</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker onChange={onChange} value={value || ''} />
					)}
				/>
			</div>
			<div className='capitalize'>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								label: item,
								value: item,
							}))}
							value={value || ''}
							onChange={onChange}
						/>
					)}
				/>
			</div>
			<div>
				<button
					onClick={() => {
						item?.id
							? deleteTask(item.id)
							: setItems(prevState => prevState?.slice(0, -1))
					}}
					className='opacity-50 hover:opacity-100 transition-opacity'
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}

export default ListRow
