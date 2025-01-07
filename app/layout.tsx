import './globals.css'
import { Inter, Orbitron } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'Biloxi Studios - Gulf Coast Game Development',
  description: 'Creating and educating the Gulf Coast through cooperative and multiplayer gaming experiences.',
  manifest: '/manifest.json',
  themeColor: '#FF71CE',
  metadataBase: new URL('https://biloxistudios.com'),
  openGraph: {
    title: 'Biloxi Studios',
    description: 'Gulf Coast Game Development Studio',
    url: 'https://biloxistudios.com',
    siteName: 'Biloxi Studios',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biloxi Studios',
    description: 'Gulf Coast Game Development Studio',
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-gradient-to-br from-vapor-purple via-vapor-blue to-vapor-green min-h-screen">
        <Navigation />
        <div className="pt-16">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          
          <footer className="mt-24 border-t border-vapor-pink/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-display text-vapor-yellow text-lg mb-4">Biloxi Studios</h3>
                  <p className="text-coastal-sand">Creating next-gen gaming experiences on the Gulf Coast</p>
                </div>
                <div>
                  <h3 className="font-display text-vapor-yellow text-lg mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/blog" className="coastal-link">Blog</Link></li>
                    <li><Link href="/projects" className="coastal-link">Projects</Link></li>
                    <li><Link href="https://braindead.tv" className="coastal-link">BrainDead.TV</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-vapor-yellow text-lg mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="https://twitter.com/biloxistudios" className="coastal-link">Twitter</a></li>
                    <li><a href="https://github.com/biloxistudios" className="coastal-link">GitHub</a></li>
                    <li><a href="https://discord.gg/biloxistudios" className="coastal-link">Discord</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-vapor-pink/20 text-center text-coastal-sand">
                <p>&copy; {new Date().getFullYear()} Biloxi Studios. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
