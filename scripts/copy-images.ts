import { existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs'
import { join } from 'path'

const contentDir: string = join(process.cwd(), 'content/posts')
const publicDir: string = join(process.cwd(), 'public/images/posts')

function copyImages(): void {
  // Check if content directory exists
  if (!existsSync(contentDir)) {
    console.log('No content directory found, skipping image copy')
    return
  }

  // Create the public images directory if it doesn't exist
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true })
  }

  // Read all post directories
  const postDirs: string[] = readdirSync(contentDir)

  if (postDirs.length === 0) {
    console.log('No posts found in content directory')
    return
  }

  postDirs.forEach((postDir: string) => {
    const sourceDir: string = join(contentDir, postDir)
    const targetDir: string = join(publicDir, postDir)

    // Skip if not a directory
    if (!statSync(sourceDir).isDirectory()) return

    // Create target directory if it doesn't exist
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true })
    }

    // Copy all image files
    const files: string[] = readdirSync(sourceDir)
    files.forEach((file: string) => {
      const isImage: boolean = /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file)
      if (isImage) {
        const sourcePath: string = join(sourceDir, file)
        const targetPath: string = join(targetDir, file)
        copyFileSync(sourcePath, targetPath)
        console.log(`✓ Copied ${file} to public/images/posts/${postDir}/`)
      }
    })
  })

  console.log('✓ All images copied successfully!')
}

try {
  copyImages()
} catch (error) {
  console.error('Error copying images:', error)
  process.exit(1)
} 