import { useQuery } from '@tanstack/react-query'
import { pomodoroService } from '@/entities/pomodoro/api/pomodoro.service'
import { useEffect } from 'react'
import { ITimerState } from '@/entities/timer/model/timer.types'
import { useLoadSettings } from '@/entities/pomodoro/hooks/useLoadSettings'

export function useTodaySession({
	setActiveRound,
	setSecondsLeft,
}: ITimerState) {
	const { workInterval } = useLoadSettings()

	const {
		data: todaySession,
		isPending: isTodaySessionPending,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getSession(),
	})

	const rounds = todaySession?.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)

			setActiveRound(activeRound)

			if (activeRound && activeRound.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [rounds, isSuccess])

	return {
		todaySession,
		isTodaySessionPending,
		isSuccess,
		refetch,
		workInterval,
	}
}
