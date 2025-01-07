import './globals.css'
import { Inter, Orbitron } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

// Define metadata
export const metadata = {
  title: 'Biloxi Studios',
  description: 'Game Development Studio',
  // Add any other metadata properties you need
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-gradient-to-br from-black via-vapor-purple/20 to-vapor-blue/20 min-h-screen">
        <div className="fixed inset-0 bg-black/40 -z-10" />
        <Navigation />
        <div className="pt-16">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
