import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, BookOpen, Trophy, Users, ArrowRight, Brain, Lightbulb } from 'lucide-react'

export default function HomePage() {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
                                Platform Belajar UTBK-SNBT #1
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Persiapkan UTBK-SNBT Bersama <span className="text-blue-600">EduBot</span>
                            </h1>
                            <p className="text-lg text-gray-600">
                                Solusi inovatif belajar UTBK-SNBT dengan chatbot cerdas dan materi berkualitas untuk meningkatkan peluang masuk PTN impianmu.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    Mulai Belajar <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Coba Chatbot Gratis
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <Avatar key={i} className="border-2 border-white">
                                            <AvatarFallback className="bg-blue-100 text-blue-800">
                                                {String.fromCharCode(64 + i)}
                                            </AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold">1,200+</span> pelajar telah bergabung
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -z-10 rounded-full bg-blue-100 w-96 h-96 blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <img 
                                src="/hero-image.png" 
                                alt="EduBot SNBT" 
                                className="rounded-xl shadow-lg w-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400/e6f2ff/0066cc?text=EduBot+SNBT";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Fitur Unggulan
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">Solusi Lengkap Persiapan UTBK-SNBT</h2>
                        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                            EduBot SNBT hadir dengan berbagai fitur inovatif untuk membantu kamu mempersiapkan UTBK-SNBT dengan lebih efektif dan efisien.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                                title: "Chatbot Cerdas",
                                description: "Tanya jawab dengan AI yang dilatih khusus untuk materi UTBK-SNBT kapan saja dan di mana saja."
                            },
                            {
                                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                                title: "Materi Terstruktur",
                                description: "Materi pembelajaran yang disusun sesuai dengan kurikulum dan kisi-kisi UTBK-SNBT terbaru."
                            },
                            {
                                icon: <Trophy className="h-8 w-8 text-blue-600" />,
                                title: "Tryout Berkala",
                                description: "Latihan soal dan tryout untuk mengukur kemampuan dan mempersiapkan diri menghadapi ujian."
                            },
                            {
                                icon: <Brain className="h-8 w-8 text-blue-600" />,
                                title: "Analisis Kemampuan",
                                description: "Dapatkan analisis detail tentang kekuatan dan kelemahan untuk fokus belajar yang lebih terarah."
                            },
                            {
                                icon: <Users className="h-8 w-8 text-blue-600" />,
                                title: "Komunitas Belajar",
                                description: "Bergabung dengan komunitas pelajar untuk diskusi dan berbagi tips persiapan UTBK-SNBT."
                            },
                            {
                                icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
                                title: "Tips & Strategi",
                                description: "Akses tips dan strategi jitu dari para mentor berpengalaman untuk menghadapi UTBK-SNBT."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "10,000+", label: "Pengguna Aktif" },
                            { value: "500+", label: "Materi Pembelajaran" },
                            { value: "50+", label: "Tryout Tersedia" },
                            { value: "95%", label: "Tingkat Kepuasan" }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                                <div className="text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Testimonial
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4">Yang Mereka Katakan</h2>
                        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                            Dengarkan pengalaman para siswa yang telah menggunakan EduBot SNBT dalam persiapan UTBK-SNBT mereka.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Andi Pratama",
                                role: "Mahasiswa Kedokteran UI",
                                image: "A",
                                content: "EduBot SNBT sangat membantu saya dalam persiapan UTBK. Fitur chatbot-nya luar biasa, seperti punya tutor pribadi 24/7."
                            },
                            {
                                name: "Dina Safitri",
                                role: "Mahasiswa Teknik ITB",
                                image: "D",
                                content: "Berkat tryout berkala di EduBot, saya bisa mengidentifikasi kelemahan dan fokus belajar lebih terarah. Hasilnya, saya diterima di jurusan impian!"
                            },
                            {
                                name: "Budi Santoso",
                                role: "Mahasiswa Hukum UGM",
                                image: "B",
                                content: "Materi yang terstruktur dan tips dari mentor sangat membantu. EduBot adalah investasi terbaik untuk persiapan UTBK-SNBT saya."
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-blue-100 text-blue-800">
                                            {testimonial.image}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50 rounded-3xl">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Untuk Memulai Perjalanan UTBK-SNBT?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan pelajar lainnya dan mulai persiapkan diri untuk UTBK-SNBT dengan EduBot sekarang!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Daftar Sekarang
                        </Button>
                        <Button size="lg" variant="outline">
                            Pelajari Lebih Lanjut
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}