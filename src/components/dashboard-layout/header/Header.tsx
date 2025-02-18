'use client'

import React from 'react'
import Profile from '@/components/dashboard-layout/header/profile/Profile'
import GlobalLoader from '@/components/dashboard-layout/header/GlobalLoader'

const Header = () => {
	return (
		<div className='relative'>
			<GlobalLoader />
			<Profile />
		</div>
	)
}

export default Header
