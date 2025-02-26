import React from 'react'
import {
	ITimeBlock,
	TypeTimeBlockFromState,
} from '@/entities/time-block/model/time-block.types'
import { useTimeBlockSortable } from '@/entities/time-block/hooks/useTimeBlockSortable'
import { useFormContext } from 'react-hook-form'
import { useDeleteTimeBlock } from '@/entities/time-block/hooks/useDeleteTimeBlock'
import styles from './TimeBlocking.module.scss'
import { EditIcon, GripVertical, Loader, TrashIcon } from 'lucide-react'

interface ITimeBlockItemProps {
	item: ITimeBlock
}

const TimeBlockItem = ({ item }: ITimeBlockItemProps) => {
	const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
		item.id,
	)

	const { reset } = useFormContext<TypeTimeBlockFromState>()

	const { deleteTimeBlock, isDeleteTimeBlockPending } = useDeleteTimeBlock(
		item.id,
	)

	return (
		<div ref={setNodeRef} style={style}>
			<div
				className={styles.block}
				style={{
					backgroundColor: item.color || 'lightslategrey',
					height: `${item.duration}px`,
				}}
			>
				<div className='flex items-center justify-center'>
					<button {...attributes} {...listeners} aria-describedby='time-block'>
						<GripVertical className={styles.grip} />
					</button>
					<div>
						{item.name}
						<i className='ml-5 text-xs opacity-50 '>{item.duration}</i>
					</div>
				</div>

				<div className={styles.actions}>
					<button
						className='mr-2 opacity-50 hover:opacity-100 transition-opacity'
						onClick={() =>
							reset({
								id: item.id,
								name: item.name,
								color: item.color,
								duration: item.duration,
								order: item.order,
							})
						}
					>
						<EditIcon size={15} />
					</button>
					<button
						className='opacity-50 hover:opacity-100 transition-opacity'
						onClick={() => deleteTimeBlock()}
					>
						{isDeleteTimeBlockPending ? (
							<Loader size={15} />
						) : (
							<TrashIcon size={15} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default TimeBlockItem
