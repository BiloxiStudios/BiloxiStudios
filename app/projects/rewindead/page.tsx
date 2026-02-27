import Image from 'next/image'
import Link from 'next/link'

export default function RewinDead() {
  return (
    <div className="py-16 space-y-16">
      <header className="text-center space-y-6">
        <Link href="/projects" className="text-vapor-blue hover:text-vapor-pink transition-colors mb-8 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="vapor-text text-6xl md:text-8xl font-bold tracking-tighter">RewinDead</h1>
        <p className="text-2xl text-vapor-green font-display tracking-widest">SURVIVE. REWIND. REPEAT.</p>
      </header>

      <div className="relative w-full h-[60vh] min-h-[500px] rounded-xl overflow-hidden border border-vapor-green/30 vapor-card p-0 group">
        <Image 
          src="https://cdn-0001.qstv.on.epicgames.com/kqpTWvTMxkmYWNKWmc/image/landscape_comp.jpeg"
          alt="RewinDead Gameplay"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="inline-block px-3 py-1 bg-vapor-green/20 border border-vapor-green/50 text-vapor-green text-sm font-mono rounded">
              UEFN EXPERIENCE
            </div>
            <div className="inline-block px-3 py-1 bg-white/20 border border-white/50 text-white text-sm font-mono rounded">
              RATED E FOR EVERYONE
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-vapor-yellow mb-6 drop-shadow-lg">
            About This Island
          </h2>
          <p className="text-coastal-sand text-xl leading-relaxed mb-6 drop-shadow-md">
            A point-and-click adventure set in the City of Brains universe. Step into the shoes of a desperate street reporter chasing the story of a lifetime as the city spirals into chaos. Search dark alleys, interview survivors, and collect haunted VHS tapes to uncover what really happened before the broadcast ends. Every tape rewinds a new piece of the nightmare — but some stories don't want to be told.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Artistic', 'Side Scroller', 'Visual Novel', 'Series'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-vapor-purple/20 border border-vapor-purple/30 text-vapor-purple text-xs font-mono rounded-full">
                #{tag.toUpperCase()}
              </span>
            ))}
          </div>
          <a 
            href="https://www.fortnite.com/@bizanator/0742-6605-8749?lang=en-US" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-green/20 hover:bg-vapor-green/40 text-vapor-green border border-vapor-green/50 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
          >
            <span className="text-2xl">▶</span> PLAY FREE ON FORTNITE
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="vapor-card bg-black/40 border-vapor-blue/30">
          <div className="text-4xl mb-4">📼</div>
          <h3 className="text-xl font-display text-vapor-blue mb-3">Haunted VHS Tapes</h3>
          <p className="text-coastal-sand/80">
            Collect and rewind mysterious tapes to piece together the nightmare. Every tape reveals a new fragment of the truth.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-pink/30">
          <div className="text-4xl mb-4">🕵️</div>
          <h3 className="text-xl font-display text-vapor-pink mb-3">Point & Click Mystery</h3>
          <p className="text-coastal-sand/80">
            Search dark alleys and interview survivors in this narrative-driven visual novel experience set in the City of Brains universe.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-yellow/30">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-display text-vapor-yellow mb-3">Artistic Side-Scroller</h3>
          <p className="text-coastal-sand/80">
            Immerse yourself in a beautifully crafted, atmospheric world where every frame tells a story of a city spiraling into chaos.
          </p>
        </div>
      </div>
    </div>
  )
}