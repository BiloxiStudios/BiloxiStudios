/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              '&:hover': {
                color: '#FF71CE',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
