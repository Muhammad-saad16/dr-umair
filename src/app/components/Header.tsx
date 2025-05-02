'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'
// import banner from '../../../Public/new-banner1.jpg'
// import { routes } from "../lib/routes"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
  
//   return (
//     <header className="relative">
//       {/* Background with gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#05445E] to-[#189AB4] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-[#05445E] to-[#189AB4] overflow-hidden"
//           style={{
//             backgroundImage: "url('/path-to-your-svg-file.svg')",
//           }}
//         />
//       </div>

//       <div className="relative">
//         {/* Banner */}
//         <div>
//           <Image src={banner} alt="banner" width={1920} height={100} />
//         </div>

//         {/* Navigation */}
//         <nav className="bg-[#05445E]/30 backdrop-blur-sm sticky">
//           <div className="container mx-auto px-4">
//             {/* Mobile Menu Button */}
//             <div className="md:hidden py-4">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white hover:text-amber-400 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <ul
//               className={`
//               ${isMenuOpen ? "block" : "hidden"} 
//               md:flex md:justify-center md:items-center md:space-x-8 
//               py-4 text-center
//             `}
//             >
//               {routes.map((route) => (
//                 <li key={route.path}>
//                   <Link
//                     href={route.path}
//                     className="
//                       text-white hover:text-amber-400 
//                       transition-colors duration-200 
//                       text-sm font-medium  /* <-- Applied text-sm */
//                       px-4 py-2 
//                       inline-block
//                       border-b-2 border-transparent hover:border-amber-400
//                     "
//                   >
//                     {route.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }


import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import banner from '../../../Public/new-banner1.jpg'
import { routes } from "../lib/routes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05445E] to-[#189AB4] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#05445E] to-[#189AB4] overflow-hidden"
          style={{
            backgroundImage: "url('/path-to-your-svg-file.svg')",
          }}
        />
      </div>

      <div className="relative">
        {/* Banner with Logo */}
        <div className="flex items-center justify-between px-6 py-2 bg-[#05445E]/50">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png" // Place your logo inside /public folder
              alt="My Logo"
              width={100}
              height={50}
              className="rounded-md"
            />
            <span className="text-white text-lg font-bold">My Website</span>
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <Image src={banner} alt="banner" width={1920} height={100} />
        </div>

        {/* Navigation */}
        <nav className="bg-[#05445E]/30 backdrop-blur-sm sticky">
          <div className="container mx-auto px-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden py-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-amber-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <ul
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex md:justify-center md:items-center md:space-x-8 py-4 text-center`}
            >
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="
                      text-white hover:text-amber-400 
                      transition-colors duration-200 
                      text-sm font-medium 
                      px-4 py-2 
                      inline-block
                      border-b-2 border-transparent hover:border-amber-400
                    "
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
