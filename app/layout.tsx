import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Questrial } from 'next/font/google'
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const questrial = Questrial({ weight: '400', subsets: ['latin'],display:'swap' })

export const metadata: Metadata = {
  title: "Mo'jizaviy hayotga 4 ta yo'l",
  description: "Mo'jizaviy hayotga 4 ta yo'l. 1 kunlik bepul online intensiv darslik Iman Akhmedovna bilan",
  generator: "IT ZONE",
  openGraph: {
    title: "Mo'jizaviy hayotga 4 ta yo'l - Bepul dars",
    description: "Mo'jizaviy hayotga 4 ta yo'l. 1 kunlik bepul online intensiv",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={questrial.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
