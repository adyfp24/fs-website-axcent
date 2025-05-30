import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainMenu } from '@/config/menu'
import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { AppLogo } from './app-logo'
import { AppSidebar } from './app-sidebar'
import { Button, buttonVariants } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { appConfig, baseUrl } from '@/config/app'
import GitHub from './icons/github'

export function AppHeader() {
    const location = useLocation()

    return (
        <header className="bg-background/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="w-full max-w-7xl mx-auto flex items-center gap-2 h-16 px-4 md:px-8">
                <div className='flex items-center gap-2 md:gap-4'>
                    <AppSidebar />
                    <Link to="/" className="flex items-center gap-2">
                        <AppLogo />
                        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ady Firdaus</span>
                    </Link>
                </div>

                <div className='ml-4 flex-1 flex items-center justify-between'>
                    <div className='flex-1'>
                        <nav className="hidden md:flex gap-1">
                            {mainMenu.map((item, index) => (
                                (item.items && item.items.length > 0) ? (
                                    <DropdownMenu key={index}>
                                        <DropdownMenuTrigger className='focus-visible:outline-none'>
                                            <NavLink
                                                key={index}
                                                to={item.url}
                                                className={({ isActive }) => cn(
                                                    "flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-left text-sm outline-none transition-all hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-accent-foreground focus-visible:ring-2 active:bg-accent active:text-accent-foreground",
                                                    "h-10 text-sm font-medium",
                                                    isActive ? "text-foreground bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30" : "text-foreground/70"
                                                )}>
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                <ChevronDown className='!size-3 -ml-1' />
                                            </NavLink>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='start' className='min-w-56 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-800/50'>
                                            {item.items.map((subItem, index) => (
                                                <DropdownMenuItem key={index} asChild className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                                                    <NavLink
                                                        to={subItem.url}
                                                        className={cn(
                                                            'cursor-pointer w-full',
                                                            subItem.url === location.pathname && 'bg-gray-100/70 dark:bg-gray-800/70'
                                                        )}>
                                                        {subItem.title}
                                                    </NavLink>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <NavLink
                                        key={index}
                                        to={item.url}
                                        className={({ isActive }) => cn(
                                            "flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-left text-sm outline-none transition-all hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-accent-foreground",
                                            "h-10 text-sm font-medium",
                                            isActive ? "text-foreground bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30" : "text-foreground/70"
                                        )}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </NavLink>
                                )
                            ))}
                        </nav>
                    </div>
                    <nav className="flex items-center gap-2">
                        <a
                            href={appConfig.github.url}
                            title={appConfig.github.title}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "icon",
                                }),
                                "size-10 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                            )}>
                            <GitHub className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <Button 
                            variant="default" 
                            size="sm" 
                            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                        >
                            Contact Me
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}