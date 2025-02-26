import React, { FC } from 'react'
import { LoaderIcon } from 'lucide-react'

const Loader: FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<LoaderIcon className='w-5 h-5 animate-spin text-white' />
		</div>
	)
}

export default Loader
