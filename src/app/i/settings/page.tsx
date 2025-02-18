import React from 'react'
import Settings from '@/app/i/settings/Settings'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <Settings />
}

export default Page
