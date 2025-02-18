import React from 'react'
import styles from './PomodoroRound.module.scss'
import { IPomodoroRound } from '@/types/pomodoro.types'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { clsx } from 'clsx'

interface IPomodoroRounds {
	rounds: IPomodoroRound[] | undefined
	nextRoundHandler: () => void
	prevRoundHandler: () => void
	activeRound: IPomodoroRound | undefined
}

const PomodoroRounds = ({
	rounds,
	nextRoundHandler,
	prevRoundHandler,
	activeRound,
}: IPomodoroRounds) => {
	const isCanPrevRound = rounds
		? rounds.some(round => round.isCompleted)
		: false
	const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false

	console.log(isCanNextRound)

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
				disabled={!isCanPrevRound}
			>
				<ChevronLeftIcon />
			</button>

			<div className={styles.roundsContainer}>
				{rounds?.map(round => (
					<div
						key={round.id}
						className={clsx(styles.round, {
							[styles.completed]: round.isCompleted,
							[styles.active]:
								round.id === activeRound?.id && !round.isCompleted,
						})}
					></div>
				))}
			</div>

			<button
				className={styles.button}
				onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
				disabled={!isCanNextRound}
			>
				<ChevronRightIcon />
			</button>
		</div>
	)
}

export default PomodoroRounds
