import React from 'react'
import Heading from '@/components/ui/Heading'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import TimeBlocking from '@/app/i/time-blocking/TimeBlocking'

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
