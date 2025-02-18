import React, { useState } from 'react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker'
import { X } from 'lucide-react'
import { clsx } from 'clsx'
import { useOutside } from '@/hooks/useOutside'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'right' | 'left'
	removeMiddlePosition?: boolean
}

const DatePicker = ({
	onChange,
	position,
	value,
	removeMiddlePosition,
}: IDatePicker) => {
	const [selected, setSelected] = useState<Date>()
	const { isShow, setIsShow, ref } = useOutside<HTMLDivElement>(false)

	const handleDaySelect: SelectSingleEventHandler = date => {
		const ISOdate = date?.toISOString()
		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{value ? dayjs(value).format('LL') : 'Click for select'}
			</button>
			{value && (
				<button
					className={clsx(
						'absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity',
						removeMiddlePosition && 'top-[20%] -right-8',
					)}
					onClick={() => onChange('')}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className={clsx(
						'absolute p-2.5 slide bg-sidebar z-10 shadow rounded-lg',
						position === 'left' ? '-left-4' : '-right-4',
					)}
					style={{
						top: 'calc(100% + .7rem)',
					}}
				>
					<DayPicker
						fromYear={2025}
						toYear={2035}
						initialFocus={isShow}
						defaultMonth={selected}
						mode='single'
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={formatCaption}
					/>
				</div>
			)}
		</div>
	)
}

export default DatePicker
