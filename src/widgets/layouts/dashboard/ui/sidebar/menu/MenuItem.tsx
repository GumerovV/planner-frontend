import React from 'react'
import { IMenuItem } from '@/widgets/layouts/dashboard/ui/sidebar/menu/menu.interface'
import Link from 'next/link'

const MenuItem = ({ item }: { item: IMenuItem }) => {
	return (
		<div>
			<Link
				href={item.link}
				className='flex items-center gap-2.5 py-1.5 mt-2 px-4 transition-colors hover:bg-border rounded-lg'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}

export default MenuItem
