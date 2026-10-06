import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const thoughtsFilePath = path.resolve(__dirname, '../src/data/thoughts.ts')

const sampleImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=85',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=85',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=85',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=85'
]

async function main() {
  const rl = readline.createInterface({ input, output })

  console.log('\n🌿 --- Add New Thought of the Day --- 🌿\n')

  const today = new Date().toISOString().split('T')[0]
  const dateInput = (await rl.question(`Date [${today}]: `)).trim() || today
  const thought = (await rl.question('Thought / Quote: ')).trim()
  if (!thought) {
    console.error('❌ Thought quote cannot be empty.')
    rl.close()
    return
  }

  const author = (await rl.question('Author [LifeOps]: ')).trim() || 'LifeOps'
  const category = (await rl.question('Category [Presence / Peace / Intention / Resilience]: ')).trim() || 'Presence'
  const reflection = (await rl.question('Reflection prompt (optional): ')).trim()
  const randomImg = sampleImages[Math.floor(Math.random() * sampleImages.length)]
  const image = (await rl.question(`Image URL [default nature]: `)).trim() || randomImg

  rl.close()

  const id = `thought-${dateInput}`

  const newEntry = `  {
    id: '${id}',
    date: '${dateInput}',
    thought: ${JSON.stringify(thought)},
    author: '${author.replace(/'/g, "\\'")}',
    image: '${image}',
    imageAlt: 'Contemplative scenic landscape',
    category: '${category.replace(/'/g, "\\'")}',
    reflection: ${JSON.stringify(reflection || 'Take a moment today to sit with this reflection.')},
  },`

  let fileContent = fs.readFileSync(thoughtsFilePath, 'utf-8')
  const marker = 'export const thoughts: ThoughtOfTheDay[] = ['

  if (!fileContent.includes(marker)) {
    console.error('❌ Could not find target array in thoughts.ts')
    return
  }

  fileContent = fileContent.replace(marker, `${marker}\n${newEntry}`)
  fs.writeFileSync(thoughtsFilePath, fileContent, 'utf-8')

  console.log(`\n✅ Thought for ${dateInput} successfully added to src/data/thoughts.ts!\n`)
}

main().catch(console.error)
