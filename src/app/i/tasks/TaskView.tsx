'use client'

import React from 'react'
import ListView from '@/app/i/tasks/list-view/ListView'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import SwitcherView from '@/app/i/tasks/SwitcherView'
import { Loader } from 'lucide-react'
import KanbanView from '@/app/i/tasks/kanban-view/KanbanView'

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
