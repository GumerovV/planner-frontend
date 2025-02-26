import { useEffect, useRef } from 'react'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { toast } from 'sonner'

const GlobalLoader = () => {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()
	const toastIdRef = useRef<string | number | null>(null)

	useEffect(() => {
		const isLoading = isMutating > 0 || isFetching > 0

		if (isLoading && toastIdRef.current === null) {
			toastIdRef.current = toast.loading('Loading data...')
		} else if (!isLoading && toastIdRef.current !== null) {
			toast.dismiss(toastIdRef.current)
			toastIdRef.current = null
		}
	}, [isMutating, isFetching])

	return null
}

export default GlobalLoader
