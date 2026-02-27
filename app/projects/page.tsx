import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  type: string
  imageUrl?: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'City of Brains Series',
    description: 'An interactive animated series powered by Showrunner where the community holds the pen. Vote on Discord to shape the universe.',
    type: 'Animated Series',
    link: '/projects/city-of-brains-series',
    imageUrl: '/images/TvGuide_CityOfBrainsTvsHit.png'
  },
  {
    title: 'RewinDead',
    description: 'A point-and-click adventure set in the City of Brains universe. Collect haunted VHS tapes to uncover what really happened before the broadcast ends.',
    type: 'UEFN Game',
    link: '/projects/rewindead',
    imageUrl: 'https://cdn-0001.qstv.on.epicgames.com/kqpTWvTMxkmYWNKWmc/image/landscape_comp.jpeg'
  },
  {
    title: 'City of Brains - Chapter 1',
    description: 'The first playable chapter in the City of Brains universe. Survive the neon-drenched streets and uncover the truth.',
    type: 'UEFN Game',
    link: '/projects/city-of-brains-chapter-1',
    imageUrl: '/images/CityOfBrainsInteractiveAnimatedShowPilot_Thumbnail_YoutubeResized.png'
  },
  {
    title: 'ELJ Arena',
    description: 'A prequel to the outbreak. Step into the arena and witness the most violent act since the 1998 Circus.',
    type: 'UEFN Game',
    link: '/projects/elj-arena'
  },
  {
    title: 'StudioBrain.AI',
    description: 'AI-powered world building for game developers. Build your universe and keep it consistent with multi-provider generation and native ComfyUI support.',
    type: 'AI Tooling',
    link: 'https://studiobrain.ai',
    imageUrl: '/images/StudioBrain_Logo_Transparent.png'
  },
  {
    title: 'BrainDead.TV',
    description: 'The window into the BrainDead Universe. Where horror "meats" comedy in a 1998 neon and amber-lit fog.',
    type: 'Universe Hub',
    link: 'https://braindead.tv'
  },
  {
    title: 'Gulf Coast Game Jam',
    description: 'Annual game development event bringing together creators from across the Gulf Coast.',
    type: 'Community Event'
  }
]

export default function Projects() {
  return (
    <div className="py-16">
      <header className="text-center mb-16">
        <h1 className="vapor-text text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-coastal-sand text-xl max-w-2xl mx-auto">
          Exploring the intersection of gaming, education, and community through innovative experiences
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const CardContent = (
            <>
              {project.imageUrl ? (
                <div className="relative h-48 mb-4 bg-black/50 rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative h-48 mb-4 bg-gradient-to-br from-vapor-purple/20 to-vapor-blue/20 rounded-lg overflow-hidden flex items-center justify-center border border-white/10">
                  <span className="text-4xl opacity-50">🎮</span>
                </div>
              )}
              
              <div className="space-y-4">
                <span className="text-vapor-pink text-sm font-medium font-mono tracking-wider">{project.type}</span>
                <h2 className="text-2xl font-display text-vapor-yellow group-hover:text-vapor-green transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-coastal-sand leading-relaxed">{project.description}</p>
                {project.link && (
                  <div className="pt-2 text-vapor-blue group-hover:text-vapor-pink transition-colors font-bold text-sm tracking-widest">
                    EXPLORE →
                  </div>
                )}
              </div>
            </>
          )

          return project.link ? (
            <Link 
              href={project.link} 
              key={project.title} 
              className="vapor-card group block hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,103,255,0.2)]"
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {CardContent}
            </Link>
          ) : (
            <div key={project.title} className="vapor-card group">
              {CardContent}
            </div>
          )
        })}
      </div>

      <div className="mt-16 vapor-card text-center">
        <h2 className="text-2xl font-display text-vapor-blue mb-4">Have a project in mind?</h2>
        <p className="text-coastal-sand mb-6">
          We're always open to new collaborations and exciting projects.
        </p>
        <a 
          href="https://discord.gg/fWHBt5kyjj" 
          className="inline-block bg-vapor-purple/20 hover:bg-vapor-purple/30 text-vapor-yellow px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}
