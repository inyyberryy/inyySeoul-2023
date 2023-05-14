"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import Category from './Category'
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

// const metadata = {
//   title: 'inyySeoul',
//   description: '@2023',
// }

export default function RootLayout({ children }) {  // children: 우리가 만든 페이지들!! 
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          <br />
          <Category />
          <hr />
          {children}  {/* page.js가 들어가는 부분 */}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}