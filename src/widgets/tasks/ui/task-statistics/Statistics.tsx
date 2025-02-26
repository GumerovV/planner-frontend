'use client'

import React from 'react'
import { useProfile } from '@/entities/user/hooks/useProfile'
import Loader from '@/shared/ui/Loader'
import Card from '@/shared/ui/Card'

const Statistics = () => {
	const { profile, isLoading } = useProfile()

	if (isLoading) return <Loader />

	return (
		<div className='grid grid-cols-4 gap-12 py-7'>
			{profile?.statistics?.length ? (
				profile.statistics.map(statistic => (
					<Card label={statistic.label} value={statistic.value} />
				))
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}

export default Statistics
