import { useUpdateRound } from '@/entities/pomodoro/hooks/useUpdateRound'
import { useLoadSettings } from '@/entities/pomodoro/hooks/useLoadSettings'
import { IUseTimerProps } from '@/entities/timer/model/timer.types'

export function useTimerActions({
	rounds,
	secondsLeft,
	setSecondsLeft,
	setIsRunning,
	activeRound,
	setActiveRound,
}: IUseTimerProps) {
	const { workInterval, breakInterval } = useLoadSettings()
	const { updateRound, isUpdateRoundPending } = useUpdateRound()

	const pauseHandler = () => {
		setIsRunning(false)

		if (activeRound?.id) {
			updateRound({
				id: activeRound.id,
				data: {
					totalSeconds: secondsLeft,
					isCompleted: Math.floor(secondsLeft / 60) >= workInterval,
				},
			})
		}
	}

	const playHandler = () => {
		setIsRunning(true)
	}

	const nextRoundHandler = () => {
		if (activeRound?.id) {
			updateRound({
				id: activeRound.id,
				data: {
					totalSeconds: workInterval * 60,
					isCompleted: true,
				},
			})
		}
	}

	const prevRoundHandler = () => {
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)

		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound.id,
			data: {
				isCompleted: false,
				totalSeconds: 0,
			},
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isUpdateRoundPending,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler,
	}
}
