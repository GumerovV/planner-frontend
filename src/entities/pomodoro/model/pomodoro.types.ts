import { IBase } from '@/shared/types/base.types'

export interface IPomodoroSession extends IBase {
	isCompleted: boolean
	rounds: IPomodoroRound[]
}

export interface IPomodoroRound extends IBase {
	isCompleted: boolean
	totalSeconds: number
}

export interface IPomodoroSettings extends IBase {
	workInterval: number
	breakInterval: number
	intervalCount: number
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRound, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroSettingsFormState = Partial<
	Omit<IPomodoroSettings, 'id' | 'createdAt' | 'updatedAt'>
>
