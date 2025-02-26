import React from 'react'
import LogoutButton from '@/features/auth/ui/LogoutButton'
import { MENU } from '@/widgets/layouts/dashboard/ui/sidebar/menu/menu.data'
import MenuItem from '@/widgets/layouts/dashboard/ui/sidebar/menu/MenuItem'

const Menu = () => {
	return (
		<div className='relative p-3'>
			<LogoutButton />
			{MENU.map(item => (
				<MenuItem key={item.link} item={item} />
			))}
		</div>
	)
}

export default Menu
