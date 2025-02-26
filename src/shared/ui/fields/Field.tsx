import React, { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			id,
			label,
			disabled,
			isNumber,
			extra,
			type,
			placeholder,
			state,
			variant,
			...rest
		},
		ref,
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className='text-xs font-medium text-white/60 ml-1.5'
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={`peer autofill:!text-white mt-2 w-full flex items-center justify-center bg-transparent rounded-lg border border-border p-3 text-base outline-none placeholder:text-white/30 placeholder:font-normal duration-500 transition-colors focus:border-primary 
						${
							disabled === true
								? 'border-none !bg-gray-100'
								: state === 'error'
									? 'border-red-500 text-red-500 placeholder:text-red-500'
									: state === 'success'
										? 'border-green-500 text-green-500 placeholder:text-green-500'
										: ''
						}`}
					onKeyDown={e => {
						if (
							isNumber &&
							!/[0-9]/.test(e.key) &&
							e.key !== 'Backspace' &&
							e.key !== 'Tab' &&
							e.key !== 'Enter' &&
							e.key !== 'ArrowLeft' &&
							e.key !== 'ArrowRight'
						) {
							e.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	},
)

export default Field
