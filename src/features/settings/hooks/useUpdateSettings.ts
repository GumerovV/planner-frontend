import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user.service'
import { TypeUserForm } from '@/entities/user/model/types'
import { toast } from 'sonner'

export function useUpdateSettings() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update settings'],
		mutationFn: (data: TypeUserForm) => userService.updateProfile(data),
		onSuccess() {
			toast.success('Successfully updated!')
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { mutate, isPending }
}
