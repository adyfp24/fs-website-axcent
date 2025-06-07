import { Badge } from '@/components/ui/badge'
import { Users, BookOpen, BarChart2, Clock, Award, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function StatistikUser() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
          Statistik Pengguna
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Kemantau Perkembangan Belajarmu</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Pantau statistik belajar dan perkembangan persiapan UTBK-SNBT kamu secara real-time dengan dashboard kami.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card className="p-6 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Total Waktu Belajar</h3>
              <p className="text-2xl font-bold">42 Jam</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-green-600 flex items-center gap-1">
              <span>+12%</span> dari minggu lalu
            </p>
          </div>
        </Card>

        <Card className="p-6 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Materi Diselesaikan</h3>
              <p className="text-2xl font-bold">28/120</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">23% selesai</p>
          </div>
        </Card>

        <Card className="p-6 rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Skor Tryout Tertinggi</h3>
              <p className="text-2xl font-bold">712</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-green-600 flex items-center gap-1">
              <span>+45 poin</span> dari tryout sebelumnya
            </p>
          </div>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activity Chart */}
        <Card className="p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Aktivitas Belajar Mingguan</h3>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1 bg-white">
              <option>Minggu ini</option>
              <option>Minggu lalu</option>
              <option>Bulan ini</option>
            </select>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 h-64 flex items-end gap-2">
            {[2, 4, 6, 8, 6, 4, 5].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-200 rounded-t-sm hover:bg-blue-300 transition-colors"
                  style={{ height: `${height * 10}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">{['S', 'S', 'R', 'K', 'J', 'S', 'M'][index]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-200"></div>
              <span className="text-sm text-gray-600">Waktu Belajar (jam)</span>
            </div>
          </div>
        </Card>

        {/* Progress by Subject */}
        <Card className="p-6 rounded-xl">
          <h3 className="font-semibold mb-6">Progres Berdasarkan Materi</h3>
          <div className="space-y-4">
            {[
              { subject: 'Penalaran Matematika', progress: 65, color: 'bg-blue-600' },
              { subject: 'Literasi Bahasa Indonesia', progress: 42, color: 'bg-green-500' },
              { subject: 'Literasi Bahasa Inggris', progress: 38, color: 'bg-yellow-500' },
              { subject: 'Penalaran Umum', progress: 55, color: 'bg-purple-600' },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.subject}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`} 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-16">
        <h3 className="font-semibold text-xl mb-6">Aktivitas Terkini</h3>
        <Card className="p-6 rounded-xl">
          <div className="divide-y divide-gray-100">
            {[
              { 
                icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
                activity: 'Menyelesaikan sesi tanya jawab dengan EduBot tentang Trigonometri',
                time: '2 jam yang lalu'
              },
              { 
                icon: <BookOpen className="h-5 w-5 text-green-600" />,
                activity: 'Menyelesaikan materi "Persamaan Kuadrat"',
                time: '5 jam yang lalu'
              },
              { 
                icon: <BarChart2 className="h-5 w-5 text-purple-600" />,
                activity: 'Mencapai skor 85 pada Tryout Penalaran Matematika #3',
                time: 'Kemarin'
              },
              { 
                icon: <Clock className="h-5 w-5 text-yellow-600" />,
                activity: 'Rekor waktu belajar terpanjang: 3 jam 15 menit',
                time: '2 hari yang lalu'
              },
            ].map((item, index) => (
              <div key={index} className="py-4 flex gap-4">
                <div className="bg-blue-50 p-2 rounded-lg h-fit">
                  {item.icon}
                </div>
                <div>
                  <p>{item.activity}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}