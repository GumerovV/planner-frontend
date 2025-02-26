import { Formatters } from 'react-day-picker'
import dayjs from 'dayjs'

type FormatterCaption = Pick<Formatters, 'formatCaption'>

const seasonEmoji: Record<string, string> = {
	summer: '☀️',
	spring: '🌼',
	winter: '❄️',
	autumn: '🍁',
}

const getSeason = (month: Date): keyof typeof seasonEmoji => {
	const monthNumber = month.getMonth() + 1

	if (monthNumber > 2 && monthNumber < 6) return 'spring'
	if (monthNumber > 6 && monthNumber < 9) return 'summer'
	if (monthNumber > 9 && monthNumber < 12) return 'autumn'
	else return 'winter'
}

export const formatCaption: FormatterCaption = {
	formatCaption: (month: Date) => {
		const season = getSeason(month)
		return `${seasonEmoji[season]} ${dayjs(month).format('MMMM')}`
	},
}
