export const formatTime = (leftSeconds: number): string => {
	const minutes = Math.floor(leftSeconds / 60)
	const seconds = leftSeconds % 60
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
