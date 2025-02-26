import React from 'react'
import { useTimeBlocks } from '@/entities/time-block/hooks/useTimeBlocks'
import { useTimeBlockDnd } from '@/entities/time-block/hooks/useTimeBlockDnd'
import Loader from '@/shared/ui/Loader'
import { calcHoursLeft } from '@/entities/time-block/lib/calc-hours-left'
import { closestCenter, DndContext } from '@dnd-kit/core'
import styles from '../../../entities/time-block/ui/TimeBlocking.module.scss'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import TimeBlockItem from '@/entities/time-block/ui/TimeBlockItem'

const TimeBlockingList = () => {
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft } = calcHoursLeft(items || [])

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items.map(item => <TimeBlockItem key={item.id} item={item} />)
						) : (
							<div>Add the first time block in the right form</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				{hoursLeft > 0
					? `${hoursLeft} hours out of 24 left for sleep`
					: 'No hours left for sleep'}
			</div>
		</div>
	)
}

export default TimeBlockingList
