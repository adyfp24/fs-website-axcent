import {
    BookOpen,
    MessageSquare,
    Home,
    Trophy,
    LucideIcon,
    Brain
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Beranda',
        url: '/',
        icon: Home
    },
    {
        title: 'Chatbot',
        url: '/chatbot',
        icon: MessageSquare
    },
    {
        title: 'Materi',
        url: '/course',
        icon: BookOpen
    },
    {
        title: 'Tryout',
        url: '/tryout',
        icon: Trophy
    },
    {
        title: 'Statistik',
        url: '/statistik-user',
        icon: Brain
    }
]
