import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import { Separator } from '@/components/ui/separator'
import Footer from '@/components/ui/footer'
import { AuthProvider } from '@/providers/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Z-Fit | Isaque Chaves',
  description: 'Z-Fit | Seu app de treinos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <Header />
            <Separator />
            <div className="h-full flex-1 overflow-hidden">{children}</div>
            <Separator />
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
