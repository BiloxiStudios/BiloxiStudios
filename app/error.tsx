'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="vapor-card text-center max-w-xl mx-auto space-y-6 relative overflow-hidden">
        <h1 className="vapor-text text-4xl font-bold">System Malfunction</h1>
        <div className="space-y-4">
          <p className="text-coastal-sand text-lg">
            Something went wrong in the digital waves...
          </p>
          <p className="text-vapor-pink/80 font-mono text-sm">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="pt-6">
          <button
            onClick={reset}
            className="inline-block bg-vapor-purple/20 hover:bg-vapor-purple/30 text-vapor-yellow px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>

        {/* Glitch effect overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                var(--vapor-pink) 0%,
                transparent 1px,
                transparent 3px
              )
            `,
            backgroundSize: '100% 3px',
            animation: 'glitch 1s infinite',
          }}
        />

        {/* Error code pattern */}
        <div className="absolute -bottom-4 -right-4 text-4xl font-mono text-vapor-purple/20 transform rotate-12">
          {'< / >'}
        </div>
      </div>
    </div>
  )
}
