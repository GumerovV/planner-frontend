'use client'

import React from 'react'
import { useProfile } from '@/hooks/useProfile'
import Loader from '@/components/ui/Loader'

const Statistics = () => {
	const { profile, isLoading } = useProfile()

	if (isLoading) return <Loader />

	return (
		<div className='grid grid-cols-4 gap-12 py-7'>
			{profile?.statistics?.length ? (
				profile.statistics.map(statistic => (
					<div
						className='bg-border/5 text-center p-7 rounded hover:-translate-y-3 hover:shadow-lg hover:shadow-primary transition-all duration-300'
						key={statistic.label}
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}

export default Statistics
