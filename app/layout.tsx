import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

// Define metadata
export const metadata = {
  title: 'Biloxi Studios Inc | Next-Gen AI & Gaming',
  description: 'Creating next-gen generative AI media and gaming experiences on the Gulf Coast. Home of StudioBrain.AI and BrainDead.TV.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-gradient-to-br from-black via-vapor-purple/20 to-vapor-blue/20 min-h-screen relative">
        {/* Retrowave Grid Background */}
        <div 
          className="fixed inset-0 pointer-events-none -z-20 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(transparent 0%, var(--vapor-purple) 2%, transparent 5%),
              linear-gradient(90deg, transparent 0%, var(--vapor-blue) 2%, transparent 5%)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            transformOrigin: 'top center',
            height: '200vh',
          }}
        />
        <div className="fixed inset-0 bg-black/60 -z-10" />
        <Navigation />
        <div className="pt-16">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem-300px)]">
            {children}
          </main>
          
          <footer className="mt-24 border-t border-vapor-pink/20 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <h3 className="font-display text-vapor-yellow text-xl mb-4">Biloxi Studios Inc</h3>
                  <p className="text-coastal-sand mb-4">Creating next-gen generative AI media and gaming experiences on the Gulf Coast.</p>
                  <div className="text-coastal-sand/80 space-y-1">
                    <p>45 Hardy Court Shopping Center #374</p>
                    <p>Gulfport, MS 39507</p>
                    <p className="text-vapor-pink mt-2">📞 1-228-288-GAME (4263)</p>
                    <p className="text-vapor-blue">✉️ contact@biloxistudios.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-vapor-yellow text-lg mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/blog" className="coastal-link">Blog</a></li>
                    <li><a href="/projects" className="coastal-link">Projects</a></li>
                    <li><a href="https://braindead.tv" className="coastal-link">BrainDead.TV</a></li>
                    <li><a href="https://studiobrain.ai" className="coastal-link">StudioBrain.AI</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-vapor-yellow text-lg mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="https://x.com/cityofbrains" className="coastal-link">Twitter</a></li>
                    <li><a href="https://github.com/biloxistudios" className="coastal-link">GitHub</a></li>
                    <li><a href="https://braindeadguild.com/discord" className="coastal-link">Discord</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-vapor-pink/20 text-center text-coastal-sand">
                <p>&copy; {new Date().getFullYear()} Biloxi Studios Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
