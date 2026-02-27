import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'City of Brains - Chapter 1 | Biloxi Studios',
  description: 'The first playable chapter in the City of Brains universe. Survive the neon-drenched streets and uncover the truth.',
  openGraph: {
    title: 'City of Brains - Chapter 1 | Biloxi Studios',
    description: 'The first playable chapter in the City of Brains universe. Survive the neon-drenched streets and uncover the truth.',
    images: ['https://biloxistudios.com/images/CityOfBrains_BoxCover_Brains-small.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City of Brains - Chapter 1 | Biloxi Studios',
    description: 'The first playable chapter in the City of Brains universe. Survive the neon-drenched streets and uncover the truth.',
    images: ['https://biloxistudios.com/images/CityOfBrains_BoxCover_Brains-small.png'],
  },
}

export default function CityOfBrainsChapter1() {
  return (
    <div className="py-16 space-y-16">
      <header className="text-center space-y-6">
        <Link href="/projects" className="text-vapor-blue hover:text-vapor-pink transition-colors mb-8 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="vapor-text text-6xl md:text-8xl font-bold tracking-tighter">City of Brains</h1>
        <p className="text-2xl text-vapor-purple font-display tracking-widest">CHAPTER 1: OUTBREAK</p>
      </header>

      <div className="relative w-full h-[60vh] min-h-[500px] rounded-xl overflow-hidden border border-vapor-purple/30 vapor-card p-0 group">
        <Image 
          src="/images/CityOfBrains_BoxCover_Brains-small.png"
          alt="City of Brains Outbreak"
          fill
          className="object-contain transition-transform duration-1000 group-hover:scale-105 opacity-80 p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
          <div className="inline-block px-3 py-1 bg-vapor-purple/20 border border-vapor-purple/50 text-vapor-purple text-sm font-mono mb-4 rounded">
            UEFN EXPERIENCE / LORE TIE-IN
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-vapor-pink mb-6 drop-shadow-lg">
            Ground Zero of the Narrative Universe
          </h2>
          <p className="text-coastal-sand text-xl leading-relaxed mb-8 drop-shadow-md">
            Before the animated series, there was the outbreak. Step into the very streets where the City of Brains universe began. This UEFN experience isn't just a game—it's a playable prologue to our interactive Showrunner series. The secrets you uncover and the survival tactics you employ here echo throughout the entire IP.
          </p>
          <a 
            href="https://braindead.tv/games/cityofbrains_outbreak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-purple/20 hover:bg-vapor-purple/40 text-vapor-purple border border-vapor-purple/50 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
          >
            <span className="text-2xl">▶</span> ENTER THE CITY
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="vapor-card bg-black/40 border-vapor-blue/30 space-y-4">
          <h3 className="text-2xl font-display text-vapor-blue">Lore-Accurate Environments</h3>
          <p className="text-coastal-sand/80 leading-relaxed">
            Every alleyway, safehouse, and abandoned storefront was meticulously crafted using StudioBrain.AI to ensure 100% consistency with the animated series. You are walking through the exact locations where our main characters will fight for their lives.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-yellow/30 space-y-4">
          <h3 className="text-2xl font-display text-vapor-yellow">Community-Driven Outcomes</h3>
          <p className="text-coastal-sand/80 leading-relaxed">
            The events of Chapter 1 set the stage for the interactive series. Join our Discord to discuss lore theories, share survival strategies, and vote on the narrative direction that will shape Chapter 2 and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}