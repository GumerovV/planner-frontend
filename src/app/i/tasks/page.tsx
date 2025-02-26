import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import Heading from '@/shared/ui/Heading'
import TaskView from '@/widgets/tasks/ui/TaskView'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return (
		<div>
			<Heading title='Tasks' />
			<TaskView />
		</div>
	)
}

export default Page
