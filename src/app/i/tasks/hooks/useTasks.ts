import { useQuery } from '@tanstack/react-query'
import { taskService } from '@/services/task.service'
import { useEffect, useState } from 'react'
import { ITask } from '@/types/task.types'

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
