export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="vapor-card text-center p-8 relative overflow-hidden">
        <div className="space-y-4">
          <h2 className="vapor-text text-2xl font-display animate-pulse">Loading...</h2>
          <p className="text-coastal-sand">Synthesizing digital waves...</p>
        </div>

        {/* Animated gradient border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-vapor-pink via-vapor-blue to-vapor-purple animate-[spin_3s_linear_infinite] opacity-75 blur" />
        
        {/* Loading spinner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 border-4 border-vapor-blue border-t-vapor-pink rounded-full animate-spin" />
        </div>
        
        {/* Retro grid background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(transparent 0%, var(--vapor-purple) 2%, transparent 5%),
              linear-gradient(90deg, transparent 0%, var(--vapor-blue) 2%, transparent 5%)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  )
}
