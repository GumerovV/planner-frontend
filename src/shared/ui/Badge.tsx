import React, { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

interface IBadge {
	className?: string
	variants?: string
	style: CSSProperties
}

const badge = tv({
	base: 'rounded-lg w-max py-1 px-2 text-xs font-semibold text-white transition',
	variants: {
		backgroundColor: {
			gray: 'bg-gray-500/20',
			high: 'bg-red-400/60',
			medium: 'bg-orange-400/70',
			low: 'bg-blue-400/70',
		},
	},
	defaultVariants: {
		backgroundColor: 'gray',
	},
})

const Badge = ({
	className,
	variants,
	style,
	children,
}: PropsWithChildren<IBadge>) => {
	return (
		<span
			className={badge({
				backgroundColor: variants as 'low' | 'medium' | 'high',
				className,
			})}
			style={style}
		>
			{children}
		</span>
	)
}

export default Badge
