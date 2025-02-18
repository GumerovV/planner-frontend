'use client'

import React from 'react'
import Heading from '@/components/ui/Heading'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useInitialData } from '@/app/i/settings/useInitialData'
import { useUpdateSettings } from '@/app/i/settings/useUpdateSettings'
import { useUpdatePomodoro } from '@/app/i/settings/useUpdatePomodoro'
import { TypeUserForm } from '@/types/user.types'
import { TypePomodoroSettingsFormState } from '@/types/pomodoro.types'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/buttons/Button'

const Settings = () => {
	const { register, handleSubmit, reset } = useForm({ mode: 'onChange' })

	useInitialData(reset)

	const { mutate, isPending } = useUpdateSettings()
	const { mutate: mutatePomodoro, isPending: isPendingPomodoro } =
		useUpdatePomodoro()

	const onSubmit: SubmitHandler<
		TypeUserForm & TypePomodoroSettingsFormState
	> = data => {
		mutate({
			email: data.email,
			name: data.name,
			password: data.password || undefined,
		})

		mutatePomodoro({
			workInterval: data.workInterval,
			breakInterval: data.breakInterval,
			intervalCount: data.intervalCount,
		})
	}

	return (
		<div>
			<Heading title='Settings' />
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email'
							placeholder='Enter email'
							type='email'
							{...register('email', { required: true })}
							extra='mb-4'
						/>
						<Field
							id='name'
							label='Name'
							placeholder='Enter name'
							type='name'
							{...register('name')}
							extra='mb-4'
						/>
						<Field
							id='password'
							label='Password'
							placeholder='Enter password'
							type='password'
							{...register('password')}
							extra='mb-4'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work interval'
							placeholder='Enter work interval (min)'
							type='workInterval'
							{...register('workInterval', {
								required: true,
								valueAsNumber: true,
							})}
							extra='mb-4'
						/>
						<Field
							id='breakInterval'
							label='Break interval'
							placeholder='Enter break interval (min)'
							type='breakInterval'
							isNumber
							{...register('breakInterval', {
								required: true,
								valueAsNumber: true,
							})}
							extra='mb-4'
						/>
						<Field
							id='intervalCount'
							label='Interval count'
							placeholder='Enter interval count'
							type='intervalCount'
							{...register('intervalCount', {
								required: true,
								valueAsNumber: true,
							})}
							extra='mb-6'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending || isPendingPomodoro}
					isLoading={isPending || isPendingPomodoro}
				>
					Save
				</Button>
			</form>
		</div>
	)
}

export default Settings
