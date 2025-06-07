// src/pages/CourseDetail.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Untuk mengambil parameter dari URL dan navigasi
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card"; // Untuk styling kontainer
import { Clock, ChevronLeft, Video, Lightbulb, ClipboardList } from 'lucide-react'; // Ikon tambahan

// --- Data Dummy untuk Detail Materi ---
// Dalam aplikasi nyata, data ini akan diambil dari API/Database
// berdasarkan 'slug' yang diterima dari URL.
const allMateriData = [
  {
    id: 1,
    title: "Matematika Dasar: Aljabar Lanjutan",
    description: "Pendalaman konsep aljabar, fungsi kuadrat, dan sistem persamaan linear untuk UTBK-SNBT.",
    category: "Matematika",
    level: "Menengah",
    duration: "2 jam",
    imageUrl: "https://via.placeholder.com/800x400/ADD8E6/FFFFFF?text=Aljabar+Lanjutan",
    slug: "matematika-dasar-aljabar-lanjutan",
    tags: ["Aljabar", "Matematika", "UTBK", "SNBT"],
    // Konten lengkap dalam format HTML atau Markdown (kita pakai HTML sederhana untuk demo)
    fullContent: `
      <h2>Pendahuluan Aljabar Lanjutan</h2>
      <p>Materi ini dirancang untuk siswa yang ingin mendalami konsep-konsep aljabar yang lebih kompleks, khususnya yang relevan untuk persiapan UTBK-SNBT. Kita akan membahas fungsi, persamaan, dan ketidaksamaan dengan pendekatan yang praktis dan penuh contoh.</p>

      <h3>Bab 1: Fungsi Kuadrat</h3>
      <p>Pelajari bentuk umum fungsi kuadrat, cara menentukan titik puncak, akar-akar, dan menggambar grafiknya. Termasuk diskusi tentang diskriminan dan sifat-sifat akar.</p>
      <ul>
        <li>Bentuk umum dan grafik</li>
        <li>Menentukan akar-akar persamaan kuadrat</li>
        <li>Diskriminan dan jenis akar</li>
        <li>Penerapan fungsi kuadrat dalam masalah kontekstual</li>
      </ul>

      <h3>Bab 2: Sistem Persamaan Linear dan Kuadrat</h3>
      <p>Memahami metode substitusi dan eliminasi untuk menyelesaikan sistem persamaan yang melibatkan kombinasi linear dan kuadrat.</p>
      <ul>
        <li>Sistem persamaan linear dua variabel</li>
        <li>Sistem persamaan linear tiga variabel</li>
        <li>Sistem persamaan linear dan kuadrat</li>
      </ul>

      <h3>Video Penjelasan</h3>
      <div class="aspect-video w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
        <p>Placeholder Video Pembelajaran</p>
        </div>

      <h3>Latihan Soal Interaktif</h3>
      <p>Uji pemahaman Anda dengan kumpulan soal pilihan ganda interaktif:</p>
      <ol>
        <li>Soal #1: Nilai x dari persamaan...</li>
        <li>Soal #2: Grafik fungsi f(x)...</li>
        <li>Soal #3: Penyelesaian sistem persamaan...</li>
      </ol>

      <p>Jangan ragu untuk kembali ke materi atau gunakan fitur chatbot jika ada bagian yang belum dipahami!</p>
    `
  },
  {
    id: 2,
    title: "Bahasa Indonesia: Ejaan dan Tanda Baca",
    description: "Kuasai kaidah PUEBI dan penggunaan tanda baca yang benar untuk penalaran bahasa.",
    category: "Bahasa Indonesia",
    level: "Dasar",
    duration: "1.5 jam",
    imageUrl: "https://via.placeholder.com/800x400/F0E68C/FFFFFF?text=Ejaan+dan+Tanda+Baca",
    slug: "bahasa-indonesia-ejaan-tanda-baca",
    tags: ["Ejaan", "Tanda Baca", "Bahasa Indonesia", "SNBT"],
    fullContent: `
      <h2>Memahami PUEBI dan Tanda Baca</h2>
      <p>Materi ini akan membimbing Anda untuk menguasai Pedoman Umum Ejaan Bahasa Indonesia (PUEBI) dan penggunaan tanda baca yang tepat. Kemampuan ini krusial untuk bagian penalaran bahasa dalam UTBK-SNBT.</p>

      <h3>Bagian 1: Penggunaan Huruf dan Kata</h3>
      <p>Mempelajari penggunaan huruf kapital, huruf miring, penulisan kata ulang, kata depan, partikel, singkatan, dan akronim.</p>
      <ul>
        <li>Huruf kapital untuk nama diri, awal kalimat, dll.</li>
        <li>Huruf miring untuk judul buku, istilah asing.</li>
        <li>Penulisan angka dan lambang bilangan.</li>
      </ul>

      <h3>Bagian 2: Tanda Baca Esensial</h3>
      <p>Fokus pada tanda baca yang sering salah digunakan:</p>
      <ul>
        <li>Tanda Koma (,)</li>
        <li>Tanda Titik (.)</li>
        <li>Tanda Titik Koma (;)</li>
        <li>Tanda Titik Dua (:)</li>
        <li>Tanda Hubung (-)</li>
        <li>Tanda Petik (" ")</li>
      </ul>

      <h3>Contoh Praktik</h3>
      <p>Identifikasi kesalahan ejaan dan tanda baca pada kalimat berikut:</p>
      <p><i>ibu membeli sayur; sayuran buah-buahan dan rempah-rempah</i>.</p>
      <p>Bagaimana seharusnya ditulis?</p>
    `
  },
  // --- Tambahkan materi lainnya di sini dengan fullContent yang sesuai ---
  {
    id: 3,
    title: "TPS: Logika dan Analitis",
    description: "Strategi cepat menyelesaikan soal logika, silogisme, dan deret angka untuk TPS UTBK.",
    category: "TPS",
    level: "Lanjutan",
    duration: "3 jam",
    imageUrl: "https://via.placeholder.com/800x400/DDA0DD/FFFFFF?text=Logika+Analitis",
    slug: "tps-logika-analitis",
    tags: ["TPS", "Logika", "Analitis", "Strategi"],
    fullContent: `
      <h2>Strategi Jitu Logika dan Analitis TPS</h2>
      <p>Materi ini akan membekali Anda dengan strategi dan trik cepat untuk menyelesaikan soal-soal logika, silogisme, dan deret angka pada bagian Tes Potensi Skolastik (TPS) UTBK-SNBT.</p>
      
      <h3>Modul 1: Penalaran Logika</h3>
      <ul>
        <li>Pernyataan sebab-akibat</li>
        <li>Penarikan kesimpulan (induktif, deduktif)</li>
        <li>Soal logika cerita</li>
      </ul>

      <h3>Modul 2: Penalaran Analitis</h3>
      <ul>
        <li>Urutan dan posisi</li>
        <li>Pengelompokan data</li>
        <li>Analisis tabel dan diagram sederhana</li>
      </ul>

      <h3>Modul 3: Deret Angka dan Huruf</h3>
      <ul>
        <li>Mengidentifikasi pola deret</li>
        <li>Melanjutkan deret</li>
        <li>Mencari angka/huruf yang hilang</li>
      </ul>
      <p>Banyak latihan soal dan pembahasan akan disajikan untuk memastikan pemahaman Anda.</p>
    `
  },
  // ... Tambahkan fullContent untuk materi lain di sini
  {
    id: 4,
    title: "Fisika: Dinamika Newton",
    description: "Memahami hukum Newton dan penerapannya pada berbagai jenis gerak.",
    category: "Fisika",
    level: "Menengah",
    duration: "2.5 jam",
    imageUrl: "https://via.placeholder.com/800x400/B0E0E6/FFFFFF?text=Dinamika+Newton",
    slug: "fisika-dinamika-newton",
    tags: ["Fisika", "Dinamika", "Hukum Newton"],
    fullContent: `
      <h2>Dinamika Newton: Hukum Dasar Gerak</h2>
      <p>Materi ini akan membawa Anda memahami tiga Hukum Newton tentang gerak dan bagaimana menerapkannya dalam berbagai situasi fisika sehari-hari dan soal ujian.</p>
      
      <h3>Hukum I Newton: Inersia</h3>
      <p>Konsep kelembaman dan keadaan benda saat gaya resultan nol.</p>

      <h3>Hukum II Newton: F=ma</h3>
      <p>Hubungan antara gaya, massa, dan percepatan. Analisis diagram gaya bebas.</p>

      <h3>Hukum III Newton: Aksi-Reaksi</h3>
      <p>Prinsip pasangan gaya aksi-reaksi dan penerapannya.</p>

      <h3>Penerapan Dinamika</h3>
      <ul>
        <li>Gerak pada bidang datar dan miring</li>
        <li>Gaya gesek</li>
        <li>Sistem katrol</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Kimia: Stoikiometri",
    description: "Perhitungan mol, massa, dan volume dalam reaksi kimia.",
    category: "Kimia",
    level: "Menengah",
    duration: "2 jam",
    imageUrl: "https://via.placeholder.com/800x400/F8D8A0/FFFFFF?text=Stoikiometri+Kimia",
    slug: "kimia-stoikiometri",
    tags: ["Kimia", "Reaksi", "Perhitungan"],
    fullContent: `
      <h2>Stoikiometri: Jantung Perhitungan Kimia</h2>
      <p>Materi ini akan mengajarkan Anda dasar-dasar stoikiometri, yaitu ilmu tentang perbandingan kuantitatif reaktan dan produk dalam reaksi kimia. Ini adalah fondasi penting dalam kimia.</p>
      
      <h3>Konsep Mol</h3>
      <p>Memahami apa itu mol dan bagaimana mengubah massa ke mol dan sebaliknya.</p>

      <h3>Persamaan Reaksi Setara</h3>
      <p>Pentingnya menyetarakan reaksi kimia untuk perhitungan stoikiometri yang benar.</p>

      <h3>Perhitungan Massa, Volume, dan Partikel</h3>
      <ul>
        <li>Konversi mol ke massa (massa molar)</li>
        <li>Konversi mol ke volume (volume molar gas pada STP/RTP)</li>
        <li>Konversi mol ke jumlah partikel (bilangan Avogadro)</li>
      </ul>

      <h3>Reaktan Pembatas dan Hasil Teoritis</h3>
      <p>Bagaimana mengidentifikasi reaktan pembatas dan menghitung hasil teoritis suatu reaksi.</p>
    `
  },
  {
    id: 6,
    title: "Biologi: Sistem Peredaran Darah",
    description: "Anatomi, fungsi, dan mekanisme sistem peredaran darah manusia.",
    category: "Biologi",
    level: "Dasar",
    duration: "1.8 jam",
    imageUrl: "https://via.placeholder.com/800x400/B0E0E6/FFFFFF?text=Sistem+Darah",
    slug: "biologi-sistem-peredaran-darah",
    tags: ["Biologi", "Anatomi", "Sistem Tubuh"],
    fullContent: `
      <h2>Sistem Peredaran Darah Manusia</h2>
      <p>Materi ini akan membahas secara komprehensif anatomi, fungsi, dan mekanisme sistem peredaran darah pada manusia, termasuk komponen darah, jantung, dan pembuluh darah.</p>
      
      <h3>Komponen Darah</h3>
      <ul>
        <li>Plasma darah</li>
        <li>Sel darah merah (eritrosit)</li>
        <li>Sel darah putih (leukosit)</li>
        <li>Keping darah (trombosit)</li>
      </ul>

      <h3>Jantung: Pompa Kehidupan</h3>
      <p>Struktur jantung (serambi, bilik, katup) dan siklus kerja jantung.</p>

      <h3>Pembuluh Darah</h3>
      <ul>
        <li>Arteri, Vena, dan Kapiler</li>
        <li>Peredaran darah besar dan kecil</li>
      </ul>

      <h3>Kelainan dan Penyakit</h3>
      <p>Beberapa contoh kelainan pada sistem peredaran darah.</p>
    `
  },
];


const CourseDetail = () => {
  const { slug } = useParams(); // Mengambil 'slug' dari URL
  const course = allMateriData.find(m => m.slug === slug); // Mencari materi berdasarkan slug

  // Jika materi tidak ditemukan
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Materi Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">Maaf, materi yang Anda cari tidak tersedia atau URL salah.</p>
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
          <Link to="/course">← Kembali ke Daftar Materi</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tombol Kembali */}
      <Button variant="outline" asChild className="mb-6 bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100">
        <Link to="/course">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Materi
        </Link>
      </Button>

      <Card className="rounded-xl shadow-lg overflow-hidden">
        {/* Gambar Materi */}
        <img src={course.imageUrl} alt={course.title} className="w-full h-64 md:h-80 object-cover" />

        <div className="p-6 md:p-8">
          {/* Judul dan Detail Singkat */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{course.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{course.description}</p>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 text-sm">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{course.category}</Badge>
            <Badge variant="outline" className="text-gray-700 border border-gray-300">Level: {course.level}</Badge>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>{course.duration}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {course.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          {/* Konten Materi Lengkap (HTML) */}
          <div className="prose max-w-none text-gray-800 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: course.fullContent }}>
            {/* Konten materi lengkap akan dirender di sini. */}
            {/* Pastikan '@tailwindcss/typography' terinstal dan dikonfigurasi di tailwind.config.js */}
          </div>

          {/* Bagian Aksi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              <ClipboardList className="mr-2 h-4 w-4" />
              Mulai Latihan Soal
            </Button>
            <Button variant="outline" className="w-full bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100">
              <Video className="mr-2 h-4 w-4" />
              Lihat Semua Video
            </Button>
          </div>

          {/* Bagian Rekomendasi/Tips (Opsional) */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-800">
              <Lightbulb className="h-6 w-6" />
              Tips Belajar Materi Ini
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pastikan koneksi internet stabil saat menonton video.</li>
              <li>Buat catatan ringkas poin-poin penting.</li>
              <li>Jangan ragu bertanya di forum atau chatbot jika ada kesulitan.</li>
              <li>Kerjakan semua latihan soal hingga paham.</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetail;