import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from '@/app/providers'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Planner is the best solution for busy people!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${zen.variable}`} suppressHydrationWarning>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
