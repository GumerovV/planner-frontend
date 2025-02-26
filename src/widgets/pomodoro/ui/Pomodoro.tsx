'use client'

import React from 'react'
import { useTimer } from '@/entities/timer/hooks/useTimer'
import { useTimerActions } from '@/entities/timer/hooks/useTimerActions'
import { useTodaySession } from '@/entities/pomodoro/hooks/useTodaySession'
import { Loader, PauseIcon, PlayIcon, RefreshCcwIcon } from 'lucide-react'
import { formatTime } from '@/entities/timer/lib/format-time'
import PomodoroRounds from '@/widgets/pomodoro/ui/PomodoroRounds'
import { useDeleteSession } from '@/entities/pomodoro/hooks/useDeleteSession'
import { useCreateSessions } from '@/entities/pomodoro/hooks/useCreateSessions'

const Pomodoro = () => {
	const timerState = useTimer()
	const { todaySession, isTodaySessionPending, workInterval } =
		useTodaySession(timerState)

	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60),
	)
	const { createSession, isCreatePending } = useCreateSessions()

	const rounds = todaySession?.rounds

	const {
		prevRoundHandler,
		nextRoundHandler,
		isUpdateRoundPending,
		pauseHandler,
		playHandler,
	} = useTimerActions({ ...timerState, rounds })

	if (isTodaySessionPending) return <Loader size={15} />

	return (
		<div className='relative w-80 text-center'>
			{!isTodaySessionPending && (
				<div className='text-7xl font-semibold'>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}
			{isTodaySessionPending ? (
				<Loader />
			) : todaySession ? (
				<>
					<PomodoroRounds
						rounds={todaySession.rounds}
						nextRoundHandler={nextRoundHandler}
						prevRoundHandler={prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className='mt-6 opacity-80 hover:opacity-100 transition-opacity'
						onClick={() =>
							timerState.isRunning ? pauseHandler() : playHandler()
						}
						disabled={isUpdateRoundPending}
					>
						{timerState.isRunning ? (
							<PauseIcon size={30} />
						) : (
							<PlayIcon size={30} />
						)}
					</button>
					<button
						className='absolute top-0 right-0 opacity-40 hover:opacity-100 transition-opacity'
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(todaySession.id)
						}}
						disabled={isDeletePending}
					>
						<RefreshCcwIcon size={19} />
					</button>
				</>
			) : (
				<button
					className='mt-1 px-4 py-2 border border-primary rounded hover:bg-primary/70 transition-colors duration-300'
					onClick={() => createSession()}
					disabled={isCreatePending}
				>
					Create session
				</button>
			)}
		</div>
	)
}

export default Pomodoro
