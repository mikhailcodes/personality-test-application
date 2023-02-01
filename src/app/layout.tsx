'use client';
import { usePathname } from 'next/navigation';
import { Header, Footer } from '@/components'
import './styles/globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  return (
    <html lang="en">
      <head />
      <body className='appContainer'>
        <Header route={pathname} />
        <main className='appContent'>
          {children}

          <Footer route={pathname} />
        </main>
      </body>
    </html >
  )
}
