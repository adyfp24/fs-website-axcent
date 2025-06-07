import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, BookOpen, Award, BarChart2, ChevronRight, Calendar, AlertTriangle } from 'lucide-react'

export default function Tryout() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <Badge className="px-3 py-1 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200">
          Latihan Soal
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Tryout UTBK-SNBT</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Latih kemampuanmu dengan berbagai paket tryout yang disesuaikan dengan kebutuhan dan level kesulitan UTBK-SNBT sebenarnya.
        </p>
      </div>

      {/* Tryout Navigation */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="rounded-full">Semua Kategori</Button>
        <Button variant="outline" className="rounded-full">Penalaran Matematika</Button>
        <Button variant="outline" className="rounded-full">Literasi Bahasa</Button>
        <Button variant="outline" className="rounded-full">Penalaran Umum</Button>
        <Button variant="outline" className="rounded-full">Simulasi Full Test</Button>
      </div>

      {/* Tryout List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Tryout Simulasi Full Test #1",
            category: "Simulasi Full Test",
            duration: "120 menit",
            questionCount: "75 soal",
            difficulty: "Sedang",
            completion: "0%",
            isNew: true
          },
          {
            title: "Latihan Penalaran Matematika",
            category: "Penalaran Matematika",
            duration: "40 menit",
            questionCount: "20 soal",
            difficulty: "Mudah",
            completion: "45%",
            isNew: false
          },
          {
            title: "Tryout Simulasi Full Test #2",
            category: "Simulasi Full Test",
            duration: "120 menit",
            questionCount: "75 soal",
            difficulty: "Sulit",
            completion: "100%",
            isNew: true
          },
          {
            title: "Literasi Bahasa Indonesia",
            category: "Literasi Bahasa",
            duration: "30 menit",
            questionCount: "15 soal",
            difficulty: "Sedang",
            completion: "80%",
            isNew: false
          },
          {
            title: "Penalaran Umum Paket 3",
            category: "Penalaran Umum",
            duration: "35 menit",
            questionCount: "15 soal",
            difficulty: "Sulit",
            completion: "10%",
            isNew: false
          },
          {
            title: "Literasi Bahasa Inggris",
            category: "Literasi Bahasa",
            duration: "30 menit",
            questionCount: "15 soal",
            difficulty: "Sedang",
            completion: "0%",
            isNew: true
          }
        ].map((tryout, index) => (
          <Card key={index} className="rounded-xl hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-6">
              {tryout.isNew && (
                <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-200">
                  Baru
                </Badge>
              )}
              <h3 className="text-xl font-semibold mb-2">{tryout.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <BookOpen className="h-4 w-4" />
                <span>{tryout.category}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>{tryout.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Soal:</span>
                  <span>{tryout.questionCount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Tingkat:</span>
                  <span className={`font-medium ${
                    tryout.difficulty === 'Mudah' ? 'text-green-600' :
                    tryout.difficulty === 'Sedang' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {tryout.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Selesai:</span>
                  <span>{tryout.completion}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {tryout.completion !== "0%" && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: tryout.completion }}
                    ></div>
                  </div>
                </div>
              )}

              <Button variant="outline" className="w-full mt-2">
                {tryout.completion === "0%" ? "Mulai Tryout" : 
                 tryout.completion === "100%" ? "Lihat Hasil" : "Lanjutkan"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Test Results Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="text-blue-600" />
          <span>Hasil Tryout Terakhir</span>
        </h3>
        
        <Card className="p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">712</div>
              <div className="text-gray-500">Skor Total</div>
              <div className="mt-4">
                <Badge className="bg-green-100 text-green-800">Lebih tinggi dari 65% peserta</Badge>
              </div>
            </div>

            {/* Subject Breakdown */}
            <div className="space-y-4">
              <h4 className="font-semibold">Per Subjek</h4>
              {[
                { subject: 'Penalaran Matematika', score: 725, percentile: '70%' },
                { subject: 'Literasi Bahasa', score: 690, percentile: '60%' },
                { subject: 'Penalaran Umum', score: 705, percentile: '65%' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{item.subject}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{item.score}</span>
                    <Badge variant="outline" className="text-xs py-0.5">
                      Top {item.percentile}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="space-y-4">
              <h4 className="font-semibold">Rekomendasi Belajar</h4>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Fokus pada: Aljabar dan Geometri</p>
                  <p className="text-xs text-gray-500 mt-1">Berdasarkan analisis jawaban salah di Penalaran Matematika</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Jadwalkan tryout berikutnya</p>
                  <p className="text-xs text-gray-500 mt-1">Rekomendasi: 3 hari lagi untuk melihat perkembangan</p>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="mt-6 w-full">
            Lihat Analisis Lengkap
            <BarChart2 className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="p-6 rounded-xl bg-blue-50 border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tips Mengerjakan Tryout</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-gray-700">Kerjakan soal yang lebih mudah terlebih dahulu</li>
              <li className="text-gray-700">Manfaatkan waktu sebaik mungkin dengan timer</li>
              <li className="text-gray-700">Review jawaban yang salah untuk pembelajaran</li>
              <li className="text-gray-700">Istirahat yang cukup sebelum tryout</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Manajemen Waktu</h4>
                <p className="text-sm text-gray-600">Alokasikan waktu per subtes dengan tepat</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { label: "PM", time: "30 menit" },
                { label: "LB", time: "30 menit" },
                { label: "PU", time: "30 menit" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-2 rounded border border-blue-200">
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}