import { useQuery } from '@tanstack/react-query'
import { userService } from '@/entities/user'

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
