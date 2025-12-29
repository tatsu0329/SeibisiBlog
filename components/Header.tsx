'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary-600">
            自動車整備士 過去問
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/questions" className="text-gray-700 hover:text-primary-600">
              過去問一覧
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-primary-600">
              解説記事
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600">
              このサイトについて
            </Link>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/questions"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              過去問一覧
            </Link>
            <Link
              href="/posts"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              解説記事
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              このサイトについて
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

