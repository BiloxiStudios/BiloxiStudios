import Image from 'next/image'
import Link from 'next/link'

export default function CityOfBrainsSeries() {
  return (
    <div className="py-16 space-y-16">
      <header className="text-center space-y-6">
        <Link href="/projects" className="text-vapor-blue hover:text-vapor-pink transition-colors mb-8 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="vapor-text text-6xl md:text-8xl font-bold tracking-tighter">City of Brains</h1>
        <p className="text-2xl text-vapor-green font-display tracking-widest">HOW WILL YOUR STORY END?</p>
      </header>

      <div className="relative w-full h-[70vh] min-h-[600px] rounded-xl overflow-hidden border border-vapor-purple/30 vapor-card p-0 group">
        <Image 
          src="/images/TvGuide_CityOfBrainsTvsHit.png"
          alt="City of Brains TV Guide"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
          <div className="flex gap-4 mb-6">
            <div className="px-3 py-1 bg-vapor-purple/20 border border-vapor-purple/50 text-vapor-purple text-sm font-mono rounded">
              ANIMATED SERIES
            </div>
            <div className="px-3 py-1 bg-vapor-blue/20 border border-vapor-blue/50 text-vapor-blue text-sm font-mono rounded">
              POWERED BY SHOWRUNNER
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display text-vapor-green mb-4 drop-shadow-lg">
            Watch | Interact | Survive
          </h2>
          
          <p className="text-coastal-sand text-xl leading-relaxed mb-8 drop-shadow-md">
            Experience a new form of media. Watch & create your own story in the City of Brains. Survive together in this evolving narrative adventure, where the community votes on Discord to shape characters, locations, and events.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://youtu.be/aAin3PXxCg4?si=s-tB2gW7YuhMd7b_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-purple/20 hover:bg-vapor-purple/40 text-vapor-purple border border-vapor-purple/50 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
            >
              <span className="text-2xl">▶</span> WATCH PILOT
            </a>
            <a 
              href="https://youtube.com/shorts/vBa9Kwfw9Pc?si=X76tFux9xvT4XEtB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-pink/20 hover:bg-vapor-pink/40 text-vapor-pink border border-vapor-pink/50 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
            >
              <span className="text-2xl">🎬</span> BEHIND THE PILOT
            </a>
            <a 
              href="https://showrunnerapp.xyz/shows/city-of-brains" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-black/60 hover:bg-black/80 text-coastal-sand border border-coastal-sand/30 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
            >
              SHOWRUNNER APP
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="vapor-card bg-black/40 border-vapor-blue/30">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-display text-vapor-blue mb-3">Powered by AI</h3>
          <p className="text-coastal-sand/80">
            Leveraging StudioBrain.AI to maintain a massive, consistent universe. Every character, faction, and location is tracked and validated to ensure the lore never breaks, no matter how complex the branching narrative gets.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-pink/30">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-display text-vapor-pink mb-3">Created by Humans</h3>
          <p className="text-coastal-sand/80">
            AI is the tool, but human creativity is the engine. Our team of writers, artists, and developers use next-gen technology to bring their wildest visions to life at unprecedented speeds.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-yellow/30">
          <div className="text-4xl mb-4">🗳️</div>
          <h3 className="text-xl font-display text-vapor-yellow mb-3">Community Driven</h3>
          <p className="text-coastal-sand/80">
            You aren't just a viewer; you're a showrunner. Join the Discord to vote on critical story decisions. Who lives? Who dies? Which faction takes control? The power is in your hands.
          </p>
        </div>
      </div>
    </div>
  )
}