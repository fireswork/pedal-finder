import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ChatInterface from "./components/chat-interface"
import localFont from 'next/font/local'

const amxFont = localFont({
  src: [
    {
      path: '../public/fonts/AMX-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AMX-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/AMX-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/AMX-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-amx',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "PedalFinder - Find the Perfect Pedal for Your Sound",
  description: "Discover effects pedals based on your favorite artists, songs, or the sound you want to create.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${amxFont.variable} ${inter.variable}`}>
      <body className={amxFont.className}>
        {children}
        <ChatInterface />
      </body>
    </html>
  )
}



import './globals.css'