import { Question, Post, QuestionCategory } from '@/types'

// 過去問カテゴリー（公式サイトの分類に準拠）
// 参考: https://www.jaspa.or.jp/mechanic/past/2024/2nd.html
export const questionCategories: QuestionCategory[] = [
  {
    slug: '1級小型自動車-筆記',
    name: '一級小型自動車（筆記）',
    description: '一級小型自動車整備士の筆記試験過去問を年度別に掲載',
    level: 1,
    category: '筆記',
    examType: '筆記',
  },
  {
    slug: '1級小型自動車-口述',
    name: '一級小型自動車（口述）',
    description: '一級小型自動車整備士の口述試験過去問を年度別に掲載',
    level: 1,
    category: '口述',
    examType: '口述',
  },
  {
    slug: '2級ガソリン自動車',
    name: '二級ガソリン自動車',
    description: '二級ガソリン自動車整備士の過去問を年度別に掲載',
    level: 2,
    category: 'ガソリン',
    examType: '学科',
  },
  {
    slug: '2級ジーゼル自動車',
    name: '二級ジーゼル自動車',
    description: '二級ジーゼル自動車整備士の過去問を年度別に掲載',
    level: 2,
    category: 'ジーゼル',
    examType: '学科',
  },
  {
    slug: '2級自動車シャシ',
    name: '二級自動車シャシ',
    description: '二級自動車シャシ整備士の過去問を年度別に掲載',
    level: 2,
    category: 'シャシ',
    examType: '学科',
  },
  {
    slug: '3級自動車シャシ',
    name: '三級自動車シャシ',
    description: '三級自動車シャシ整備士の過去問を年度別に掲載',
    level: 3,
    category: 'シャシ',
    examType: '学科',
  },
]

// サンプル過去問データ（実際のデータは data/questions/ ディレクトリに配置）
export async function getQuestionsByCategory(
  categorySlug: string,
  year?: string
): Promise<Question[]> {
  // 実際の実装では、ファイルシステムやデータベースから読み込む
  // ここではサンプルデータを返す
  return [
    {
      id: '1',
      categorySlug,
      year: '2023',
      questionNumber: 1,
      question: 'ガソリンエンジンの点火時期について、正しいものはどれか。',
      choices: [
        '点火時期が早すぎるとノッキングが発生する',
        '点火時期が遅すぎると出力が低下する',
        '点火時期はエンジン回転数に応じて変化する',
        'すべて正しい',
      ],
      correctAnswer: 3,
      explanation: '点火時期はエンジンの性能に大きく影響します。早すぎるとノッキング、遅すぎると出力低下、回転数に応じて最適値が変化します。',
      tags: ['ガソリンエンジン', '点火系'],
    },
  ]
}

export async function getQuestionById(id: string): Promise<Question | null> {
  // 実際の実装では、IDで検索
  return null
}

export async function getQuestionCategories(): Promise<QuestionCategory[]> {
  return questionCategories
}

export async function getQuestionCategoryBySlug(
  slug: string
): Promise<QuestionCategory | null> {
  return questionCategories.find((cat) => cat.slug === slug) || null
}

// ブログ記事データは posts.ts からインポート
import { samplePosts } from './posts'

export async function getPosts(): Promise<Post[]> {
  return samplePosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return samplePosts.find((post) => post.slug === slug) || null
}

export async function getLatestPosts(count: number = 5): Promise<Post[]> {
  const posts = await getPosts()
  return posts.slice(0, count)
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter((post) => post.category === category)
}

export async function getPostsByLevel(level: 1 | 2 | 3): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter((post) => post.level === level)
}

export async function getPostsByField(field: string): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter((post) => post.field === field)
}

