import { axiosWithAuth } from '@/api/interceptors'
import { ITask, TypeTaskFormState } from '@/types/task.types'

class TaskService {
	private BASE_URL = 'task'

	async getAll() {
		const response = await axiosWithAuth.get<ITask[]>(this.BASE_URL)
		return response
	}

	async createTask(data: TypeTaskFormState) {
		const response = await axiosWithAuth.post<ITask>(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await axiosWithAuth.put<ITask>(
			`${this.BASE_URL}/${id}`,
			data,
		)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const taskService = new TaskService()
