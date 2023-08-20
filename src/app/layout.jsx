'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import { UserProvider } from '../authservice/userContext';

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
          <UserProvider>
              {children}
       
          </UserProvider>
        </Providers>
      </body>
    </html>
  )
}
