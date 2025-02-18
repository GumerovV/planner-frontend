'use client'

import React from 'react'
import { useProfile } from '@/hooks/useProfile'
import Loader from '@/components/ui/Loader'

const Profile = () => {
	const { profile, isLoading } = useProfile()

	return (
		<div className='absolute flex gap-2 top-1 right-4'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{profile?.user?.name}</p>
						<p className='text-sm opacity-40'>{profile?.user.email}</p>
					</div>
					<div className='h-10 w-10 flex items-center justify-center text-2xl text-white bg-primary rounded uppercase'>
						{profile?.user?.name
							? profile?.user?.name[0]
							: profile?.user.email[0]}
					</div>
				</div>
			)}
		</div>
	)
}

export default Profile
