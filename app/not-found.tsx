import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="vapor-card text-center max-w-xl mx-auto space-y-6">
        <h1 className="vapor-text text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-display text-vapor-yellow">Page Not Found</h2>
        
        <div className="glitch-text relative">
          <p className="text-coastal-sand text-lg">
            Looks like you've ventured into uncharted waters...
          </p>
        </div>

        <div className="pt-6">
          <Link 
            href="/" 
            className="inline-block bg-vapor-purple/20 hover:bg-vapor-purple/30 text-vapor-yellow px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Return to Shore
          </Link>
        </div>

        <div className="absolute w-full h-full top-0 left-0 pointer-events-none opacity-50"
             style={{
               background: 'linear-gradient(45deg, transparent 65%, var(--vapor-pink) 100%)',
               mixBlendMode: 'overlay',
             }}
        />
      </div>
    </div>
  )
}
