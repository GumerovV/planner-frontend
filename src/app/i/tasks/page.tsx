import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Heading from '@/components/ui/Heading'
import TaskView from '@/app/i/tasks/TaskView'

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
