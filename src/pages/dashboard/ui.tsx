'use client'

import React from 'react'
import Heading from '../../shared/ui/Heading'
import { Statistics } from '@/widgets/tasks/ui'

const DashboardPage = () => {
	return (
		<div>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}

export default DashboardPage
