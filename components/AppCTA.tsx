import Link from 'next/link'

export default function AppCTA() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          もっと効率よく学ぶならアプリ版
        </h2>
        <p className="text-xl mb-6 opacity-90">
          広告なし・全問解放・オフライン対応で、スキマ時間を有効活用
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            iOSアプリをダウンロード
          </a>
          <a
            href="#"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Webアプリで試す
          </a>
        </div>
        <p className="mt-4 text-sm opacity-75">
          無料で試してから有料サービスを検討できます
        </p>
      </div>
    </section>
  )
}

