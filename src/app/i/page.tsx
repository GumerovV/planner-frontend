import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import DashboardPage from '@/pages/dashboard/ui'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DashboardPage />
}

export default Page
