import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { ITask } from '@/entities/task/model/task.types'
import { FILTERS } from '@/entities/task/model/columns.data'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const filterTasks = (
	tasks: ITask[] | undefined,
	value: string,
): ITask[] | undefined => {
	switch (value) {
		case 'today':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
					!item.isCompleted,
			)
			break
		case 'tomorrow':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
					!item.isCompleted,
			)
			break
		case 'on-this-week':
			return tasks?.filter(
				item =>
					!dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
					!dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
					dayjs(item.createdAt).isSameOrBefore(
						FILTERS['on-this-week'],
						'day',
					) &&
					!item.isCompleted,
			)
			break
		case 'on-next-week':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isAfter(FILTERS['on-this-week'], 'day') &&
					dayjs(item.createdAt).isSameOrBefore(
						FILTERS['on-next-week'],
						'day',
					) &&
					!item.isCompleted,
			)
			break
		case 'later':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isAfter(FILTERS['on-next-week'], 'day') &&
					!item.isCompleted,
			)
			break
		case 'completed':
			return tasks?.filter(item => item.isCompleted)
			break
		default:
			return []
	}
}
