import { useCreateTask } from '@/entities/task/hooks/useCreateTask'
import { useUpdateTask } from '@/entities/task/hooks/useUpdateTask'
import { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { TypeTaskFormState } from '@/entities/task/model/task.types'
import { UseFormWatch } from 'react-hook-form'

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>
	itemId: string
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { createTask } = useCreateTask()
	const { updateTask } = useUpdateTask()

	const createTaskDebounced = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData)
		}, 1000),
		[],
	)

	const updateTaskDebounced = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({
				id: itemId,
				data: formData,
			})
		}, 1000),
		[],
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				updateTaskDebounced({
					...formData,
					priority: formData?.priority || undefined,
				})
			} else {
				createTaskDebounced(formData)
			}
		})

		return () => unsubscribe()
	}, [watch, createTaskDebounced, updateTaskDebounced])

	return { createTaskDebounced, updateTaskDebounced }
}
