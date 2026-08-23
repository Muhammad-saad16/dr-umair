import Image from 'next/image'
import {
  GraduationCap,
  BookOpen,
  Landmark,
  Award,
  Facebook,
  Youtube,
  Mail,
  Phone,
  Globe,
} from 'lucide-react'
import headshot from '../../../Public/dr-umair-headshot.png'

const credentials = [
  {
    icon: GraduationCap,
    text: 'Associate Professor, Department of Islamic Learning, University of Karachi, Pakistan',
  },
  {
    icon: BookOpen,
    text: 'Researcher, International Islamic Fiqh Academy (OIC), Jeddah, KSA',
  },
  {
    icon: Award,
    text: 'Honorary Chairman, City of Knowledge Islamic Research Institute',
  },
  {
    icon: Landmark,
    text: 'Former Member, Council of Islamic Ideology, Federal Ministry of Law, Pakistan',
  },
]

const bioParagraphs = [
  "Dr. Umair Mahmood Siddiqui is an esteemed Islamic scholar of international renown and a Professor of Comparative Study of Religions in the Department of Islamic Studies at the University of Karachi, Pakistan. He has served as a member of the Council of Islamic Ideology under Pakistan's Federal Ministry of Law, where he provided invaluable guidance on legislative matters at both provincial and federal levels. He also serves as the Patron-in-Chief of City of Knowledge, a prominent research institute in Karachi.",
  'Dr. Umair actively represents Pakistan at conferences and seminars organized by the International Islamic Fiqh Academy, a subsidiary body of the Organization of Islamic Cooperation (OIC). He has authored numerous books and scholarly articles covering theology, comparative religion, Islamic jurisprudence, law, and Islamic history. His recent book, The Prohibition of Declaring a Muslim as an Infidel, has garnered significant acclaim. Among his most notable literary contributions is his magnum opus on Ibn al-Arabi, his Concept of Prophethood, and the Belief in the Finality of Prophethood. Eschewing both religious radicalism and secular extremism, Dr. Umair advocates for a balanced approach he calls dynamic orthodoxy, which is firmly rooted in the Quran and the Seerah of the Prophet Muhammad (peace be upon him).',
  'He is particularly distinguished for his in-depth doctoral research, which examines the historical context, underlying causes, and Islamic legal rulings on suicide attacks. In addition to his scholarly and research pursuits, Dr. Umair frequently appears on television, offering expert insights on contemporary issues through the lens of Quranic teachings.',
  'He was recently invited to deliver a keynote speech at an international conference held at the Parliament of Canada, where he addressed a distinguished audience of scholars, policymakers, and community leaders.',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center mb-12">
            <div className="relative w-48 h-56 md:w-56 md:h-64 mx-auto md:mx-0 shrink-0">
              <div className="absolute inset-0 bg-amber-400 rounded-2xl transform rotate-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                <Image
                  src={headshot}
                  alt="Dr. Umair Mahmood Siddiqui"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Dr. Umair Mahmood Siddiqui
              </h1>
              <ul className="space-y-2 mb-6">
                {credentials.map(({ icon: Icon, text }, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/90 justify-center md:justify-start"
                  >
                    <Icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-white/90 text-sm">
                <a
                  href="https://www.facebook.com/DrUmairMahmoodSiddiqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  DrUmairMahmoodSiddiqui
                </a>
                <a
                  href="https://www.youtube.com/@DrUmairMahmoodSiddiqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  DrUmairMahmoodSiddiqui
                </a>
                <a
                  href="https://www.drumairsiddiqui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  www.drumairsiddiqui.com
                </a>
                <a
                  href="mailto:Btml432@gmail.com"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Btml432@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  +92 310 2083355 / +92 300 9221167
                </span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 space-y-6">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-white/90 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
