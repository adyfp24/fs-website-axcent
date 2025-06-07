// src/pages/Course.tsx (FINAL - SESUAI DISKUSI SEBELUMNYA)

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

// --- Data Dummy Materi (Sama seperti sebelumnya) ---
const materiList = [
  {
    id: 1,
    title: "Matematika Dasar: Aljabar Lanjutan",
    description: "Pendalaman konsep aljabar, fungsi kuadrat, dan sistem persamaan linear untuk UTBK-SNBT.",
    category: "Matematika",
    level: "Menengah",
    duration: "2 jam",
    imageUrl: "https://via.placeholder.com/400x200/ADD8E6/FFFFFF?text=Matematika+Aljabar",
    slug: "matematika-dasar-aljabar-lanjutan",
    tags: ["Aljabar", "Matematika", "UTBK", "SNBT"]
  },
  {
    id: 2,
    title: "Bahasa Indonesia: Ejaan dan Tanda Baca",
    description: "Kuasai kaidah PUEBI dan penggunaan tanda baca yang benar untuk penalaran bahasa.",
    category: "Bahasa Indonesia",
    level: "Dasar",
    duration: "1.5 jam",
    imageUrl: "https://via.placeholder.com/400x200/F0E68C/FFFFFF?text=Bahasa+Indonesia",
    slug: "bahasa-indonesia-ejaan-tanda-baca",
    tags: ["Ejaan", "Tanda Baca", "Bahasa Indonesia", "SNBT"]
  },
  {
    id: 3,
    title: "TPS: Logika dan Analitis",
    description: "Strategi cepat menyelesaikan soal logika, silogisme, dan deret angka untuk TPS UTBK.",
    category: "TPS",
    level: "Lanjutan",
    duration: "3 jam",
    imageUrl: "https://via.placeholder.com/400x200/DDA0DD/FFFFFF?text=TPS+Logika",
    slug: "tps-logika-analitis",
    tags: ["TPS", "Logika", "Analitis", "Strategi"]
  },
  {
    id: 4,
    title: "Fisika: Dinamika Newton",
    description: "Memahami hukum Newton dan penerapannya pada berbagai jenis gerak.",
    category: "Fisika",
    level: "Menengah",
    duration: "2.5 jam",
    imageUrl: "https://via.placeholder.com/400x200/B0E0E6/FFFFFF?text=Fisika+Dinamika",
    slug: "fisika-dinamika-newton",
    tags: ["Fisika", "Dinamika", "Hukum Newton"]
  },
  {
    id: 5,
    title: "Kimia: Stoikiometri",
    description: "Perhitungan mol, massa, dan volume dalam reaksi kimia.",
    category: "Kimia",
    level: "Menengah",
    duration: "2 jam",
    imageUrl: "https://via.placeholder.com/400x200/F8D8A0/FFFFFF?text=Kimia+Stoikiometri",
    slug: "kimia-stoikiometri",
    tags: ["Kimia", "Reaksi", "Perhitungan"]
  },
  {
    id: 6,
    title: "Biologi: Sistem Peredaran Darah",
    description: "Anatomi, fungsi, dan mekanisme sistem peredaran darah manusia.",
    category: "Biologi",
    level: "Dasar",
    duration: "1.8 jam",
    imageUrl: "https://via.placeholder.com/400x200/B0E0E6/FFFFFF?text=Biologi+Darah",
    slug: "biologi-sistem-peredaran-darah",
    tags: ["Biologi", "Anatomi", "Sistem Tubuh"]
  },
];

const categories = ["Semua Kategori", "Matematika", "Bahasa Indonesia", "TPS", "Fisika", "Kimia", "Biologi", "Bahasa Inggris"];
const levels = ["Semua Level", "Dasar", "Menengah", "Lanjutan"];

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedLevel, setSelectedLevel] = useState('Semua Level');

  const filteredMateri = materiList.filter(materi => {
    const matchesSearch = materi.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          materi.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          materi.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Semua Kategori' || materi.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Semua Level' || materi.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Daftar Materi UTBK-SNBT</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Temukan materi belajar yang relevan dan persiapkan diri Anda untuk UTBK-SNBT bersama EduBot.
      </p>

      {/* Bagian Filter dan Pencarian */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Input Pencarian */}
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Cari materi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xl w-full"
          />
        </div>

        {/* Filter Kategori (menggunakan Badge/Button) */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              className={`cursor-pointer px-4 py-2 text-base transition-colors duration-200 ease-in-out
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100'
                }
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Filter Level (menggunakan Badge/Button) */}
        <div className="flex flex-wrap justify-center gap-2">
          {levels.map(level => (
            <Badge
              key={level}
              className={`cursor-pointer px-4 py-2 text-base transition-colors duration-200 ease-in-out
                ${selectedLevel === level
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100'
                }
              `}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </Badge>
          ))}
        </div>
      </div>

      {/* Daftar Materi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMateri.length > 0 ? (
          filteredMateri.map((materi) => (
            <Card key={materi.id} className="flex flex-col">
              <img src={materi.imageUrl} alt={materi.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle>{materi.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{materi.duration} • Level: {materi.level}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base text-gray-700">{materi.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {materi.tags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {/* Tombol "Pelajari Sekarang" menjadi biru */}
                <Button 
                  asChild 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 ease-in-out"
                >
                  <Link to={`/course/${materi.slug}`}>Pelajari Sekarang →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">Materi tidak ditemukan. Coba sesuaikan filter Anda.</p>
        )}
      </div>
    </div>
  );
};

export default Course;