import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/data'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import AppCTA from '@/components/AppCTA'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        {/* パンくずリスト */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-primary-600 hover:underline">
            ホーム
          </Link>
          {' > '}
          <Link href="/posts" className="text-primary-600 hover:underline">
            解説記事
          </Link>
          {' > '}
          <span className="text-gray-600">{post.title}</span>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-4 flex-wrap">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="px-2 py-1 bg-gray-100 rounded text-sm">
              {post.category}
            </span>
            {post.level && (
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm font-semibold">
                {post.level}級
              </span>
            )}
            {post.field && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                {post.field}
              </span>
            )}
            {post.yearRange && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                {post.yearRange}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* AdSense */}
        <div className="mb-8">
          <AdUnit slot="1234567890" style={{ minHeight: '100px' }} />
        </div>

        {/* 記事本文 */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="text-gray-800 leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* AdSense */}
        <div className="mb-8">
          <AdUnit slot="1234567890" style={{ minHeight: '100px' }} />
        </div>

        {/* アプリCTA */}
        <AppCTA />
      </article>
    </div>
  )
}

