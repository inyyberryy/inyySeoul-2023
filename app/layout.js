import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'inyySeoul',
  description: '@2023',
}

export default function RootLayout({ children }) {  // children: 우리가 만든 페이지들!! 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
