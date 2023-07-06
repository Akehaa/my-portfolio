import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Dener Araujo - Front-end Web Developer',
  description: `Dener Araujo's portfolio`,
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['sans-serif', 'system-ui', 'arial']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
