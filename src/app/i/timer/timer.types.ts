import { IPomodoroRound } from '@/types/pomodoro.types'
import { Dispatch, SetStateAction } from 'react'

export interface ITimerState {
	secondsLeft: number
	activeRound: IPomodoroRound | undefined
	isRunning: boolean

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRound | undefined>>
}

export interface IUseTimerProps extends ITimerState {
	rounds: IPomodoroRound[] | undefined
}
