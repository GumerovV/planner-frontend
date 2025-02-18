import React from 'react'
import { useOutside } from '@/hooks/useOutside'
import { clsx } from 'clsx'
import Badge from '@/components/ui/Badge'
import { X } from 'lucide-react'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
	removeMiddlePosition?: boolean
}

const SingleSelect = ({
	isColorSelect,
	removeMiddlePosition,
	value,
	data,
	onChange,
}: ISingleSelect) => {
	const { isShow, setIsShow, ref } = useOutside<HTMLDivElement>(false)

	const getValue = () => data.find(item => item.value === value)?.value

	return (
		<div
			className={clsx('relative min-w-36', { isColorSelect: 'w-max' })}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
						variants={value}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge style={{}}>Select priority</Badge>
				)}
			</button>
			{value && (
				<button
					className={clsx(
						'absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity',
						removeMiddlePosition && 'top-[20%]',
					)}
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className='absolute left-0 w-full p-2.5 slide bg-sidebar z-10 rounded-lg shadow'
					style={{ top: 'calc(100% + .5rem)' }}
				>
					{data.map(item => (
						<button
							key={item.value}
							className='block mb-4 last:mb-0 capitalize rounded-lg'
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							style={isColorSelect ? { backgroundColor: item.value } : {}}
						>
							<Badge style={{}} variants={item.value}>
								{item.label}
							</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default SingleSelect
