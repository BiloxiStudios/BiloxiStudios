import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen py-24 space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-8 relative">
        <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-20 pointer-events-none">
          <div className="w-64 h-64 bg-vapor-pink rounded-full blur-[100px]"></div>
          <div className="w-64 h-64 bg-vapor-blue rounded-full blur-[100px] -ml-32"></div>
        </div>
        <h1 className="vapor-text text-7xl font-bold tracking-wider">
          BILOXI STUDIOS
        </h1>
        <p className="text-2xl text-coastal-sand max-w-3xl mx-auto font-light">
          Next-Gen Generative AI Media & Gaming Experiences on the Gulf Coast 🌴
        </p>
        <div className="flex justify-center gap-6 pt-4 flex-wrap">
          <Link href="https://studiobrain.ai" className="vapor-card hover:scale-105 transition-transform duration-300 border-vapor-blue/50">
            <span className="text-vapor-blue font-display">StudioBrain.AI</span>
          </Link>
          <Link href="https://braindead.tv" className="vapor-card hover:scale-105 transition-transform duration-300 border-vapor-pink/50">
            <span className="text-vapor-pink font-display">BrainDead.TV</span>
          </Link>
          <Link href="/projects" className="vapor-card hover:scale-105 transition-transform duration-300 border-vapor-yellow/50">
            <span className="text-vapor-yellow font-display">UEFN Projects</span>
          </Link>
        </div>
      </section>

      {/* StudioBrain.AI Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center vapor-card bg-black/40">
        <div className="space-y-6">
          <h2 className="text-4xl font-display text-vapor-blue">StudioBrain.AI</h2>
          <h3 className="text-2xl text-vapor-yellow">Build Your Universe. Keep It Consistent.</h3>
          <p className="text-coastal-sand text-lg leading-relaxed">
            AI-powered world building for game developers. StudioBrain helps you build every piece and keep it all consistent while AI populates the gaps. Generate characters, factions, and locations that adhere to your universe's rules.
          </p>
          <ul className="space-y-2 text-coastal-sand/80">
            <li>✨ Multi-Provider Generation (Claude, ChatGPT, Grok)</li>
            <li>🎨 Native ComfyUI Support for Concept Art</li>
            <li>📜 Strict Rule Enforcement & Timeline Integrity</li>
          </ul>
          <div className="pt-4">
            <a href="https://studiobrain.ai" className="inline-block px-6 py-3 bg-vapor-blue/20 hover:bg-vapor-blue/40 text-vapor-blue border border-vapor-blue/50 rounded transition-all">
              Start Building
            </a>
          </div>
        </div>
        <div className="relative h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden border border-vapor-blue/30 bg-black/50 flex items-center justify-center group">
          {/* Supernova / Wormhole Background Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
            {/* Spinning Casino/Wormhole Rays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-[spin_12s_linear_infinite]"
                 style={{
                   background: 'repeating-conic-gradient(from 0deg, var(--vapor-pink) 0deg 15deg, transparent 15deg 30deg, var(--vapor-blue) 30deg 45deg, transparent 45deg 60deg)',
                   opacity: 0.4
                 }}
            />
            {/* Counter-Spinning Inner Rays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-[spin_8s_linear_infinite_reverse]"
                 style={{
                   background: 'repeating-conic-gradient(from 0deg, var(--vapor-purple) 0deg 10deg, transparent 10deg 20deg, var(--vapor-yellow) 20deg 30deg, transparent 30deg 40deg)',
                   opacity: 0.3
                 }}
            />
            {/* Supernova Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse"
                 style={{
                   background: 'radial-gradient(circle at center, var(--vapor-yellow) 0%, var(--vapor-pink) 20%, var(--vapor-purple) 40%, transparent 70%)',
                   opacity: 0.7,
                   mixBlendMode: 'screen'
                 }}
            />
            {/* Starfield Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLCAyNTUsIDI1NSwgMC41KSIvPjwvc3ZnPg==')] opacity-60"></div>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          </div>
          <div className="text-center space-y-4 relative z-10 flex flex-col items-center">
            <div className="text-7xl animate-bounce drop-shadow-[0_0_25px_rgba(255,251,150,1)]">🧠</div>
            <div className="font-mono text-vapor-yellow font-bold text-lg md:text-xl overflow-hidden whitespace-nowrap border-r-4 border-vapor-yellow animate-[typing_3.5s_steps(40,end),blink-caret_.75s_step-end_infinite] pr-2 drop-shadow-[0_0_10px_rgba(255,251,150,0.8)] bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
              AI_WORLD_BUILDER_ACTIVE
            </div>
          </div>
        </div>
      </section>

      {/* BrainDead.TV Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center vapor-card bg-black/40">
        <div className="order-2 lg:order-1 relative h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden border border-vapor-pink/30 bg-black/50 flex items-center justify-center">
          {/* TV Static Background */}
          <div className="absolute inset-0 opacity-20 mix-blend-screen"
               style={{
                 backgroundImage: 'url("https://media.giphy.com/media/Yy26NRbpB9lDi/giphy.gif")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vapor-pink/10 to-black/80" />
          <div className="text-center space-y-4 relative z-10">
            <div className="text-6xl animate-bounce">📺</div>
            <div className="font-mono text-vapor-pink font-bold tracking-widest drop-shadow-[0_0_8px_rgba(255,113,206,0.8)]">
              BROADCAST_SIGNAL_FOUND
            </div>
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl font-display text-vapor-pink">BrainDead.TV</h2>
          <h3 className="text-2xl text-vapor-yellow">The Window into the BrainDead Universe</h3>
          <div className="text-vapor-green font-mono text-sm tracking-widest">
            WHERE HORROR "MEATS" COMEDY
          </div>
          <div className="text-coastal-sand text-lg leading-relaxed space-y-4">
            <p>
              BrainDead.TV isn't a streaming platform—it's the lore, the universe, and the thread that ties it all together. Step into 1998, where the streets are soaked in neon and amber-lit fog. Corporations have created every imaginable over-the-top brand to please you, seduce you, trick you, and now... maybe even eat you.
            </p>
            <p>
              It's your window into the <span className="text-vapor-pink font-bold">City of Brains</span>. From battling elephants in the <strong>ELJ Arena</strong> prequel (the most violent act you've seen since the 1998 Circus), to uncovering mysteries as a kid with a camcorder in <strong>RewinDead</strong>, to surviving a living, breathing city full of insane factions.
            </p>
            <p className="text-sm text-coastal-sand/80 border-l-2 border-vapor-pink/30 pl-4">
              Beware the <strong>Flamingos</strong> (illegal counterfeit smuggling fabulous fashionistas), the off-grid wizard bears keeping <em>BrainOnLine</em> running, and the <strong>Department of Neural Affairs</strong> looking to catch you without a permit. Grab a hot dog, dodge the neon green goo under an eclipse moon, and take a joyride through vice city with the top down and a vaporwave soundtrack blaring.
            </p>
            <p className="text-xs font-mono text-vapor-yellow/80 italic">
              Brought to you by DoubleDip: "So good, you just gotta double dip... Shhh it's ok, we won't tell no one."
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://braindead.tv" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-vapor-pink/20 hover:bg-vapor-pink/40 text-vapor-pink border border-vapor-pink/50 rounded transition-all font-bold tracking-wider">
              Explore the Universe
            </a>
            <a href="https://braindeadguild.com/discord" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/40 text-[#5865F2] border border-[#5865F2]/50 rounded transition-all font-bold tracking-wider">
              Join Discord Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* UEFN & Gulf Coast Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="vapor-card space-y-4">
          <div className="text-4xl mb-4">🎮</div>
          <h2 className="text-2xl font-display text-vapor-green">UEFN Experiences</h2>
          <p className="text-coastal-sand">
            Pushing the boundaries of interactive entertainment with Unreal Editor for Fortnite. We create innovative multiplayer experiences that bring players together in entirely new ways.
          </p>
          <ul className="space-y-3 pt-2 text-coastal-sand/90">
            <li>
              <Link href="/projects/rewindead" className="hover:text-vapor-green transition-colors flex items-center gap-2">
                <span className="text-vapor-green">▶</span> RewinDead
              </Link>
            </li>
            <li>
              <Link href="/projects/city-of-brains-chapter-1" className="hover:text-vapor-green transition-colors flex items-center gap-2">
                <span className="text-vapor-green">▶</span> City Of Brains - Chapter 1
              </Link>
            </li>
            <li>
              <Link href="/projects/elj-arena" className="hover:text-vapor-green transition-colors flex items-center gap-2">
                <span className="text-vapor-yellow">⏳</span> ELJ Arena (Coming Soon)
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="vapor-card space-y-4">
          <div className="text-4xl mb-4">🌴</div>
          <h2 className="text-2xl font-display text-vapor-yellow">Gulf Coast Gaming</h2>
          <p className="text-coastal-sand">
            Based in Biloxi, MS, we draw inspiration from our beautiful coastline, neon-lit casinos, and rich culture. We're building a vibrant game development community right here on the coast.
          </p>
        </div>
      </section>

      {/* City of Brains Animated Series Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center vapor-card bg-black/40 border-vapor-purple/50">
        <div className="space-y-6">
          <h2 className="text-4xl font-display text-vapor-purple">City of Brains</h2>
          <h3 className="text-2xl text-vapor-yellow">How Will Your Story End?</h3>
          <div className="text-vapor-green font-mono text-sm tracking-widest">
            WATCH | INTERACT | SURVIVE
          </div>
          <p className="text-coastal-sand text-lg leading-relaxed">
            Step into a neon-drenched dystopia where you drive the story. <span className="text-vapor-pink font-bold">City of Brains</span> isn't just a show—it's a living, breathing ecosystem powered by Showrunner. Votes determine canon for new locations, characters, and events that are integrated directly into the free-to-play game.
          </p>
          <div className="text-coastal-sand/60 text-sm space-y-1 border-l-2 border-vapor-purple/30 pl-4">
            <p>Created by Biloxi Studios | Powered by Showrunner</p>
            <p>Play Free on Fortnite</p>
            <p className="text-vapor-blue/80 mt-2">Powered by AI | Created by Humans with Brains (StudioBrain.ai)</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects/city-of-brains-series" className="inline-block px-6 py-3 bg-vapor-purple/20 hover:bg-vapor-purple/40 text-vapor-purple border border-vapor-purple/50 rounded transition-all font-bold tracking-wider">
              Explore the Series
            </Link>
            <a href="https://youtu.be/aAin3PXxCg4?si=s-tB2gW7YuhMd7b_" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-black/40 hover:bg-black/60 text-coastal-sand border border-coastal-sand/30 rounded transition-all">
              Watch Pilot
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden border border-vapor-purple/30 bg-black/50 group shadow-[0_0_20px_rgba(185,103,255,0.15)]">
          <Image 
            src="/images/TvGuide_CityOfBrainsTvsHit.png" 
            alt="City of Brains TV Guide" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="vapor-card border-vapor-blue/50 bg-gradient-to-br from-black/80 to-vapor-blue/10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display text-vapor-blue">Bring Your Vision to Life</h2>
          <p className="text-coastal-sand text-lg leading-relaxed">
            Crafting bleeding-edge media solutions is a chaotic blend of technical madness and creative genius. Got a story you want to bring to life, or a brand you'd like to envision in new and creative ways? Reach out.
          </p>
          <div className="bg-black/50 p-6 rounded-lg border border-vapor-blue/30 inline-block text-left mt-4">
            <h3 className="text-xl font-bold text-vapor-yellow mb-4">Biloxi Studios Inc</h3>
            <div className="space-y-2 text-coastal-sand font-mono">
              <p>📍 45 Hardy Court Shopping Center #374</p>
              <p className="pl-6">Gulfport, MS 39507</p>
              <p className="pt-2">📞 1-228-288-GAME (4263)</p>
              <p>✉️ contact@biloxistudios.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
