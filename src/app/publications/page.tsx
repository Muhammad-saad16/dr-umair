"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import book1 from "../../../Public/book1.jpeg"
import book2 from "../../../Public/book2.jpeg"
import book3 from "../../../Public/book3.jpeg"
import book4 from "../../../Public/book4.jpeg"
import book5 from "../../../Public/book5.jpeg"
import book6 from "../../../Public/book6.jpeg"
import book7 from "../../../Public/book7.jpeg"
import book8 from "../../../Public/book8.jpeg"
import book9 from "../../../Public/book9.jpeg"
import book10 from "../../../Public/book10.jpeg"
import book11 from "../../../Public/book11.jpeg"
import book12 from "../../../Public/book12.jpeg"
import book13 from "../../../Public/book13.jpeg"
import book14 from "../../../Public/book14.jpeg"
import book16 from "../../../Public/book16.jpg"
import book17 from "../../../Public/book17.jpg"

// Define a Book interface for better type safety
interface Book {
  id: number
  title: string
  author: string
  description: string
  image: string
  downloadUrl: string
}

const books: Book[] = [
  {
    id: 1,
    title: "What is Ahmadism?",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "",
    image: book16.src,
    downloadUrl: "https://drive.google.com/file/d/1abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 2,
    title: "40 Ahadith for Kids",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A simplified collection of 40 Ahadith for children.",
    image: book1.src,
    downloadUrl: "https://drive.google.com/file/d/2abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 3,
    title: "Ojhri Khane Ki Sharai Hesiat",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "",
    image: book17.src,
    downloadUrl: "https://drive.google.com/file/d/1ER4oIXQi_nqrSyCFov3v9LSC3bSkR2Ho/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 4,
    title: "The Beacon Light",
    author: "Compiled by Dr. Umair Mahmood Siddiqui",
    description: "A collection of writings of Dr. Umair Mahmood Siddiqui.",
    image: book2.src,
    downloadUrl: "https://drive.google.com/file/d/4abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 5,
    title: "Tazkira",
    author: "Dr. Umair Mahmood Siddiqui",
    description: " Tazkira is a comprehensive source of knowledge exposing Qadianiat through its toxic content.",
    image: book3.src,
    downloadUrl: "https://drive.google.com/file/d/5abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 6,
    title: "Sheikh Ibn Arabi",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An analysis of the life and teachings of Sheikh Ibn Arabi.",
    image: book4.src,
    downloadUrl: "https://drive.google.com/file/d/6abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 7,
    title: "Pakistan Ka Matlab Kya?",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A discourse on the meaning and significance of Pakistan.",
    image: book5.src,
    downloadUrl: "https://drive.google.com/file/d/7abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 8,
    title: "Ghazwa-e-Hind",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A discussion on the concept and implications of Ghazwa-e-Hind.",
    image: book6.src,
    downloadUrl: "https://drive.google.com/file/d/8abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 9,
    title: "Muhammad: The Glory of the Ages",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A tribute to the Prophet Muhammad's (PBUH) life and legacy.",
    image: book7.src,
    downloadUrl: "https://drive.google.com/file/d/9abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 10,
    title: "40 Ahadith",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A curated selection of 40 Ahadith with commentary.",
    image: book8.src,
    downloadUrl: "https://drive.google.com/file/d/10abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 11,
    title: "Communist Challenge to Islam",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An exposition on the conflict between communism and Islam.",
    image: book9.src,
    downloadUrl: "https://drive.google.com/file/d/11abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 12,
    title: "Dr. Fazlur Rahman Ansari",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A biography highlighting Dr. Umair Mahmood Siddiqui's scholarly contributions.",
    image: book10.src,
    downloadUrl: "https://drive.google.com/file/d/12abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 13,
    title: "Islamic Jurisprudence",
    author: "Compiled by Dr. Umair Mahmood Siddiqui",
    description: "A comprehensive guide to Islamic law and its principles.",
    image: book11.src,
    downloadUrl: "https://drive.google.com/file/d/13abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 14,
    title: "Introduction to Islamic Economics",
    author: "Dr. Umair Mahmood Siddiqui",
    description: " ",
    image: book12.src,
    downloadUrl: "https://drive.google.com/file/d/14abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 15,
    title: "Islamic Theology ",
    author: "Dr. Umair Mahmood Siddiqui",
    description: " ",
    image: book13.src,
    downloadUrl: "https://drive.google.com/file/d/15abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
  {
    id: 16,
    title: "Revival of Muslim Thought",
    author: "Dr. Umair Mahmood Siddiqui",
    description: " ",
    image: book14.src,
    downloadUrl: "https://drive.google.com/file/d/16abc123/view?usp=sharing", // Replace with actual Google Drive link
  },
]

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesSearch
    })
    setFilteredBooks(filtered)
  }, [searchTerm])

  const handleDownload = (book: Book) => {
    // For Google Drive links, we'll open them in a new tab
    window.open(book.downloadUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-900 text-white min-h-screen">
      {/* Search and Filter Section */}
      <div
        className={`mb-12 transform transition-all duration-700 delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <input
            type="search"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
          />
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredBooks.map((book, index) => (
          <div
            key={book.id}
            className={`group relative bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => handleDownload(book)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    View PDF
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm line-clamp-3">{book.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                {book.title}
              </h3>
              <p className="text-white/80 text-sm">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center text-white py-12">
          <p className="text-xl">No books found matching your search criteria.</p>
        </div>
      )}
    </div>
  )
}
