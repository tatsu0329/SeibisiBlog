import type { Metadata } from 'next'
import AppCTA from '@/components/AppCTA'

export const metadata: Metadata = {
  title: 'このサイトについて',
  description: '自動車整備士過去問・解説サイトの運営方針と目的について説明します。',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">このサイトについて</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">サイトの目的</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サイトは、資格試験（自動車整備士など）の過去問・解説を無料で提供し、
            検索流入を最大化する「集客装置」として機能させることを目的としています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            ブログ単体での広告収益を狙うのではなく、
            自社iOSアプリ／自社Webアプリへの送客を主目的とし、
            長期的・安定的な事業収益につなげます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">コンテンツの特徴</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>年度別・級別・分野別の過去問をWeb上に掲載</li>
            <li>検索ニーズが安定しており、長期的にPVを生み続ける</li>
            <li>ロングテール検索（例：「2級自動車整備士 ガソリン 過去問」）を大量に獲得</li>
            <li>過去問の解説記事、勉強方法・対策記事、出題傾向まとめ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">収益モデル</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="text-gray-900">ブログ（AdSense）:</strong> 安定した補助収益
              </li>
              <li>
                <strong className="text-gray-900">ブログ（SEO）:</strong> 集客・信頼獲得
              </li>
              <li>
                <strong className="text-gray-900">Webクイズ:</strong> 体験価値提供
              </li>
              <li>
                <strong className="text-gray-900">iOSアプリ:</strong> 本命の売上・継続課金
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">お問い合わせ</h2>
          <p className="text-gray-700">
            お問い合わせは、各ページ下部のフッターからご連絡ください。
          </p>
        </section>

        <AppCTA />
      </div>
    </div>
  )
}

