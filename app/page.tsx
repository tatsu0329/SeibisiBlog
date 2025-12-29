import Link from 'next/link'
import { getLatestPosts, getQuestionCategories } from '@/lib/data'
import AppCTA from '@/components/AppCTA'

export default async function Home() {
  const latestPosts = await getLatestPosts(6)
  const categories = await getQuestionCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヒーローセクション */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          自動車整備士 過去問・解説
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          無料で学べる資格試験対策。年度別・級別・分野別の過去問で効率的に学習
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/questions/1級小型自動車-筆記"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            1級（筆記）
          </Link>
          <Link
            href="/questions/2級ガソリン自動車"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            2級ガソリン
          </Link>
          <Link
            href="/questions/2級ジーゼル自動車"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            2級ジーゼル
          </Link>
          <Link
            href="/questions/3級自動車シャシ"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            3級シャシ
          </Link>
        </div>
      </section>

      {/* カテゴリー一覧 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">過去問カテゴリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/questions/${category.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 最新記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">最新の解説記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <time className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('ja-JP')}
              </time>
            </Link>
          ))}
        </div>
      </section>

      {/* アプリCTA */}
      <AppCTA />
    </div>
  )
}

