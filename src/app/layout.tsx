import './globals.css'
import {Inter} from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '保持更新GPT',
  description: '收集免费、无需登录的GPT镜像站。此站点永久免费且保持更新。',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
