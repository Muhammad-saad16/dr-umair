"use client"

export default function Footer() {
  return (
    <footer className="bg-[#05445E] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Dr Umair Mehmood Siddiqui. All rights reserved.</p>
      </div>
    </footer>
  )
}
