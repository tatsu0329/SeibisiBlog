# 自動車整備士 過去問・解説ブログ

資格試験（自動車整備士など）の過去問・解説を無料で提供し、検索流入を最大化する「集客装置」として機能するブログサイトです。

## コンセプト

- **ブログは入口、本命はアプリ**: ブログ単体での広告収益を狙うのではなく、自社iOSアプリ／自社Webアプリへの送客を主目的とする
- **4層構造の収益モデル**:
  1. 過去問ページ → 安定PV
  2. 解説記事 → SEOに強い
  3. AdSense → 自動収益
  4. 自社iOSアプリ / 自社Webアプリの紹介 → 本命収益

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel推奨

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# AdSense Publisher ID（オプション）
NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx

# ベースURL（本番環境用）
NEXT_PUBLIC_BASE_URL=https://seibisiblog.com
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## プロジェクト構造

```
seibisiblog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── questions/         # 過去問ページ
│   ├── posts/             # 解説記事ページ
│   ├── about/             # このサイトについて
│   ├── sitemap.ts         # サイトマップ
│   └── robots.ts          # robots.txt
├── components/            # Reactコンポーネント
│   ├── Header.tsx        # ヘッダー
│   ├── Footer.tsx        # フッター
│   ├── AdSense.tsx       # AdSenseスクリプト
│   ├── AdUnit.tsx        # AdSense広告ユニット
│   └── AppCTA.tsx        # アプリ導線CTA
├── lib/                   # ユーティリティ・データ管理
│   └── data.ts           # 過去問・記事データ管理
└── types/                 # TypeScript型定義
    └── index.ts
```

## データ管理

現在、過去問と記事データは `lib/data.ts` で管理されています。本番環境では以下のいずれかに移行することを推奨します：

- **ファイルベース**: `data/questions/` と `data/posts/` ディレクトリにJSON/Markdownファイルを配置
- **CMS**: Contentful、Strapi、MicroCMSなど
- **データベース**: PostgreSQL、MongoDBなど

## SEO最適化

- メタタグの最適化
- 構造化データ（JSON-LD）の実装（今後追加予定）
- サイトマップ自動生成
- robots.txt設定
- 高速表示（Next.jsの最適化機能）

## AdSense統合

1. Google AdSenseアカウントを作成
2. サイトを登録・承認
3. `.env.local` に `NEXT_PUBLIC_ADSENSE_ID` を設定
4. 各ページに `<AdUnit>` コンポーネントを配置

## アプリ導線

`AppCTA` コンポーネントを各ページに配置し、iOSアプリ・Webアプリへの導線を設置しています。実際のアプリURLに更新してください。

## デプロイ

### Vercel（推奨）

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHubリポジトリを接続
3. 環境変数を設定
4. デプロイ

### その他のプラットフォーム

- Netlify
- AWS Amplify
- 自社サーバー（Node.js環境）

## 今後の拡張予定

- [ ] 過去問データの大量追加
- [ ] 検索機能の実装
- [ ] ユーザーアカウント機能（お気に入り、学習履歴）
- [ ] 無料Webクイズ機能
- [ ] 構造化データ（JSON-LD）の追加
- [ ] パフォーマンス最適化
- [ ] アクセス解析（Google Analytics）

## ライセンス

このプロジェクトは個人開発プロジェクトです。

