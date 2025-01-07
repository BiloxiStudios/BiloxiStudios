# Biloxi Studios Website 🌊

A modern, vaporwave-inspired website for Biloxi Studios - creating and educating the Gulf Coast through cooperative and multiplayer gaming experiences. Home of BrainDead.TV.

## Features
- Modern Next.js-based static site
- Vaporwave aesthetic with coastal Mississippi flair
- Dynamic blog/content system using Markdown files
- Easy content management through file-based posts
- Responsive design for all devices

## Tech Stack
- Next.js 13+ with App Router
- TypeScript
- TailwindCSS for styling
- MDX for Markdown content
- GitHub Pages / Vercel deployment

## Project Structure
```
/app             # Next.js app directory
/components      # Reusable React components
/content/posts   # Markdown blog posts
/public          # Static assets
/styles          # Global styles and theme
```

## Development
1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Adding new posts:
- Create a new folder in `/content/posts/[post-name]`
- Add `index.md` with front matter and content
- Include any images in the same folder

## Deployment
The site automatically deploys to Vercel on push to main branch or preview on dev.
