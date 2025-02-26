import { useEffect, useRef, useState } from 'react'

export function useOutside<T extends HTMLElement>(initialIsVisible: boolean) {
	const ref = useRef<T>(null)
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible)

	const handleClickOutside = (event: any) => {
		if (ref?.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])

	return { isShow, setIsShow, ref }
}
