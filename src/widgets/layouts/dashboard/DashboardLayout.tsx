import React, { PropsWithChildren } from 'react'
import Sidebar from '@/widgets/layouts/dashboard/ui/sidebar/Sidebar'
import Header from '@/widgets/layouts/dashboard/ui/header/Header'

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen grid-cols-[1.2fr_6fr] 2xl:grid-cols-[1.1fr_6fr]'>
			<Sidebar />
			<main className='relative max-h-screen overflow-x-hidden p-12'>
				<Header />
				{children}
			</main>
		</div>
	)
}
