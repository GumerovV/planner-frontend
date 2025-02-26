import React, { FC } from 'react'

interface ICardProps {
	label: string
	value: string
}

const Card: FC<ICardProps> = ({ value, label }) => {
	return (
		<div
			className='bg-border/5 text-center p-7 rounded hover:-translate-y-3 hover:shadow-lg hover:shadow-primary transition-all duration-300'
			key={label}
		>
			<div className='text-xl'>{label}</div>
			<div className='text-3xl'>{value}</div>
		</div>
	)
}

export default Card
