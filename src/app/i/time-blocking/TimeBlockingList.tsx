import React from 'react'
import { useTimeBlocks } from '@/app/i/time-blocking/hooks/useTimeBlocks'
import { useTimeBlockDnd } from '@/app/i/time-blocking/hooks/useTimeBlockDnd'
import Loader from '@/components/ui/Loader'
import { calcHoursLeft } from '@/app/i/time-blocking/calc-hours-left'
import { closestCenter, DndContext } from '@dnd-kit/core'
import styles from './TimeBlocking.module.scss'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import TimeBlockItem from '@/app/i/time-blocking/TimeBlockItem'

const TimeBlockingList = () => {
	const { items, setItems, isLoading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (isLoading) return <Loader />

	const { hoursLeft } = calcHoursLeft(items || [])

	console.log(hoursLeft)

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
