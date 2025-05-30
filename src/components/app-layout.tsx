import { Outlet } from 'react-router'
import { AppHeader } from './app-header'
import { AppFooter } from './app-footer'

export function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
            </div>
            <AppHeader />
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-grow flex-col">
                <div className='flex flex-grow flex-col'>
                    <Outlet />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}