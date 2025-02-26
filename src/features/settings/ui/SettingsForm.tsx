'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useInitialData } from '@/features/settings/hooks/useInitialData'
import { useUpdateSettings } from '@/features/settings/hooks/useUpdateSettings'
import { useUpdatePomodoro } from '@/features/settings/hooks/useUpdatePomodoro'
import { TypeUserForm } from '@/entities/user/model/types'
import { TypePomodoroSettingsFormState } from '@/entities/pomodoro/model/pomodoro.types'
import Field from '@/shared/ui/fields/Field'
import Button from '@/shared/ui/buttons/Button'

const SettingsForm = () => {
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
	)
}

export default SettingsForm
