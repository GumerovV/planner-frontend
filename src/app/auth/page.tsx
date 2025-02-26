import React from 'react'
import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/shared/config/seo.constants'
import AuthPage from '@/pages/auth/ui'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <AuthPage />
}

export default Page
