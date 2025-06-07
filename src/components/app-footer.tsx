import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export function AppFooter() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="border-t border-gray-200/50 dark:border-gray-800/50 mt-8">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 text-white p-1 rounded-md">
                                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl text-blue-600">EduBot SNBT</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Solusi inovatif dalam dunia pendidikan digital untuk mendukung generasi muda mempersiapkan diri menghadapi UTBK-SNBT.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Facebook className="size-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Instagram className="size-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Twitter className="size-5" />
                            </a>
                            <a href="mailto:info@edubot-snbt.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Mail className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link to="/chatbot" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Chatbot
                                </Link>
                            </li>
                            <li>
                                <Link to="/course" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Materi
                                </Link>
                            </li>
                            <li>
                                <Link to="/tryout" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Tryout
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Sumber Daya</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Panduan Pengguna
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                                    Kebijakan Privasi
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Kontak</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-600 dark:text-gray-400">
                                Email: info@edubot-snbt.com
                            </li>
                            <li className="text-gray-600 dark:text-gray-400">
                                Telepon: +62 812 3456 7890
                            </li>
                            <li className="text-gray-600 dark:text-gray-400">
                                Alamat: Jl. Pendidikan No. 123, Jakarta
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200/50 dark:border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {currentYear} EduBot SNBT. Hak Cipta Dilindungi.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                            Syarat & Ketentuan
                        </a>
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                            Kebijakan Privasi
                        </a>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    )
}