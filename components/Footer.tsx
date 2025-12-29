import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">過去問</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/questions/1級小型自動車-筆記" className="hover:text-primary-400">
                  1級（筆記）
                </Link>
              </li>
              <li>
                <Link href="/questions/1級小型自動車-口述" className="hover:text-primary-400">
                  1級（口述）
                </Link>
              </li>
              <li>
                <Link href="/questions/2級ガソリン自動車" className="hover:text-primary-400">
                  2級ガソリン
                </Link>
              </li>
              <li>
                <Link href="/questions/2級ジーゼル自動車" className="hover:text-primary-400">
                  2級ジーゼル
                </Link>
              </li>
              <li>
                <Link href="/questions/2級自動車シャシ" className="hover:text-primary-400">
                  2級シャシ
                </Link>
              </li>
              <li>
                <Link href="/questions/3級自動車シャシ" className="hover:text-primary-400">
                  3級シャシ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">コンテンツ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/posts" className="hover:text-primary-400">
                  解説記事
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400">
                  このサイトについて
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">アプリ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400">
                  iOSアプリ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400">
                  Webアプリ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 自動車整備士 過去問・解説. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

