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
    title: 'StudioBrain.AI',
    description: 'AI-powered world building for game developers. Build your universe and keep it consistent with multi-provider generation and native ComfyUI support.',
    type: 'AI Tooling',
    link: 'https://studiobrain.ai'
  },
  {
    title: 'BrainDead.TV',
    description: 'Our flagship interactive streaming platform combining gaming and live entertainment.',
    type: 'Platform',
    link: 'https://braindead.tv'
  },
  {
    title: 'Gulf Coast Game Jam',
    description: 'Annual game development event bringing together creators from across the Gulf Coast.',
    type: 'Community Event'
  },
  {
    title: 'UEFN Experiences',
    description: 'Upcoming innovative multiplayer experiences built with Unreal Editor for Fortnite.',
    type: 'Games'
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
        {projects.map((project) => (
          <div key={project.title} className="vapor-card group">
            {project.imageUrl && (
              <div className="relative h-48 mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="space-y-4">
              <span className="text-vapor-pink text-sm font-medium">{project.type}</span>
              <h2 className="text-2xl font-display text-vapor-yellow group-hover:text-vapor-green transition-colors duration-300">
                {project.link ? (
                  <Link href={project.link}>{project.title}</Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-coastal-sand">{project.description}</p>
            </div>
          </div>
        ))}
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
