import { useEffect, useState } from 'react'
import { IPomodoroRound } from '@/types/pomodoro.types'
import { useLoadSettings } from '@/app/i/timer/hooks/useLoadSettings'
import { ITimerState } from '@/app/i/timer/timer.types'
import { useUpdateRound } from '@/app/i/timer/hooks/useUpdateRound'

export function useTimer(): ITimerState {
	const { workInterval, breakInterval } = useLoadSettings()
	const { updateRound } = useUpdateRound()

	const [isRunning, setIsRunning] = useState<boolean>(false)
	const [isBreakTime, setIsBreakTime] = useState<boolean>(false)

	const [secondsLeft, setSecondsLeft] = useState<number>(workInterval * 60)
	const [activeRound, setActiveRound] = useState<IPomodoroRound>()

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null

		if (isRunning) {
			interval = setInterval(() => setSecondsLeft(prev => prev - 1), 1000)
		} else if (!isRunning && secondsLeft !== 0 && interval) {
			clearInterval(interval)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isRunning, secondsLeft, workInterval, activeRound])

	useEffect(() => {
		if (secondsLeft > 0) return
		if (activeRound && !isBreakTime) {
			updateRound({
				id: activeRound?.id,
				data: {
					totalSeconds: workInterval * 60,
					isCompleted: true,
				},
			})
		}
		setIsBreakTime(!isBreakTime)
		setSecondsLeft((isBreakTime ? breakInterval : workInterval) * 60)
	}, [secondsLeft, isBreakTime, workInterval, breakInterval])

	return {
		activeRound,
		secondsLeft,
		setActiveRound,
		setSecondsLeft,
		setIsRunning,
		isRunning,
	}
}
