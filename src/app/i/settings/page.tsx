import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import SettingsPage from '@/pages/settings/ui'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <SettingsPage />
}

export default Page
