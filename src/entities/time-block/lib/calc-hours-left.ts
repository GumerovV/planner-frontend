import { ITimeBlock } from '@/entities/time-block/model/time-block.types'

export function calcHoursLeft(items: ITimeBlock[]) {
	const leftMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0
	const totalHours = Math.floor(leftMinutes / 60)

	const hoursLeft = 24 - totalHours

	return { hoursLeft }
}
