import { notFound } from 'next/navigation'
import { getQuestionById, getQuestionCategoryBySlug } from '@/lib/data'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import AppCTA from '@/components/AppCTA'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const question = await getQuestionById(params.id)
  
  if (!question) {
    return {}
  }

  return {
    title: `${question.year}年 第${question.questionNumber}問 | ${question.question.substring(0, 50)}...`,
    description: question.explanation.substring(0, 160),
  }
}

export default async function QuestionDetailPage({ params }: PageProps) {
  const question = await getQuestionById(params.id)
  const category = await getQuestionCategoryBySlug(params.slug)

  if (!question || !category) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-primary-600 hover:underline">
          ホーム
        </Link>
        {' > '}
        <Link href={`/questions/${params.slug}`} className="text-primary-600 hover:underline">
          {category.name}
        </Link>
        {' > '}
        <span className="text-gray-600">問題詳細</span>
      </nav>

      {/* 問題ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded text-sm font-semibold">
            {question.year}年
          </span>
          <span className="text-gray-600">第{question.questionNumber}問</span>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">{question.question}</h1>
      </div>

      {/* AdSense */}
      <div className="mb-8">
        <AdUnit slot="1234567890" style={{ minHeight: '100px' }} />
      </div>

      {/* 選択肢 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">選択肢</h2>
        <div className="space-y-3">
          {question.choices.map((choice, index) => (
            <div
              key={index}
              className={`p-4 border-2 rounded-lg ${
                index === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start">
                <span className="font-semibold mr-3 text-gray-700">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-gray-900">{choice}</span>
                {index === question.correctAnswer && (
                  <span className="ml-auto px-2 py-1 bg-green-500 text-white text-sm rounded">
                    正解
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 解説 */}
      <div className="mb-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">解説</h2>
        <p className="text-gray-800 leading-relaxed">{question.explanation}</p>
      </div>

      {/* タグ */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <Link
              key={tag}
              href={`/questions?tag=${tag}`}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* ナビゲーション */}
      <div className="flex justify-between items-center mb-8 pt-8 border-t">
        <Link
          href={`/questions/${params.slug}`}
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← 一覧に戻る
        </Link>
        <div className="text-sm text-gray-600">
          他の問題も見る
        </div>
      </div>

      {/* アプリCTA */}
      <AppCTA />
    </div>
  )
}

