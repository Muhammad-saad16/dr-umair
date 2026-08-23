'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Moon } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type FaqEntry = {
  keywords: string[]
  answer: string
}

const WELCOME_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    "As-salamu alaykum! Main Noor hun, is website ka assistant. Neeche diye gaye buttons se poochein ya apna sawal type karein — Dr. Umair Mahmood Siddiqui ki biography, kitabein, lectures, events ya contact ke baare mein.",
}

const QUICK_REPLIES: { label: string; question: string }[] = [
  { label: 'Biography', question: 'Dr. Umair kaun hain?' },
  { label: 'Books', question: 'Kitabein kahan milengi?' },
  { label: 'Events', question: 'Events aur programs kahan dekhein?' },
  { label: 'Videos', question: 'Videos aur clips kahan dekhein?' },
  { label: 'Contact', question: 'Dr. Umair se contact kaise karein?' },
]

const FAQS: FaqEntry[] = [
  {
    keywords: ['salam', 'assalam', 'hello', 'hi', 'hey'],
    answer:
      "Wa alaikum salam! Main Noor hun, is website ka assistant. Main aapki biography, books, events, videos ya contact info dhoondne mein madad kar sakta hun — kya jaanna chahenge?",
  },
  {
    keywords: [
      'biography', 'bio', 'kaun hai', 'kaun hain', 'about', 'professor',
      'credential', 'zindagi', 'tareef', 'education', 'university', 'career',
    ],
    answer:
      'Dr. Umair Mahmood Siddiqui ek internationally renowned Islamic scholar hain aur University of Karachi ke Department of Islamic Studies mein Professor of Comparative Study of Religions hain.\n\n' +
      '• Associate Professor, Department of Islamic Learning, University of Karachi\n' +
      '• Researcher, International Islamic Fiqh Academy (OIC), Jeddah\n' +
      '• Honorary Chairman / Patron-in-Chief, City of Knowledge Islamic Research Institute\n' +
      '• Former Member, Council of Islamic Ideology, Federal Ministry of Law, Pakistan\n\n' +
      'Unhon ne fiqh, comparative religion aur Islamic history par kaafi kitabein likhi hain, aur Parliament of Canada mein bhi keynote speech de chuke hain.\n\n' +
      'Poori biography ke liye "Biography" page dekhein.',
  },
  {
    keywords: ['book', 'books', 'kitab', 'kitaab', 'publication', 'publications', 'pdf', 'download', 'library'],
    answer:
      'Dr. Umair Mahmood Siddiqui ki tamam kitabein "Publications" page par mojood hain — jaise "40 Ahadith for Kids", "Tazkira", "Sheikh Ibn Arabi", "Muhammad: The Glory of the Ages", "Islamic Jurisprudence" aur bohat sari aur. Har kitab wahan se view/download ki ja sakti hai, aur search bar se dhoond bhi sakte hain.',
  },
  {
    keywords: ['event', 'events', 'program', 'programs', 'lecture', 'dars', 'khutba', 'jumma', 'sermon', 'conference'],
    answer:
      'Dr. Umair ke lectures, Friday sermons (Khutbah), Dars-e-Quran sessions aur conferences ki updates "Events & Programs" page par milti hain, posters ke sath.',
  },
  {
    keywords: ['video', 'videos', 'clip', 'clips', 'youtube', 'watch', 'dekh'],
    answer:
      'Lecture clips, Friday sermons aur event highlights "Clips & Videos" page par category-wise mil jayenge, ya seedha YouTube channel "@DrUmairMahmoodSiddiqui" par bhi dekh sakte hain.',
  },
  {
    keywords: ['gallery', 'photo', 'photos', 'tasveer', 'images', 'picture'],
    answer: 'Events aur programs ki tasveerein "Gallery" page par mojood hain.',
  },
  {
    keywords: [
      'contact', 'whatsapp', 'phone', 'number', 'email', 'raabta', 'sampark',
      'message', 'call', 'reach', 'address',
    ],
    answer:
      'Dr. Umair Mahmood Siddiqui se contact karne ke tareeqe:\n\n' +
      '• WhatsApp button (har page ke bottom-right corner mein)\n' +
      '• Phone: +92 310 2083355 / +92 300 9221167\n' +
      '• Email: Btml432@gmail.com\n' +
      '• "Contact / Ask Dr. Umair" page ka message form\n\n' +
      'Formal sawal ya ruling ke liye seedha inhi tareeqon se raabta karein.',
  },
  {
    keywords: ['facebook', 'social', 'insta', 'instagram', 'channel'],
    answer:
      'Facebook: facebook.com/DrUmairMahmoodSiddiqui\nYouTube: youtube.com/@DrUmairMahmoodSiddiqui\nWebsite: www.drumairsiddiqui.com',
  },
  {
    keywords: ['fatwa', 'fiqh', 'masla', 'masail', 'ruling', 'halal', 'haram'],
    answer:
      'Is tarah ke sawalat ke liye main authoritative jawab nahi de sakta — behtar hoga aap Dr. Umair Mahmood Siddiqui ke lectures/kitabein dekhein ya "Contact / Ask Dr. Umair" page/WhatsApp ke zariye seedha unse raabta karein.',
  },
]

function matchFaq(input: string): string {
  const normalized = input.toLowerCase()
  let best: { entry: FaqEntry; score: number } | null = null

  for (const entry of FAQS) {
    const score = entry.keywords.filter((k) => normalized.includes(k)).length
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score }
    }
  }

  return (
    best?.entry.answer ??
    'Maazrat, mujhe iska seedha jawab nahi pata. Aap "Biography", "Books", "Events", "Videos" ya "Contact" try karein, ya seedha WhatsApp button se Dr. Umair se raabta karein.'
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isOpen])

  const ask = (question: string) => {
    const text = question.trim()
    if (!text) return
    const answer = matchFaq(text)
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text },
      { role: 'assistant', content: answer },
    ])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      ask(input)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-amber-400/20 bg-[#05445E]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-gradient-to-r from-[#05445E] to-[#189AB4] border-b border-amber-400/20">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-amber-400/20 flex items-center justify-center">
                <Moon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">Noor</p>
                <p className="text-white/60 text-xs leading-tight">Website Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-[#05445E] to-[#0a3a4e]"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-amber-400 text-gray-900 rounded-br-sm'
                      : 'bg-white/10 text-white border border-white/10 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.label}
                  onClick={() => ask(q.question)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-amber-400 hover:text-gray-900 text-white border border-white/20 transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-white/10 bg-[#05445E]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={() => ask(input)}
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/40 flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4 text-gray-900" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-amber-900/40 hover:shadow-amber-900/60 hover:scale-110 transition-all duration-300 bg-gradient-to-br from-amber-400 to-amber-600"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </>
  )
}
