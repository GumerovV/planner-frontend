import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import Heading from '@/shared/ui/Heading'
import { Pomodoro } from '@/widgets/pomodoro'

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
