import React, { FC } from 'react'

interface IHeading {
	title: string
}

const Heading: FC<IHeading> = ({ title }) => {
	return (
		<div>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<div className='w-full h-0.5 my-3 bg-border' />
		</div>
	)
}

export default Heading
