import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdSense from '@/components/AdSense'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '自動車整備士 過去問・解説 | 無料で学べる資格試験対策',
    template: '%s | 自動車整備士 過去問・解説'
  },
  description: '自動車整備士（1級・2級・3級）の過去問と解説を無料で提供。検索しやすい年度別・級別・分野別の過去問で効率的に学習できます。',
  keywords: ['自動車整備士', '過去問', '資格試験', '1級', '2級', '3級', '無料', '解説'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://seibisiblog.com',
    siteName: '自動車整備士 過去問・解説',
    title: '自動車整備士 過去問・解説 | 無料で学べる資格試験対策',
    description: '自動車整備士の過去問と解説を無料で提供。効率的な学習をサポートします。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <AdSense />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

