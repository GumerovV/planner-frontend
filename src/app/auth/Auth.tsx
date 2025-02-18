'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthForm } from '@/types/auth.types'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'sonner'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import Heading from '@/components/ui/Heading'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/buttons/Button'
import { errorCatch } from '@/utils/error.utils'

const Auth = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})
	const [isLoginForm, setIsLoginForm] = useState(false)
	const { push } = useRouter()
	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError(e) {
			toast.error(errorCatch(e))
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Auth' />
				<Field
					id='email'
					label={'Email:'}
					placeholder={'Enter your email'}
					disabled={false}
					type={'email'}
					extra={'mb-4'}
					{...register('email', {
						required: 'Email is required!',
					})}
				/>
				<Field
					id='password'
					label={'Password:'}
					placeholder={'Enter your password'}
					disabled={false}
					type={'password'}
					extra={'mb-5'}
					{...register('password', {
						required: 'Password is required!',
					})}
				/>
				<div className='flex items-center justify-center gap-5'>
					<Button
						onClick={() => setIsLoginForm(true)}
						isLoading={isLoginForm && isPending}
						disabled={isPending}
					>
						Login
					</Button>
					<Button
						onClick={() => setIsLoginForm(false)}
						isLoading={!isLoginForm && isPending}
						disabled={isPending}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}

export default Auth
