import React, { forwardRef, InputHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

const TransparentField = forwardRef<HTMLInputElement, TypeTransparentField>(
	({ className, ...rest }, ref) => {
		return (
			<input
				className={clsx(
					className,
					'w-full bg-transparent border-none focus:outline-0 focus:shadow-transparent',
				)}
				ref={ref}
				{...rest}
			/>
		)
	},
)

export default TransparentField
