// import Layout from '../components/Layout'
import Image from 'next/image'
import dr from '../../../Public/dr-1.jpg'
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
            Dr. Umair&apos;s scholarship emphasizes a balance between Islamic orthodoxy and modernity. He advocates for a nuanced understanding of Islamic principles that remains firmly rooted in the Quran and the Prophetic traditions. His work addresses critical social and legislative matters, reflecting both his academic rigor and his commitment to societal betterment.
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
       Dr. Umair Mahmood Siddiqui is an esteemed Islamic scholar of international renown and a Professor of Comparative Study of Religions in the Department of Islamic Studies at the University of Karachi, Pakistan. He has served as a member of the Council of islamic ideclogy under Pakistan&apos;s Federal Ministry of Law, where he provided invaluable guidance on legislative matters at both provincial and federal levels. He also serves as the Patron-in-Chief of City of Knowledge, a prominent research institute. 
      </p>
      <p>
        Dr. Umair actively represents Pakistan at conferences and seminars organized by the International Islamic Fiqh Academy, a subsidiary body of the Organization of islamic Cooperation (OIC). He has authored numerous books and scholarly articles covering theology, comparative religion, Islamic jurisprudence, law, and Islamic history. His recent book, The Prohibition of Declaring a Muslim as an Infidel, has garnered significant acclaim Among his most notable literary contributions is his magnum opus on ibn al-Arabi, his Concept of Prophethood, and the Belief in the Finality of Prophethood. Eschewing both religious radicalism and secular extremism, Dr. Umair advocates for a balanced approach he calls dynamic orthodoxy, which is firmly rooted in the Quran and the Seerah of the Prophet Muhammad (peace be upon him). 
      </p>
      <p>
      He is particularly distinguished for his in-depth research on Pakistan&apos;s ideology and his doctoral thesis, which examines the historical context, underlying couses, and islamic legal rulings on suicide attacks. in addition to his scholarly and research pursuits, Dr Umair frequently appears on television, offering expert insights on contemporary issues through the lens of Quranic teachings.
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




