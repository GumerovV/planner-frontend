import { useQuery } from '@tanstack/react-query'
import { userService } from '@/services/user.service'

export function useProfile() {
	const {
		data: profile,
		isLoading,
		isError,
		isSuccess,
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})

	return { profile, isLoading, isError, isSuccess }
}
