import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Детский врач - Педиатр | Консультации и лечение детей',
  description: 'Профессиональные услуги педиатра для детей от 0 до 17 лет. Консультации, лечение, профилактика. Опытный врач с многолетним стажем.',
  keywords: 'педиатр, детский врач, консультация педиатра, лечение детей, детская медицина',
  authors: [{ name: 'Педиатр' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Детский врач - Педиатр | Консультации и лечение детей',
    description: 'Профессиональные услуги педиатра для детей от 0 до 17 лет',
    type: 'website',
    locale: 'ru_RU',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

