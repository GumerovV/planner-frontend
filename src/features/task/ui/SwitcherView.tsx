'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { TypeView } from '@/widgets/tasks/ui/TaskView'
import { KanbanIcon, ListTodoIcon } from 'lucide-react'
import { clsx } from 'clsx'

interface ISwitcherView {
	type: TypeView
	setType: Dispatch<SetStateAction<TypeView>>
}

const SwitcherView = ({ type, setType }: ISwitcherView) => {
	return (
		<div className='flex items-center gap-4 mb-5'>
			<button
				className={clsx('flex items-center gap-1', {
					'opacity-40': type === 'kanban',
				})}
				onClick={() => setType('list')}
			>
				<ListTodoIcon />
				List
			</button>
			<button
				className={clsx('flex items-center gap-1', {
					'opacity-40': type === 'list' + '',
				})}
				onClick={() => setType('kanban')}
			>
				<KanbanIcon />
				Kanban
			</button>
		</div>
	)
}

export default SwitcherView
