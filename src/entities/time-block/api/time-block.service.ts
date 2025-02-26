import { axiosWithAuth } from '@/shared/api'
import {
	ITimeBlock,
	TypeTimeBlockFromState,
} from '@/entities/time-block/model/time-block.types'

class TimeBlockService {
	private BASE_URL = 'time-block'

	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlock[]>(this.BASE_URL)
		return response
	}

	async createTimeBlock(data: TypeTimeBlockFromState) {
		const response = await axiosWithAuth.post<ITimeBlock>(this.BASE_URL, data)
		return response
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockFromState) {
		const response = await axiosWithAuth.put<ITimeBlock>(
			`${this.BASE_URL}/${id}`,
			data,
		)
		return response
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/update-order`, {
			ids,
		})
		return response
	}
}

export const timeBlockService = new TimeBlockService()
