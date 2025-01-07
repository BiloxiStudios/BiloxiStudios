/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vapor-pink': '#FF71CE',
        'vapor-blue': '#01CDFE',
        'vapor-purple': '#B967FF',
        'vapor-yellow': '#FFFB96',
        'vapor-green': '#05FFA1',
        'coastal-sand': '#F5E6CA',
        'coastal-water': '#2B95FF',
        'coastal-sunset': '#FF6B6B'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-orbitron)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
