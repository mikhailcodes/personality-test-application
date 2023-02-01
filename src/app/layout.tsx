'use client';
import { usePathname } from 'next/navigation';
import { Header } from '@/components'
import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  return (
    <html lang="en">
      <head />
      <body className='appContainer'>
        <Header route={pathname} />
        <main className='appContent'>
          {children}
        </main>
      </body>
    </html >
  )
}
