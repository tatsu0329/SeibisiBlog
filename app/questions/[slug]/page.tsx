import { notFound } from 'next/navigation'
import { getQuestionCategoryBySlug, getQuestionsByCategory } from '@/lib/data'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import AppCTA from '@/components/AppCTA'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
  searchParams: {
    year?: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = await getQuestionCategoryBySlug(params.slug)
  
  if (!category) {
    return {}
  }

  return {
    title: `${category.name} 過去問一覧`,
    description: category.description,
  }
}

export default async function QuestionCategoryPage({ params, searchParams }: PageProps) {
  const category = await getQuestionCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  const questions = await getQuestionsByCategory(params.slug, searchParams.year)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {category.name} 過去問
        </h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* 年度フィルター */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">年度で絞り込む</h2>
        <div className="flex flex-wrap gap-2">
          {['2024', '2023', '2022', '2021', '2020'].map((year) => (
            <Link
              key={year}
              href={`/questions/${params.slug}?year=${year}`}
              className={`px-4 py-2 rounded ${
                searchParams.year === year
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {year}年
            </Link>
          ))}
        </div>
      </div>

      {/* AdSense */}
      <div className="mb-8">
        <AdUnit slot="1234567890" style={{ minHeight: '100px' }} />
      </div>

      {/* 過去問一覧 */}
      <div className="space-y-6 mb-8">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div
              key={question.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-500">
                  {question.year}年 第{question.questionNumber}問
                </span>
                <Link
                  href={`/questions/${params.slug}/${question.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  詳細を見る →
                </Link>
              </div>
              <p className="text-gray-900 mb-4">{question.question}</p>
              <div className="flex flex-wrap gap-2">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>このカテゴリーにはまだ過去問がありません。</p>
            <p className="mt-2">順次追加予定です。</p>
          </div>
        )}
      </div>

      {/* アプリCTA */}
      <AppCTA />
    </div>
  )
}

