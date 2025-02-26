import { IBase } from '@/shared/types/base.types'

export interface ITimeBlock extends IBase {
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFromState = Partial<Omit<ITimeBlock, 'updatedAt'>>
