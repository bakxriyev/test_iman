import type React from "react"
import type { Metadata } from "next"
import { Anton, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Questrial } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const questrial = Questrial({ weight: "400", subsets: ["latin"], display: "swap" })
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Mo'jizaviy hayotga 4 ta yo'l",
  description:
    "Mo'jizaviy hayotga 4 ta yo'l. 1 kunlik bepul online intensiv darslik Iman Akhmedovna bilan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="bz2ov22ykpiilipr7z52cymvnlg8n9"
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '647005224750459');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body className={`${anton.variable} ${questrial.className}`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=647005224750459&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
