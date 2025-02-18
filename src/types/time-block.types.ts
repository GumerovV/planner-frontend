import { IBase } from '@/types/base.types'

export interface ITimeBlock extends IBase {
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFromState = Partial<Omit<ITimeBlock, 'updatedAt'>>
