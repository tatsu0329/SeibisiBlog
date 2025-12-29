export interface Question {
  id: string
  categorySlug: string
  year: string
  questionNumber: number
  question: string
  choices: string[]
  correctAnswer: number // 0-indexed
  explanation: string
  tags: string[]
}

export interface QuestionCategory {
  slug: string
  name: string
  description: string
  level: 1 | 2 | 3
  category?: string // ガソリン、ジーゼル、シャシ、筆記、口述など
  examType?: string // 筆記、口述、学科など
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  category: string
  // SEO・分類用の追加フィールド
  level?: 1 | 2 | 3 // 対象資格の級
  field?: string // 分野（ガソリン、ジーゼル、シャシなど）
  yearRange?: string // 年度傾向（例：2023〜2025年、近年など）
  // 記事構成要素
  trends?: string // 出題傾向
  keyPoints?: string // 問題で問われている論点
  choicePatterns?: string // 選択肢でよく出るパターン
  commonMistakes?: string // ひっかけポイント・間違えやすい理由
  thinkingFlow?: string // 正しい考え方・解き方の思考フロー
  studyMethod?: string // 効率的な勉強法
}

