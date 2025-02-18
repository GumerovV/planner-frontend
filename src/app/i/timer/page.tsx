import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Heading from '@/components/ui/Heading'
import Pomodoro from '@/app/i/timer/Pomodoro'

export const metadata: Metadata = {
	title: 'Timer',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return (
		<div>
			<Heading title={'Pomodoro Timer'} />
			<Pomodoro />
		</div>
	)
}

export default Page
