import React, { PropsWithChildren } from 'react'
import DashboardLayout from '@/widgets/layouts/dashboard/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}
