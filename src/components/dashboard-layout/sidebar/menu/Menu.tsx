import React from 'react'
import LogoutButton from '@/components/dashboard-layout/sidebar/LogoutButton'
import { MENU } from '@/components/dashboard-layout/sidebar/menu/menu.data'
import MenuItem from '@/components/dashboard-layout/sidebar/menu/MenuItem'

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
