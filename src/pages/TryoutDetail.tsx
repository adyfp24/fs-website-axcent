import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  Clock, 
  BookOpen, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  CheckCircle, 
  XCircle,
  HelpCircle,
  BarChart2,
  Save
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock data for a tryout
const tryoutData = {
  id: "1",
  title: "Tryout Simulasi Full Test #1",
  category: "Simulasi Full Test",
  duration: 120, // in minutes
  totalQuestions: 75,
  difficulty: "Sedang",
  description: "Tryout ini dirancang untuk mensimulasikan pengalaman UTBK-SNBT sebenarnya dengan soal-soal yang mencakup semua materi yang diujikan.",
  instructions: [
    "Baca setiap pertanyaan dengan teliti sebelum menjawab",
    "Kerjakan soal yang lebih mudah terlebih dahulu",
    "Jangan terpaku pada satu soal yang sulit",
    "Manfaatkan fitur tandai untuk soal yang ingin Anda review nanti",
    "Pastikan semua soal terjawab sebelum menyelesaikan ujian"
  ],
  sections: [
    {
      name: "Penalaran Matematika",
      questions: 20,
      time: 30, // in minutes
      currentQuestion: 0,
      completed: false
    },
    {
      name: "Literasi Bahasa Indonesia",
      questions: 15,
      time: 25,
      currentQuestion: 0,
      completed: false
    },
    {
      name: "Literasi Bahasa Inggris",
      questions: 15,
      time: 25,
      currentQuestion: 0,
      completed: false
    },
    {
      name: "Penalaran Umum",
      questions: 25,
      time: 40,
      currentQuestion: 0,
      completed: false
    }
  ],
  questions: [
    {
      id: 1,
      section: "Penalaran Matematika",
      text: "Jika 2x + 3y = 12 dan 3x - 2y = -1, maka nilai x + y adalah...",
      options: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "4" },
        { id: "D", text: "5" },
        { id: "E", text: "6" }
      ],
      correctAnswer: "B",
      explanation: "Dari 2x + 3y = 12, kita dapatkan y = (12 - 2x)/3. Substitusi ke persamaan kedua: 3x - 2((12 - 2x)/3) = -1. Selesaikan untuk x = 1, kemudian y = 10/3. Jadi x + y = 1 + 10/3 = 3."
    },
    {
      id: 2,
      section: "Penalaran Matematika",
      text: "Sebuah bola dilempar ke atas dengan kecepatan awal 20 m/s. Jika percepatan gravitasi adalah 10 m/s², maka ketinggian maksimum yang dicapai bola tersebut adalah...",
      options: [
        { id: "A", text: "10 meter" },
        { id: "B", text: "20 meter" },
        { id: "C", text: "30 meter" },
        { id: "D", text: "40 meter" },
        { id: "E", text: "50 meter" }
      ],
      correctAnswer: "B",
      explanation: "Ketinggian maksimum dapat dihitung dengan rumus h = v²/2g, dimana v adalah kecepatan awal dan g adalah percepatan gravitasi. h = 20²/(2×10) = 400/20 = 20 meter."
    },
    // More questions would be here
  ]
};

export default function TryoutDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(tryoutData.duration * 60); // in seconds
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  
  // Use the id parameter to fetch the specific tryout data
  // In a real application, you would fetch the data based on the id
  // For now, we're using mock data
  
  useEffect(() => {
    console.log(`Loading tryout with ID: ${id}`);
    // Here you would fetch the tryout data based on the id
    // For example: fetchTryoutData(id);
  }, [id]);
  
  // Format time from seconds to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isStarted && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isStarted, isFinished, timeLeft]);
  
  // Handle answer selection
  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };
  
  // Toggle flagged question
  const toggleFlagged = (questionId: number) => {
    setFlaggedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };
  
  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestion < tryoutData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  // Start the tryout
  const startTryout = () => {
    setIsStarted(true);
    setActiveTab("questions");
  };
  
  // Finish the tryout
  const finishTryout = () => {
    setIsFinished(true);
    setActiveTab("results");
  };
  
  // Calculate progress
  const progress = Math.round((Object.keys(answers).length / tryoutData.totalQuestions) * 100);
  
  // Current question data
  const question = tryoutData.questions[currentQuestion];
  
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/tryout">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{tryoutData.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BookOpen className="h-4 w-4" />
            <span>{tryoutData.category}</span>
          </div>
        </div>
      </div>
      
      {/* Timer and progress (shown when tryout is started) */}
      {isStarted && !isFinished && (
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6 sticky top-20 z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className={cn(
                "h-5 w-5",
                timeLeft < 300 ? "text-red-600 animate-pulse" : "text-blue-600"
              )} />
              <span className={cn(
                "font-medium",
                timeLeft < 300 ? "text-red-600" : ""
              )}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Soal: {currentQuestion + 1}/{tryoutData.totalQuestions}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600">Progres:</div>
                <div className="w-32">
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="text-sm font-medium">{progress}%</div>
              </div>
            </div>
            <div>
              <Button variant="outline" onClick={finishTryout}>
                Selesai
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
          <TabsTrigger value="overview" disabled={isStarted && !isFinished}>Ikhtisar</TabsTrigger>
          <TabsTrigger value="questions" disabled={!isStarted || isFinished}>Soal</TabsTrigger>
          <TabsTrigger value="results" disabled={!isFinished}>Hasil</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Tryout</CardTitle>
              <CardDescription>Detail dan instruksi untuk tryout ini</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Detail Tryout</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi</span>
                      <span className="font-medium">{tryoutData.duration} menit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jumlah Soal</span>
                      <span className="font-medium">{tryoutData.totalQuestions} soal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tingkat Kesulitan</span>
                      <Badge className={cn(
                        tryoutData.difficulty === 'Mudah' ? 'bg-green-100 text-green-800' :
                        tryoutData.difficulty === 'Sedang' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      )}>
                        {tryoutData.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Bagian Tryout</h3>
                  <div className="space-y-3">
                    {tryoutData.sections.map((section, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{section.name}</span>
                        <span className="font-medium">{section.questions} soal ({section.time} menit)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-3">Deskripsi</h3>
                <p className="text-gray-700">{tryoutData.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Instruksi</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {tryoutData.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                <AlertCircle className="text-blue-600 h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Catatan Penting</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Pastikan Anda memiliki koneksi internet yang stabil dan tidak meninggalkan halaman tryout. 
                    Jika terjadi masalah teknis, progres Anda akan disimpan secara otomatis.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={startTryout} className="w-full">
                Mulai Tryout
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Questions Tab */}
        <TabsContent value="questions" className="space-y-6">
          {isStarted && !isFinished && question && (
            <Card>
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {question.section}
                    </Badge>
                    <div className="text-sm text-gray-500">
                      Soal {currentQuestion + 1} dari {tryoutData.totalQuestions}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFlagged(question.id)}
                    className={cn(
                      "flex items-center gap-1",
                      flaggedQuestions.includes(question.id) ? "text-yellow-600" : "text-gray-500"
                    )}
                  >
                    <Flag className="h-4 w-4" />
                    {flaggedQuestions.includes(question.id) ? "Ditandai" : "Tandai"}
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-lg font-medium">{question.text}</div>
                  
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                          answers[question.id] === option.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/50"
                        )}
                        onClick={() => handleAnswer(question.id, option.id)}
                      >
                        <div className={cn(
                          "flex items-center justify-center h-6 w-6 rounded-full border text-sm font-medium",
                          answers[question.id] === option.id
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-gray-300 text-gray-700"
                        )}>
                          {option.id}
                        </div>
                        <div>{option.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Sebelumnya
                </Button>
                
                <Button
                  variant={currentQuestion === tryoutData.questions.length - 1 ? "default" : "outline"}
                  onClick={currentQuestion === tryoutData.questions.length - 1 ? finishTryout : nextQuestion}
                >
                  {currentQuestion === tryoutData.questions.length - 1 ? "Selesai" : "Selanjutnya"}
                  {currentQuestion === tryoutData.questions.length - 1 ? null : <ChevronRight className="h-4 w-4 ml-2" />}
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Question Navigator */}
          <Card>
            <CardHeader>
              <CardTitle>Navigasi Soal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-10 gap-2">
                {Array.from({ length: tryoutData.totalQuestions }).map((_, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "h-10 w-10 p-0",
                      currentQuestion === index && "ring-2 ring-blue-500",
                      answers[tryoutData.questions[index]?.id] && "bg-blue-100 border-blue-300",
                      flaggedQuestions.includes(tryoutData.questions[index]?.id) && "!border-yellow-400"
                    )}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-blue-100 border border-blue-300 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Terjawab</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 border border-yellow-400 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Ditandai</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 border border-gray-300 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Belum dijawab</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <div className="w-full flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {Object.keys(answers).length} dari {tryoutData.totalQuestions} soal terjawab
                </div>
                <Button variant="outline" onClick={finishTryout}>
                  <Save className="h-4 w-4 mr-2" />
                  Simpan & Selesai
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Results Tab */}
        <TabsContent value="results" className="space-y-6">
          {isFinished && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Hasil Tryout</CardTitle>
                  <CardDescription>Ringkasan hasil tryout Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="text-5xl font-bold text-blue-600 mb-2">720</div>
                      <div className="text-gray-600">Skor Total</div>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {Object.keys(answers).length}/{tryoutData.totalQuestions}
                      </div>
                      <div className="text-gray-600">Soal Terjawab</div>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        65%
                      </div>
                      <div className="text-gray-600">Persentil</div>
                    </div>
                  </div>
                  
                  {/* Section Scores */}
                  <div>
                    <h3 className="font-semibold mb-4">Skor Per Bagian</h3>
                    <div className="space-y-4">
                      {tryoutData.sections.map((section, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{section.name}</span>
                            <span className="text-sm font-medium">{680 + index * 20}</span>
                          </div>
                          <Progress value={65 + index * 5} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Strengths & Weaknesses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Kekuatan</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Penalaran Matematika - Aljabar</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Literasi Bahasa Indonesia - Pemahaman Teks</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Kelemahan</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-4 w-4" />
                          <span>Penalaran Matematika - Geometri</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-600">
                          <XCircle className="h-4 w-4" />
                          <span>Penalaran Umum - Analisis Argumen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <div className="w-full flex justify-between">
                    <Button variant="outline">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Lihat Pembahasan
                    </Button>
                    <Button>
                      <BarChart2 className="h-4 w-4 mr-2" />
                      Analisis Detail
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Rekomendasi Belajar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <h3 className="font-semibold text-yellow-800 mb-2">Fokus pada Geometri</h3>
                      <p className="text-yellow-700 text-sm">
                        Berdasarkan hasil tryout, Anda perlu meningkatkan pemahaman tentang konsep geometri. 
                        Kami merekomendasikan untuk mempelajari materi berikut:
                      </p>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Button variant="outline" className="bg-white border-yellow-200 text-yellow-800 justify-start">
                          <BookOpen className="h-4 w-4 mr-2 text-yellow-600" />
                          Materi Geometri Dasar
                        </Button>
                        <Button variant="outline" className="bg-white border-yellow-200 text-yellow-800 justify-start">
                          <BookOpen className="h-4 w-4 mr-2 text-yellow-600" />
                          Latihan Soal Geometri
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h3 className="font-semibold text-blue-800 mb-2">Tryout Berikutnya</h3>
                      <p className="text-blue-700 text-sm">
                        Untuk melihat perkembangan Anda, kami sarankan untuk mengambil tryout berikutnya dalam 3-5 hari.
                      </p>
                      <div className="mt-3">
                        <Button variant="outline" className="bg-white border-blue-200 text-blue-800">
                          Jadwalkan Tryout Berikutnya
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
} 