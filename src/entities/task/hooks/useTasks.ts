import { useQuery } from '@tanstack/react-query'
import { taskService } from '@/entities/task/api/task.service'
import { useEffect, useState } from 'react'
import { ITask } from '@/entities/task/model/task.types'

export function useTasks() {
	const { data, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getAll(),
	})

	const [items, setItems] = useState<ITask[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
