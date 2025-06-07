import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Send, Bot, User, RefreshCw, Sparkles, Paperclip, ThumbsUp, ThumbsDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Halo! Saya EduBot, asisten AI yang siap membantu kamu dalam persiapan UTBK-SNBT. Apa yang ingin kamu tanyakan hari ini?',
    role: 'assistant',
    timestamp: new Date()
  }
]

const suggestedQuestions = [
  "Bagaimana cara efektif belajar untuk UTBK-SNBT?",
  "Apa saja materi yang perlu dipelajari untuk TPS?",
  "Berapa passing grade jurusan kedokteran UI?",
  "Bagaimana tips mengerjakan soal literasi dalam Bahasa Inggris?",
  "Tolong berikan materi tentang Penalaran Matematika",
  "Saya butuh materi untuk Literasi Bahasa Indonesia"
]

// Helper function to convert links in text to actual links or material cards
const formatMessageWithLinks = (text: string) => {
  // Match [text](url) format
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    
    // Check if it's a course material link
    if (linkUrl.includes('/course/')) {
      const materialType = linkUrl.split('/').pop() || '';
      
      // Define material-specific information
      const materialInfo: Record<string, {icon: React.ReactNode, bgClass: string, textClass: string, description: string}> = {
        'penalaran-matematika': {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M14 4h.01"></path><path d="M14 20h.01"></path><path d="M18 4h.01"></path><path d="M18 20h.01"></path><path d="M22 4h.01"></path><path d="M22 20h.01"></path></svg>,
          bgClass: "bg-purple-100 dark:bg-purple-900/30",
          textClass: "text-purple-600 dark:text-purple-300",
          description: "45+ latihan soal • 5 video pembelajaran"
        },
        'literasi-bahasa-indonesia': {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>,
          bgClass: "bg-blue-100 dark:bg-blue-900/30",
          textClass: "text-blue-600 dark:text-blue-300",
          description: "30+ contoh teks • Panduan praktis"
        },
        'default': {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v6.5"></path><path d="M18.5 12H22"></path><path d="M12 22v-6.5"></path><path d="M8 12H2"></path><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10"></path><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10"></path></svg>,
          bgClass: "bg-green-100 dark:bg-green-900/30",
          textClass: "text-green-600 dark:text-green-300",
          description: "Materi lengkap • Latihan soal"
        }
      };
      
      const info = materialInfo[materialType] || materialInfo['default'];
      
      parts.push(
        <Link 
          key={match.index} 
          to={linkUrl} 
          className="block mt-3 mb-3"
        >
          <div className="flex items-start gap-4 p-4 rounded-lg border border-blue-100 bg-white hover:bg-blue-50 transition-colors dark:bg-gray-800 dark:border-blue-900/30 dark:hover:bg-gray-700/70 shadow-sm hover:shadow-md">
            <div className={`${info.bgClass} ${info.textClass} p-2 rounded-lg`}>
              {info.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-blue-600 dark:text-blue-400">{linkText}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                {info.description}
              </div>
            </div>
            <div className="text-blue-600 dark:text-blue-400 self-center bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        </Link>
      );
    } else {
      // Regular link
      parts.push(
        <Link 
          key={match.index} 
          to={linkUrl} 
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          {linkText}
        </Link>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  const handleSend = () => {
    if (input.trim() === '') return
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(input),
        role: 'assistant',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1500)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }
  
  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    handleSend()
  }
  
  // Simple response generator for demo purposes
  const generateResponse = (query: string): string => {
    if (query.toLowerCase().includes('belajar') || query.toLowerCase().includes('efektif')) {
      return 'Untuk belajar UTBK-SNBT secara efektif, kamu bisa:\n\n1. Buat jadwal belajar yang terstruktur\n2. Fokus pada pemahaman konsep, bukan hanya menghafal\n3. Latihan soal secara rutin dan analisis kesalahan\n4. Bergabung dengan kelompok belajar\n5. Gunakan metode Pomodoro (25 menit belajar, 5 menit istirahat)\n\nDi EduBot, kami menyediakan materi terstruktur dan latihan soal yang bisa kamu akses kapan saja.'
    } else if (query.toLowerCase().includes('tps') || (query.toLowerCase().includes('materi') && !query.toLowerCase().includes('penalaran') && !query.toLowerCase().includes('literasi'))) {
      return 'Materi untuk TPS (Tes Potensi Skolastik) meliputi:\n\n- Kemampuan Penalaran Umum\n- Pengetahuan Kuantitatif\n- Literasi dalam Bahasa Indonesia\n- Literasi dalam Bahasa Inggris\n\nSetiap bagian memiliki karakteristik dan strategi khusus dalam pengerjaannya. Kamu bisa mempelajari materi-materi tersebut di bagian "Materi" di website EduBot SNBT.'
    } else if (query.toLowerCase().includes('passing grade') || query.toLowerCase().includes('kedokteran')) {
      return 'Passing grade jurusan Kedokteran UI berkisar antara 700-750 (dari skala 1000). Namun perlu diingat bahwa passing grade bisa berubah setiap tahunnya tergantung pada tingkat persaingan. Untuk masuk kedokteran, kamu perlu mempersiapkan diri dengan sangat baik, terutama untuk mata pelajaran IPA seperti Biologi, Kimia, dan Fisika.'
    } else if (query.toLowerCase().includes('literasi') && query.toLowerCase().includes('bahasa inggris')) {
      return 'Tips mengerjakan soal Literasi Bahasa Inggris:\n\n1. Perbanyak membaca artikel berbahasa Inggris untuk meningkatkan vocabulary\n2. Pahami struktur teks dan identifikasi ide pokok\n3. Latihan soal reading comprehension secara rutin\n4. Pelajari teknik skimming dan scanning untuk efisiensi waktu\n5. Perhatikan kata kunci dalam pertanyaan\n\nKamu bisa mencoba latihan soal Literasi Bahasa Inggris di bagian "Tryout" kami.'
    } else if (query.toLowerCase().includes('penalaran matematika')) {
      return 'Berikut adalah materi Penalaran Matematika yang bisa kamu pelajari:\n\nPenalaran Matematika adalah kemampuan untuk menganalisis informasi kuantitatif dan menerapkan prinsip-prinsip matematika untuk menyelesaikan masalah.\n\nTopik yang dibahas meliputi:\n• Aljabar dasar dan fungsi\n• Geometri dan pengukuran\n• Statistika dan probabilitas\n• Logika matematika\n\n[Materi Penalaran Matematika](/course/penalaran-matematika)\n\nMateri ini mencakup 45+ latihan soal dan 5 video pembelajaran yang akan membantu kamu menguasai konsep-konsep penting. Apakah kamu ingin mempelajari topik tertentu dalam Penalaran Matematika?'
    } else if (query.toLowerCase().includes('literasi bahasa indonesia')) {
      return 'Berikut adalah materi Literasi Bahasa Indonesia yang bisa kamu pelajari:\n\nLiterasi Bahasa Indonesia dalam UTBK-SNBT mengukur kemampuan kamu dalam memahami, menganalisis, dan menggunakan informasi dari teks berbahasa Indonesia.\n\nTopik yang dibahas meliputi:\n• Memahami informasi tersurat dan tersirat\n• Mengidentifikasi ide pokok dan pendukung\n• Menganalisis struktur teks\n• Memahami hubungan antar gagasan\n\n[Materi Literasi Bahasa Indonesia](/course/literasi-bahasa-indonesia)\n\nMateri ini dilengkapi dengan 30+ contoh teks beserta analisisnya dan panduan praktis untuk menghadapi soal-soal literasi. Apakah kamu ingin latihan soal untuk topik ini?'
    } else {
      return 'Terima kasih atas pertanyaanmu. Sebagai asisten AI untuk persiapan UTBK-SNBT, saya bisa membantumu dengan berbagai informasi seputar persiapan ujian, materi pembelajaran, strategi belajar, dan informasi perguruan tinggi. Silakan tanyakan hal spesifik yang ingin kamu ketahui tentang UTBK-SNBT.'
    }
  }
  
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Chatbot EduBot SNBT</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Asisten AI untuk membantu persiapan UTBK-SNBT kamu. Tanyakan apa saja seputar materi, strategi belajar, atau informasi perguruan tinggi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-blue-100 dark:border-blue-900/30">
              <CardHeader className="bg-blue-50/50 dark:bg-blue-900/10 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 bg-blue-600">
                    <Bot className="text-white h-5 w-5" />
                    <AvatarFallback>EB</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">EduBot SNBT</CardTitle>
                    <CardDescription>Asisten AI persiapan UTBK-SNBT</CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-auto flex items-center gap-1 border-green-500 text-green-600 dark:text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Online
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex w-max max-w-[90%] flex-col gap-2 rounded-lg px-4 py-3",
                        message.role === "user"
                          ? "ml-auto bg-blue-600 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {message.role === "assistant" ? (
                          <Avatar className="h-6 w-6 bg-blue-600">
                            <Bot className="text-white h-4 w-4" />
                            <AvatarFallback>EB</AvatarFallback>
                          </Avatar>
                        ) : (
                          <Avatar className="h-6 w-6 bg-gray-600">
                            <User className="text-white h-4 w-4" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        )}
                        <span className="text-xs font-medium">
                          {message.role === "user" ? "Kamu" : "EduBot"}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className={cn(
                        "whitespace-pre-line text-sm",
                        message.content.includes('[Materi') && "w-full"
                      )}>
                        {formatMessageWithLinks(message.content)}
                      </div>
                      
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-2 self-end mt-1">
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <ThumbsUp className="h-4 w-4" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <ThumbsDown className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex w-max max-w-[85%] flex-col gap-2 rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 bg-blue-600">
                          <Bot className="text-white h-4 w-4" />
                          <AvatarFallback>EB</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">EduBot</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Sedang mengetik...</span>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center space-x-2">
                  <Button variant="outline" size="icon" className="shrink-0 h-10 w-10">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tulis pesan..."
                    className="min-h-10 flex-1 resize-none py-2.5"
                  />
                  <Button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="shrink-0 h-10 px-4">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="suggested">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="suggested">Saran</TabsTrigger>
                <TabsTrigger value="history">Riwayat</TabsTrigger>
              </TabsList>
              <TabsContent value="suggested" className="mt-4 space-y-4">
                <div className="text-sm font-medium">Pertanyaan Populer</div>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal flex items-start gap-2"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      <Sparkles className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{question}</span>
                    </Button>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-sm font-medium">Tips Penggunaan</div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>• Tanyakan soal materi UTBK-SNBT</p>
                  <p>• Minta tips belajar efektif</p>
                  <p>• Tanyakan informasi jurusan & kampus</p>
                  <p>• Minta bantuan untuk latihan soal</p>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="mt-4">
                <div className="text-sm font-medium mb-4">Riwayat Percakapan</div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2 px-3 flex flex-col items-start">
                    <div className="font-medium">Persiapan UTBK-SNBT</div>
                    <div className="text-xs text-gray-500">Hari ini, 10:30</div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2 px-3 flex flex-col items-start">
                    <div className="font-medium">Tips Soal Matematika</div>
                    <div className="text-xs text-gray-500">Kemarin, 15:45</div>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-2 px-3 flex flex-col items-start">
                    <div className="font-medium">Informasi Jurusan Teknik</div>
                    <div className="text-xs text-gray-500">3 hari lalu</div>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

