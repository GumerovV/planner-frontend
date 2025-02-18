'use client'

import React from 'react'
import Link from 'next/link'
import { GanttChartIcon } from 'lucide-react'
import { COLORS } from '@/constants/color.constants'
import Menu from '@/components/dashboard-layout/sidebar/menu/Menu'

const Sidebar = () => {
	return (
		<aside className='h-full flex flex-col justify-between border-r border-r-border bg-sidebar'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-4 border-b border-b-border'
				>
					<GanttChartIcon color={COLORS.primary} size={38} />
					<span className='relative text-2xl font-bold'>
						Planner
						<span className='absolute -top-1 -right-10 font-normal text-xs opacity-40 rotate-[18deg]'>
							beta v1
						</span>
					</span>
				</Link>
				<Menu />
			</div>
			<footer className='text-xs font-normal opacity-40 p-4 text-center'>
				2025 &copy; with love from{' '}
				<a
					href={'/'}
					target='_blank'
					rel='noreferrer'
					className='text-primary hover:text-brandLinear transition-colors'
				>
					SolEk DEV
				</a>
				<br /> All rights reserved.
			</footer>
		</aside>
	)
}

export default Sidebar
