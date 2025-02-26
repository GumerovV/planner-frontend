import { IBase } from '@/shared/types/base.types'

enum EnumTaskPriority {
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH',
}

export interface ITask extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITask, 'id' | 'updatedAt'>>
