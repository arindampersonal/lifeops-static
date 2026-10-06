import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const storiesFilePath = path.resolve(__dirname, '../src/data/stories.ts')

const sampleStoryImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=85',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85'
]

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
}

async function main() {
  const rl = readline.createInterface({ input, output })

  console.log('\n📖 --- Add New Story --- 📖\n')

  const title = (await rl.question('Story Title: ')).trim()
  if (!title) {
    console.error('❌ Title cannot be empty.')
    rl.close()
    return
  }

  const subtitle = (await rl.question('Subtitle: ')).trim() || 'A story of stillness and discovery'
  const today = new Date().toISOString().split('T')[0]
  const dateInput = (await rl.question(`Date [${today}]: `)).trim() || today
  const category = (await rl.question('Category [Peace / Kindness / Mindfulness / Wisdom / Solitude]: ')).trim() || 'Peace'
  const readTime = (await rl.question('Read time [5 min read]: ')).trim() || '5 min read'
  const excerpt = (await rl.question('Short Excerpt / Teaser: ')).trim()
  
  console.log('\nEnter story paragraphs (type END on a single line when done):')
  const paragraphs = []
  while (true) {
    const line = await rl.question('> ')
    if (line.trim().toUpperCase() === 'END') break
    if (line.trim().length > 0) {
      paragraphs.push(line.trim())
    }
  }

  if (paragraphs.length === 0 && excerpt) {
    paragraphs.push(excerpt)
  }

  const reflection = (await rl.question('\nReflection prompt: ')).trim() || 'What truth in this story resonates most with where you are today?'
  const randomImg = sampleStoryImages[Math.floor(Math.random() * sampleStoryImages.length)]
  const image = (await rl.question(`Cover Image URL [default scenic]: `)).trim() || randomImg

  rl.close()

  const id = slugify(title)

  const newEntry = `  {
    id: '${id}',
    title: ${JSON.stringify(title)},
    subtitle: ${JSON.stringify(subtitle)},
    date: '${dateInput}',
    readTime: '${readTime}',
    coverImage: '${image}',
    coverImageAlt: ${JSON.stringify(title)},
    category: '${category.replace(/'/g, "\\'")}',
    excerpt: ${JSON.stringify(excerpt || (paragraphs[0] || ''))},
    body: ${JSON.stringify(paragraphs, null, 6)},
    reflection: ${JSON.stringify(reflection)},
  },`

  let fileContent = fs.readFileSync(storiesFilePath, 'utf-8')
  const marker = 'export const stories: Story[] = ['

  if (!fileContent.includes(marker)) {
    console.error('❌ Could not find target array in stories.ts')
    return
  }

  fileContent = fileContent.replace(marker, `${marker}\n${newEntry}`)
  fs.writeFileSync(storiesFilePath, fileContent, 'utf-8')

  console.log(`\n✅ Story "${title}" successfully added to src/data/stories.ts!\n`)
}

main().catch(console.error)
