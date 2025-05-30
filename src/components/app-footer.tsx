import { appConfig } from '@/config/app'
import { ModeToggle } from './mode-toggle'
import { Linkedin, Mail, Twitter } from 'lucide-react'

export function AppFooter() {
    return (
        <footer className="flex flex-col items-center justify-between gap-4 min-h-[3rem] md:h-20 py-6 md:flex-row border-t border-gray-200/50 dark:border-gray-800/50 mt-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © {new Date().getFullYear()} <a href={appConfig.author.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">{appConfig.author.name}</a>. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
                <div className="hidden md:block">
                    <ModeToggle />
                </div>
            </div>
        </footer>
    )
}