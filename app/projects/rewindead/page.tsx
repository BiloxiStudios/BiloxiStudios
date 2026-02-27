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
            A point-and-click adventure set in the City of Brains universe. Step into the shoes of a teenager on their first real job as a street reporter during the night of a lifetime. Take your camcorder and search the city to unlock stories (tapes) to piece together the Nightly News and uncover the truth. Collect enough stories before running out of batteries—or getting mugged by hobos, bitten by dogs, or worse. Make it back to the news van to arrange your tapes in any order to unlock the evening news. The right combinations yield the most impact, better ratings, and secret lore.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Point & Click', 'Adventure', 'Mystery', 'Epic MegaJam 2025'].map(tag => (
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
          <div className="text-4xl mb-4">📹</div>
          <h3 className="text-xl font-display text-vapor-blue mb-3">Street Reporter</h3>
          <p className="text-coastal-sand/80">
            Armed with only a camcorder and limited batteries, explore the dangerous streets to capture the stories no one else will.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-pink/30">
          <div className="text-4xl mb-4">📺</div>
          <h3 className="text-xl font-display text-vapor-pink mb-3">Edit the News</h3>
          <p className="text-coastal-sand/80">
            Survive the night and make it to the news van. Arrange your collected tapes to create the perfect broadcast for maximum ratings and secret lore.
          </p>
        </div>
        <div className="vapor-card bg-black/40 border-vapor-yellow/30">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-display text-vapor-yellow mb-3">Epic MegaJam 2025</h3>
          <p className="text-coastal-sand/80">
            Built in just one week for the Epic MegaJam, featuring exclusive teaser clips and news reels from the upcoming City of Brains animated series.
          </p>
        </div>
      </div>
    </div>
  )
}