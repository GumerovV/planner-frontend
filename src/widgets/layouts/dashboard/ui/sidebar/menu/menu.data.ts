import { IMenuItem } from '@/widgets/layouts/dashboard/ui/sidebar/menu/menu.interface'
import {
	CalendarRangeIcon,
	KanbanSquareIcon,
	LayoutDashboardIcon,
	SettingsIcon,
	TimerIcon,
} from 'lucide-react'
import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboardIcon,
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard',
	},
	{
		icon: KanbanSquareIcon,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks',
	},
	{
		icon: TimerIcon,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Pomodoro',
	},
	{
		icon: CalendarRangeIcon,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking',
	},
	{
		icon: SettingsIcon,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Settings',
	},
]
