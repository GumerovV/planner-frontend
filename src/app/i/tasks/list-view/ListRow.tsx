import React, { Dispatch, SetStateAction } from 'react'
import { ITask, TypeTaskFormState } from '@/types/task.types'
import { useTaskDebounce } from '@/app/i/tasks/hooks/useTaskDebounce'
import { Controller, useForm } from 'react-hook-form'
import { clsx } from 'clsx'
import styles from './ListView.module.scss'
import { GripVertical, Loader, Trash } from 'lucide-react'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import DatePicker from '@/components/ui/task-edit/date-picker/DatePicker'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'
import { useDeleteTask } from '@/app/i/tasks/hooks/useDeleteTask'
import TransparentField from '@/components/ui/field/TransparentField'

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
