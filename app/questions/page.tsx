import { getQuestionCategories } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '過去問一覧',
  description: '自動車整備士（1級・2級・3級）の過去問を年度別・級別・分野別に掲載しています。',
}

export default async function QuestionsPage() {
  const categories = await getQuestionCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">過去問一覧</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/questions/${category.slug}`}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded font-semibold">
                {category.level}級
              </span>
              {category.examType && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                  {category.examType}
                </span>
              )}
              {category.category && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  {category.category}
                </span>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {category.name}
            </h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

