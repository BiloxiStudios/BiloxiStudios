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
          <div className="inline-block px-3 py-1 bg-vapor-green/20 border border-vapor-green/50 text-vapor-green text-sm font-mono mb-4 rounded">
            UEFN EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-vapor-yellow mb-6 drop-shadow-lg">
            A Time-Bending Fight For Survival
          </h2>
          <p className="text-coastal-sand text-xl leading-relaxed mb-8 drop-shadow-md">
            When the undead horde overwhelms you, death isn't the end—it's just a rewind. Master temporal mechanics to outsmart, outmaneuver, and outlast the apocalypse in this high-octane Unreal Editor for Fortnite experience. Every mistake is a lesson; every rewind is a second chance.
          </p>
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
          <div className="text-4xl mb-4">⏳</div>
          <h3 className="text-xl font-display text-vapor-blue mb-3">Temporal Tactics</h3>
          <p className="text-coastal-sand/80">
            Use the rewind mechanic to undo fatal mistakes, reposition yourself, and set up devastating traps for the pursuing horde.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-pink/30">
          <div className="text-4xl mb-4">🧟</div>
          <h3 className="text-xl font-display text-vapor-pink mb-3">Relentless Horde</h3>
          <p className="text-coastal-sand/80">
            Face off against increasingly difficult waves of the undead. They learn, they adapt, and they never stop coming.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-yellow/30">
          <div className="text-4xl mb-4">🔫</div>
          <h3 className="text-xl font-display text-vapor-yellow mb-3">Arsenal Upgrades</h3>
          <p className="text-coastal-sand/80">
            Scavenge for weapons, manage your resources, and upgrade your loadout to keep pace with the escalating threat.
          </p>
        </div>
      </div>
    </div>
  )
}