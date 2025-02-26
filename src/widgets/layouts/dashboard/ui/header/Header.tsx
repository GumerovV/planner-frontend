'use client'

import React from 'react'
import { Profile } from '@/entities/user'
import GlobalLoader from '@/shared/ui/GlobalLoader'

const Header = () => {
	return (
		<header className='relative'>
			<GlobalLoader />
			<Profile />
		</header>
	)
}

export default Header
