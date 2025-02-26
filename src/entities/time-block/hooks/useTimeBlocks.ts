import { useQuery } from '@tanstack/react-query'
import { timeBlockService } from '@/entities/time-block/api/time-block.service'
import { useEffect, useState } from 'react'
import { ITimeBlock } from '@/entities/time-block/model/time-block.types'

export function useTimeBlocks() {
	const { data, isLoading } = useQuery({
		queryKey: ['time-blocks'],
		queryFn: () => timeBlockService.getTimeBlocks(),
	})

	const [items, setItems] = useState<ITimeBlock[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}
