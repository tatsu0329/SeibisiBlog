import { getPosts } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '解説記事一覧',
  description: '自動車整備士試験の解説記事・勉強方法・対策記事を掲載しています。',
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">解説記事一覧</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                {post.category}
              </span>
              {post.level && (
                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded font-semibold">
                  {post.level}級
                </span>
              )}
              {post.field && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                  {post.field}
                </span>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <time className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('ja-JP')}
              </time>
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

