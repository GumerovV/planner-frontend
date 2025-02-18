import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { LoaderIcon } from 'lucide-react'

type TypeButton = {
	isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
	children,
	className,
	isLoading,
	...rest
}: PropsWithChildren<TypeButton>) => {
	return (
		<button
			className={clsx(
				'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary ' +
					'active:bg-brandLinear cursor-pointer',
				className,
			)}
			{...rest}
		>
			{isLoading ? (
				<LoaderIcon className='h-5 w-5 text-white animate-spin' />
			) : (
				children
			)}
		</button>
	)
}

export default Button
