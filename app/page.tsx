import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="vapor-text text-6xl font-bold">
          Biloxi Studios
        </h1>
        <p className="text-2xl text-coastal-sand max-w-2xl mx-auto">
          Creating and educating the Gulf Coast through cooperative and multiplayer gaming experiences
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="vapor-card hover:scale-105 transition-transform duration-300">
            Our Projects
          </Link>
          <Link href="https://braindead.tv" className="vapor-card hover:scale-105 transition-transform duration-300">
            BrainDead.TV
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="vapor-card">
          <h2 className="text-2xl font-display text-vapor-yellow mb-4">UEFN Experiences</h2>
          <p className="text-coastal-sand">
            Pushing the boundaries of interactive entertainment with Unreal Editor for Fortnite
          </p>
        </div>
        
        <div className="vapor-card">
          <h2 className="text-2xl font-display text-vapor-pink mb-4">AI Integration</h2>
          <p className="text-coastal-sand">
            Next-generation AI-supported gaming experiences
          </p>
        </div>
        
        <div className="vapor-card">
          <h2 className="text-2xl font-display text-vapor-green mb-4">Gulf Coast Gaming</h2>
          <p className="text-coastal-sand">
            Building a vibrant game development community on the Mississippi Coast
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="vapor-card">
        <h2 className="text-3xl font-display text-vapor-blue mb-8">Latest Updates</h2>
        <div className="space-y-4">
          {/* This will be populated dynamically from markdown files */}
          <p className="text-coastal-sand italic">Coming soon...</p>
        </div>
      </section>
    </main>
  )
}
