import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const syne = Syne({ subsets: ['greek'] })

export const metadata: Metadata = {
  title: 'Tarun Devgan',
  description: 'Personel Portolio of Tarun Devgan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.className} bg-gray-900 max-w-[1000px] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
