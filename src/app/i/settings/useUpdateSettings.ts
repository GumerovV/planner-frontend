import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/services/user.service'
import { TypeUserForm } from '@/types/user.types'
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
