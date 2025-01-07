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

The site automatically deploys to Vercel on push to main branch.

### Environment Setup

1. Create a new project on Vercel

2. Link your GitHub repository

3. Configure the following environment variables in Vercel:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://biloxistudios.com
   NEXT_PUBLIC_GA_ID=your_ga_id_here
   ```

### Manual Deployment

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Start production server
npm start
```

### Development Workflow

1. Clone the repository

   ```bash
   git clone https://github.com/BiloxiStudios/BiloxiStudios.git
   cd BiloxiStudios
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server

   ```bash
   npm run dev
   ```

4. Create new content

   - Add blog posts in `/content/posts/[post-name]/index.md`

   - Include images in the same folder as the markdown file

   - Front matter format:

     ```yaml
     ---
     title: 'Post Title'
     date: 'YYYY-MM-DD'
     author: 'Author Name'
     excerpt: 'Brief description'
     coverImage: 'image.jpg'
     ---
     ```

### Build Analysis

To analyze the bundle size:

```bash
npm run analyze
```

### Code Formatting

Format code using Prettier:

```bash
npm run format
```

### Production Checks

Before deploying:

1. Run linting: `npm run lint`
2. Build locally: `npm run build`
3. Test production build: `npm start`
