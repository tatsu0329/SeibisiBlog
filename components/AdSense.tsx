'use client'

import Script from 'next/script'

export default function AdSense() {
  // AdSenseのPublisher IDは環境変数から取得
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  if (!adSenseId) {
    return null
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

