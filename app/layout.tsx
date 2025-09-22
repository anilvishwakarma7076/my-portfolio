import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "sonner"


export const metadata: Metadata = {
  title: "Anil Vishwakarma - Full Stack Developer",
  description: "Full Stack Developer specializing in React.js, Node.js,Express.js, and AWS cloud services",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
           <Toaster richColors position="top-center" />
        </Suspense>
      </body>
    </html>
  )
}
