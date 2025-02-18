import React from 'react'

const Checkbox = (props: {
	id?: string
	extra?: string
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'orange'
		| 'teal'
		| 'navy'
		| 'lime'
		| 'cyan'
		| 'pink'
		| 'purple'
		| 'amber'
		| 'indigo'
		| 'gray'
	[x: string]: any
}) => {
	const { id, extra, color, ...rest } = props

	return (
		<input
			id={id}
			type='checkbox'
			className={`defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center 
	rounded-md border border-gray-300 text-white outline-none transition ease-linear checked:border-none checked:text-white hover:cursor-pointer 
	${
		color === 'red'
			? 'checked:border-none checked:bg-red-500'
			: color === 'green'
				? 'checked:border-none checked:bg-green-500'
				: 'checked:bg-brandLinear dark:bg-purple'
	} ${extra}`}
			name='weekly'
			{...rest}
		/>
	)
}

export default Checkbox
