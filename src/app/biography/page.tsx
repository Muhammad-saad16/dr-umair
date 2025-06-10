// import Layout from '../components/Layout'
import Image from 'next/image'
import dr from '../../../Public/dr.jpg'
export default function AboutPage() {
  return (
    // <Layout>
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-center text-white"> Dr. Umair Mahmood Siddiqui</h1>
          
          <div className="mb-12 relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={dr}
              alt="Scholar giving a lecture"
              fill
              className="object-cover"
            />
          </div>
          
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-400">Our Mission</h2>
            <p className="text-white mb-6">
            Our mission is to promote authentic Islamic scholarship and provide insightful guidance on the complexities of modern life through the lens of Quranic teachings and the Prophet's Seerah. We aim to bridge the gap between traditional Islamic values and contemporary challenges, fostering a balanced and enlightened understanding of our faith.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-amber-400">The Scholar's Journey</h2>
            <p className="text-white mb-6">
            Dr. Umair Mahmood Siddiqui is a globally respected Islamic scholar with decades of experience in teaching, research, and academic leadership. He has devoted his life to advancing Islamic knowledge and addressing contemporary issues through a dynamic and principled approach.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-amber-400">Our Approach</h2>
            <p className="text-white">
            Dr. Umair's scholarship emphasizes a balance between Islamic orthodoxy and modernity. He advocates for a nuanced understanding of Islamic principles that remains firmly rooted in the Quran and the Prophetic traditions. His work addresses critical social and legislative matters, reflecting both his academic rigor and his commitment to societal betterment.
            </p>
          </div> */}
          {/* New Biography Section */}
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4">
  <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-4xl w-full">
    <h2 className="text-3xl font-semibold mb-6 text-amber-400 flex items-center justify-center border-b border-amber-400 pb-2">
      Biography
    </h2>
    <div className="space-y-6 text-white text-lg leading-relaxed">
      <p>
        Dr. Umair Mahmood Siddiqui is a globally respected Islamic scholar, renowned for his academic contributions and dedication to the dissemination of authentic Islamic knowledge. Born and raised in Karachi, Pakistan, he has become an authoritative voice on critical issues affecting the Muslim world.
      </p>
      <p>
        Dr. Umair&apos;s academic journey includes his role as a Professor of Comparative Study of Religions in the Department of Islamic Studies at the University of Karachi. His notable service includes being a member of the Council of Islamic Ideology under Pakistan&apos;s Federal Ministry of Law, where he provided crucial guidance on legislative matters.
      </p>
      <p>
        In addition to his academic endeavors, Dr. Umair actively represents Pakistan at international conferences and seminars organized by the International Islamic Fiqh Academy, a subsidiary body of the Organization of Islamic Cooperation (OIC). He also serves as the Patron-in-Chief of the City of Knowledge, a premier research institute.
      </p>
      <p>
        Dr. Umair has authored numerous books and articles covering theology, comparative religion, Islamic jurisprudence, and history. Among his notable works are <em>The Prohibition of Declaring a Muslim as an Infidel</em> and a seminal study on <em>Ibn al-Arabi, his Concept of Prophethood, and the Belief in the Finality of Prophethood</em>. His doctoral research on the historical and legal dimensions of suicide attacks underscores his impactful scholarship.
      </p>
      <p>
        Today, Dr. Umair continues to write, teach, and provide guidance, advocating for a balanced and enlightened approach to Islam that bridges the gap between traditional values and contemporary challenges. His unwavering commitment to spreading authentic Islamic knowledge and fostering mutual understanding remains a source of inspiration for Muslims worldwide.
      </p>
    </div>
  </div>
</div>
{/* 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Education</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>Bachelor's in Islamic Studies, University of Karachi</li>
                <li>Master's in Comparative Study of Religions, University of Karachi</li>
                <li>PhD in Islamic Jurisprudence, University of Karachi</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Areas of Expertise</h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>Islamic Jurisprudence (Fiqh)</li>
                <li>Comparative Religion</li>
                <li>Islamic Theology and Philosophy</li>
                <li>History of Islam</li>
              </ul>
            </div>
          </div> */}

 
        </div>
      </div>
    // </Layout>
  )
}

