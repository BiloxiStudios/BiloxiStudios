import Image from 'next/image'
import Link from 'next/link'

const description = 'HOT SET is a game where you direct AI actors by voice. Pick a genre and a set, cast your stars, call Action, and watch them improvise.'

export const metadata = {
  title: 'HOT SET | Biloxi Studios',
  description,
  openGraph: {
    title: 'HOT SET | Biloxi Studios',
    description,
    images: ['https://www.biloxistudios.com/images/HotSet_Title_Wide.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOT SET | Biloxi Studios',
    description,
    images: ['https://www.biloxistudios.com/images/HotSet_Title_Wide.jpg'],
  },
}

const links = [
  { label: 'Watch the trailer', href: 'https://youtu.be/xNuTzG2VBj4' },
  { label: 'Read the devlog', href: '/blog/megajam26-devlog' },
  { label: 'Read the postmortem', href: '/blog/megajam26-postmortem' },
  { label: 'Join the Discord (#hotset)', href: 'https://discord.gg/fWHBt5kyjj' },
  { label: 'Starter skills on GitHub', href: 'https://github.com/BiloxiStudios/hot-set' },
]

export default function HotSet() {
  return (
    <div className="py-16 space-y-16">
      <header className="text-center space-y-6">
        <Link href="/projects" className="text-vapor-blue hover:text-vapor-pink transition-colors mb-8 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="vapor-text text-6xl md:text-8xl font-bold tracking-tighter">HOT SET</h1>
        <p className="text-2xl text-vapor-green font-display tracking-widest">YOU&apos;RE THE DIRECTOR. THEY&apos;RE THE PROBLEM.</p>
      </header>

      <div className="relative w-full h-[60vh] min-h-[500px] rounded-xl overflow-hidden border border-vapor-green/30 vapor-card p-0 group">
        <Image
          src="/images/HotSet_Title_Wide.jpg"
          alt="The HOT SET logo on a purple sunburst."
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
              IN POLISH / PLAYTESTING
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-vapor-yellow mb-6 drop-shadow-lg">
            About This Island
          </h2>
          <p className="text-coastal-sand text-xl leading-relaxed mb-6 drop-shadow-md">
            HOT SET is a game where you direct AI actors by voice. Pick a genre and a set, cast your stars, call Action, and watch them improvise, with the occasional Guest Star crashing through the door. We built it in four days for the 2026 Epic AI MegaJam, with a crew of humans and a rather large crew of robots.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Voice', 'Directing', 'Comedy', 'Epic AI MegaJam 2026'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-vapor-purple/20 border border-vapor-purple/30 text-vapor-purple text-xs font-mono rounded-full">
                #{tag.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-vapor-green/20 text-vapor-green border border-vapor-green/50 rounded-lg font-bold tracking-wider">
            ISLAND CODE COMING SOON (PUBLIC RELEASE)
          </div>
        </div>
      </div>

      <div className="vapor-card p-0 overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/xNuTzG2VBj4"
            title="HOT SET trailer"
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="vapor-card bg-black/40 border-vapor-blue/30 text-center text-vapor-blue hover:text-vapor-pink transition-colors font-bold tracking-wider"
          >
            {l.label} →
          </a>
        ))}
      </div>

      <div className="vapor-card text-center space-y-3">
        <h3 className="text-2xl font-display text-vapor-yellow">Playtesters wanted</h3>
        <p className="text-coastal-sand">
          We&apos;re polishing over the next few weeks. Want in on the private playtest? Join the Discord and say hi in #hotset, or send feedback to{' '}
          <a href="mailto:feedback@biloxistudios.com" className="text-vapor-blue hover:text-vapor-pink">feedback@biloxistudios.com</a>.
        </p>
        <p className="text-coastal-sand/70 text-sm">BizaNator and RinEllaSky. Made in UEFN.</p>
      </div>
    </div>
  )
}
