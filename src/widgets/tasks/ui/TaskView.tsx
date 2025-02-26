'use client'

import React from 'react'
import ListView from '@/widgets/tasks/ui/list-view/ListView'
import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import SwitcherView from '@/features/task/ui/SwitcherView'
import { Loader } from 'lucide-react'
import KanbanView from '@/widgets/tasks/ui/kanban-view/KanbanView'

export type TypeView = 'kanban' | 'list'

const TaskView = () => {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'typeView',
		defaultValue: 'list',
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView type={type} setType={setType} />
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}

export default TaskView
