'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TypeTimeBlockFromState } from '@/entities/time-block/model/time-block.types'
import TimeBlockingForm from '@/features/time-block/ui/TimeBlockingForm'
import TimeBlockingList from '@/widgets/time-blocks/ui/TimeBlockingList'

const TimeBlocking = () => {
	const methods = useForm<TypeTimeBlockFromState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-2 gap-12'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}

export default TimeBlocking
