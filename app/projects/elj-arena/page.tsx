import Link from 'next/link'

export default function EljArena() {
  return (
    <div className="py-16 space-y-16">
      <header className="text-center space-y-6">
        <Link href="/projects" className="text-vapor-blue hover:text-vapor-pink transition-colors mb-8 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="vapor-text text-6xl md:text-8xl font-bold tracking-tighter">ELJ Arena</h1>
        <p className="text-2xl text-vapor-yellow font-display tracking-widest">BATTLE OF THE TUSKS</p>
      </header>

      <div className="relative w-full h-[60vh] min-h-[500px] rounded-xl overflow-hidden border border-vapor-yellow/30 vapor-card p-0 flex items-center justify-center bg-black/80">
        {/* Abstract Arena Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--vapor-yellow)_0%,transparent_50%)] animate-pulse" />
          <div className="w-full h-full border-[20px] border-vapor-yellow/20 rounded-full scale-150" />
          <div className="w-full h-full border-[2px] border-vapor-yellow/40 rounded-full scale-110 absolute top-0 left-0" />
        </div>
        
        <div className="relative z-10 text-center p-8 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-vapor-yellow/20 border border-vapor-yellow/50 text-vapor-yellow text-sm font-mono mb-6 rounded animate-pulse">
            COMING SOON TO UEFN
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-vapor-yellow mb-6 drop-shadow-lg">
            Gladiatorial Combat Reimagined
          </h2>
          <p className="text-coastal-sand text-xl leading-relaxed mb-8 drop-shadow-md">
            Prepare for the ultimate test of skill, strategy, and brute force. ELJ Arena: Battle of the Tusks is an upcoming competitive multiplayer experience that pits players against each other in a high-stakes, neon-lit colosseum. 
          </p>
          <a 
            href="https://braindead.tv/games/elj-battle-of-the-tusks" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-yellow/20 hover:bg-vapor-yellow/40 text-vapor-yellow border border-vapor-yellow/50 rounded-lg transition-all font-bold tracking-wider hover:scale-105"
          >
            <span className="text-2xl">🔔</span> GET NOTIFIED
          </a>
        </div>
      </div>

      <div className="vapor-card bg-black/40 border-vapor-pink/30 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-display text-vapor-pink mb-4">Currently in Active Development</h3>
        <p className="text-coastal-sand/80 text-lg">
          Our team is hard at work balancing the combat mechanics, designing the arena layouts, and integrating our signature retrowave aesthetic into the UEFN engine. Join our Discord to get sneak peeks at development progress and participate in upcoming closed beta tests.
        </p>
      </div>
    </div>
  )
}