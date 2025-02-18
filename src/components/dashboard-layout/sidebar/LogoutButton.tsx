import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { LogOutIcon } from 'lucide-react'

const LogoutButton = () => {
	const router = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			toast.success('Successfully logout!')
			router.push('/auth')
		},
	})

	return (
		<div className='absolute top-1 right-1'>
			<button
				className='opacity-20 hover:opacity-100 transition-opacity duration-300'
				onClick={() => mutate()}
			>
				<LogOutIcon size={20} />
			</button>
		</div>
	)
}

export default LogoutButton
