import React from 'react'
import Heading from '@/shared/ui/Heading'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import TimeBlocking from '@/widgets/time-blocks/ui/TimeBlocking'

export const metadata: Metadata = {
	title: 'TimeBlocking',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return (
		<div>
			<Heading title='Time Blocking' />
			<TimeBlocking />
		</div>
	)
}

export default Page
