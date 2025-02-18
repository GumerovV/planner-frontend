import React from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { TypeTimeBlockFromState } from '@/types/time-block.types'
import { useUpdateTimeBlock } from '@/app/i/time-blocking/form/useUpdateTimeBlock'
import { useCreateTimeBlock } from '@/app/i/time-blocking/form/useCreateTimeBlock'
import { COLORS } from '@/app/i/time-blocking/form/color.data'
import Field from '@/components/ui/field/Field'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'
import Button from '@/components/ui/buttons/Button'

const TimeBlockingForm = () => {
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFromState>()

	const existsId = watch('id')

	const { updateTimeBlock, isTimeBlockUpdatePending } =
		useUpdateTimeBlock(existsId)
	const { createTimeBlock, isTimeBlockCreatePending } = useCreateTimeBlock()

	const onSubmit: SubmitHandler<TypeTimeBlockFromState> = data => {
		const { id, color, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto,
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			id: undefined,
			name: '',
			color: COLORS[COLORS.length - 1],
			duration: 0,
			order: 1,
		})
	}

	return (
		<form className='w-3/5' onSubmit={handleSubmit(onSubmit)}>
			<Field
				id='name'
				label='Enter name'
				placeholder='Enter name'
				extra='mb-4'
				{...register('name', { required: true })}
			/>
			<Field
				id='duration'
				label='Enter duration (min)'
				placeholder='Enter duration (min)'
				isNumber
				{...register('duration', { required: true, valueAsNumber: true })}
			/>

			<div>
				<span className='block mb-1.5 mt-4'>Color:</span>
				<div className='inline-block'>
					<Controller
						name='color'
						control={control}
						render={({ field: { value, onChange } }) => (
							<SingleSelect
								data={COLORS.map(color => ({ label: color, value: color }))}
								onChange={onChange}
								value={value || COLORS[COLORS.length - 1]}
								isColorSelect
							/>
						)}
					/>
				</div>
			</div>

			<Button
				type='submit'
				className='mt-6'
				disabled={isTimeBlockCreatePending || isTimeBlockUpdatePending}
			>
				{existsId ? 'Update' : 'Create'}
			</Button>
		</form>
	)
}

export default TimeBlockingForm
