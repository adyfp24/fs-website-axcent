import { Link, NavLink } from 'react-router-dom'
import { mainMenu } from '@/config/menu'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ModeToggle } from './mode-toggle'

export function AppHeader() {
    return (
        <header className="bg-background/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-1 rounded-md">
                            <svg viewBox="0 0 24 24" className="size-6 fill-current">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl text-blue-600">EduBot SNBT</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {mainMenu.map((item) => (
                            <NavLink
                                key={item.title}
                                to={item.url}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                        isActive
                                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/60"
                                    )
                                }
                            >
                                {item.icon && <item.icon className="size-4" />}
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    
                    {/* Login/Register Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link 
                            to="/login"
                            className={buttonVariants({ variant: "outline", size: "sm" })}
                        >
                            Masuk
                        </Link>
                        <Link 
                            to="/register"
                            className={buttonVariants({ size: "sm" })}
                        >
                            Daftar
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                            <div className="flex flex-col gap-6 py-6">
                                <Link to="/" className="flex items-center gap-2">
                                    <div className="bg-blue-600 text-white p-1 rounded-md">
                                        <svg viewBox="0 0 24 24" className="size-6 fill-current">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-xl text-blue-600">EduBot SNBT</span>
                                </Link>
                                
                                <nav className="flex flex-col gap-1">
                                    {mainMenu.map((item) => (
                                        <NavLink
                                            key={item.title}
                                            to={item.url}
                                            className={({ isActive }) =>
                                                cn(
                                                    "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                                    isActive
                                                        ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/60"
                                                )
                                            }
                                        >
                                            {item.icon && <item.icon className="size-4" />}
                                            {item.title}
                                        </NavLink>
                                    ))}
                                </nav>

                                <div className="flex flex-col gap-2 mt-4">
                                    <Link 
                                        to="/login"
                                        className={buttonVariants({ variant: "outline", size: "sm", className: "w-full" })}
                                    >
                                        Masuk
                                    </Link>
                                    <Link 
                                        to="/register"
                                        className={buttonVariants({ size: "sm", className: "w-full" })}
                                    >
                                        Daftar
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}