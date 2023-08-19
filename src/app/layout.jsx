import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodAI Hub',
  description: 'Driven-ai templates projects fronts-end',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='bg-transparent dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
