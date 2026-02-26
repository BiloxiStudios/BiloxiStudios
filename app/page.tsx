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
        <div className="relative h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden border border-vapor-blue/30 bg-black/50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">🧠</div>
            <div className="font-mono text-vapor-blue/50">AI_WORLD_BUILDER_ACTIVE</div>
          </div>
        </div>
      </section>

      {/* BrainDead.TV Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center vapor-card bg-black/40">
        <div className="order-2 lg:order-1 relative h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden border border-vapor-pink/30 bg-black/50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">📺</div>
            <div className="font-mono text-vapor-pink/50">BROADCAST_SIGNAL_FOUND</div>
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl font-display text-vapor-pink">BrainDead.TV</h2>
          <h3 className="text-2xl text-vapor-yellow">Interactive Streaming & Gaming</h3>
          <p className="text-coastal-sand text-lg leading-relaxed">
            Our flagship interactive streaming platform combining gaming and live entertainment. We're pushing the boundaries of what it means to be a viewer by turning audiences into active participants.
          </p>
          <div className="pt-4">
            <a href="https://braindead.tv" className="inline-block px-6 py-3 bg-vapor-pink/20 hover:bg-vapor-pink/40 text-vapor-pink border border-vapor-pink/50 rounded transition-all">
              Tune In
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
        </div>
        
        <div className="vapor-card space-y-4">
          <div className="text-4xl mb-4">🌴</div>
          <h2 className="text-2xl font-display text-vapor-yellow">Gulf Coast Gaming</h2>
          <p className="text-coastal-sand">
            Based in Biloxi, MS, we draw inspiration from our beautiful coastline, neon-lit casinos, and rich culture. We're building a vibrant game development community right here on the coast.
          </p>
        </div>
      </section>

      {/* Contact / Apple Developer Info Section */}
      <section className="vapor-card border-vapor-purple/50 bg-gradient-to-br from-black/80 to-vapor-purple/10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-display text-vapor-purple">Corporate Headquarters</h2>
          <p className="text-coastal-sand text-lg">
            Biloxi Studios Inc. is a registered Apple Developer and official game development studio.
          </p>
          <div className="bg-black/50 p-6 rounded-lg border border-vapor-purple/30 inline-block text-left">
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
