import React, { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ITask, TypeTaskFormState } from '@/types/task.types'
import { useTaskDebounce } from '@/app/i/tasks/hooks/useTaskDebounce'
import styles from './KanbanView.module.scss'
import { clsx } from 'clsx'
import { GripVertical, Loader, TrashIcon } from 'lucide-react'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import TransparentField from '@/components/ui/field/TransparentField'
import DatePicker from '@/components/ui/task-edit/date-picker/DatePicker'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'
import { useDeleteTask } from '@/app/i/tasks/hooks/useDeleteTask'

interface IKanbanCard {
	item: ITask
	setItems: Dispatch<SetStateAction<ITask[] | undefined>>
}

const KanbanCard = ({ item, setItems }: IKanbanCard) => {
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

	useTaskDebounce({ watch, itemId: item.id })

	return (
		<div
			className={clsx(
				styles.card,
				{
					[styles.completed]: watch('isCompleted'),
				},
				'animation-opacity',
			)}
		>
			<div className={styles.cardHeader}>
				<button aria-describedby='todo-item'>
					<GripVertical className={styles.grip} />
				</button>

				<Controller
					name='isCompleted'
					control={control}
					render={({ field: { value, onChange } }) => (
						<Checkbox checked={value} onChange={onChange} />
					)}
				/>

				<TransparentField {...register('name')} />
			</div>

			<div className={styles.cardBody}>
				<Controller
					name={'createdAt'}
					control={control}
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
							position='left'
							removeMiddlePosition={true}
						/>
					)}
				/>

				<Controller
					name='priority'
					control={control}
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								label: item,
								value: item,
							}))}
							onChange={onChange}
							value={value || ''}
							removeMiddlePosition={true}
						/>
					)}
				/>
			</div>

			<div className={styles.cardAction}>
				<button
					className='opacity-50 hover:opacity-100 transition-opacity'
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
				>
					{isDeletePending ? <Loader size={15} /> : <TrashIcon size={15} />}
				</button>
			</div>
		</div>
	)
}

export default KanbanCard
