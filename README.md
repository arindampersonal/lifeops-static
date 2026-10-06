<div align="center">

# 🌿 LifeOps

### *Design a Life You Love Living*

An intentional living platform and personal sanctuary designed to help you cultivate mindful habits, meaningful relationships, inner peace, and everyday joy.

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Azure Static Web Apps](https://img.shields.io/badge/Azure_Static_Web_Apps-Deploy-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/services/app-service/static/)
[![License: MIT](https://img.shields.io/badge/License-MIT-82927B?style=for-the-badge)](LICENSE)

<br />

[✨ Explore Features](#-features) • [📖 Daily Stories](#-daily-stories--thoughts) • [🎨 Design System](#-editorial-design-system) • [🚀 Quick Start](#-getting-started) • [☁️ Azure Deployment](#️-azure-static-web-apps-deployment)

</div>

---

> *"We don't manage life like an enterprise spreadsheet; we curate it like a living garden — patient, deliberate, rooted, and beautifully human."*

---

## 🌟 Overview

**LifeOps** is an editorial slow-living and personal intentionality web application. Built with high aesthetic standards reminiscent of publications like *Kinfolk* and *Cereal*, it blends calming typography, earth-toned palettes, fluid animations, and interactive mindfulness tools.

Whether reading a quiet morning story, reflecting on the thought of the day, auditing your life balance via the interactive **Life Canvas**, or structuring grounding daily rituals, LifeOps offers a digital retreat away from noise and hustle culture.

---

## ✨ Features

### 🏛️ Core Experience
- **Cinematic Hero**: Warm editorial introduction with floating focus pillars and subtle atmospheric motion.
- **The Philosophy of LifeOps**: A manifesto on intentionality, stillness, deep connection, and mindful presence.
- **The 6 Core Pillars**:
  1. 🌿 **Health & Vitality** — Nourishing sleep, mindful movement, and restorative rest.
  2. 🕊️ **Inner Peace & Stillness** — Silence, breathwork, and unplugging from the digital noise.
  3. ☕ **Deep Relationships** — Quality over quantity, heartfelt presence, and listening.
  4. 🖋️ **Purpose & Craft** — Meaningful contribution over busywork and vanity metrics.
  5. 🧭 **Financial Simplicity** — Intentional spending, freedom over accumulation.
  6. 🎨 **Lifelong Curiosity** — Reading, nature walks, hobbies, and playful exploration.
- **Daily Rituals Timeline**: Interactive morning, midday, twilight, and evening routines.
- **The Imperfect Life**: Embracing *wabi-sabi*, vulnerability, and releasing toxic perfectionism.
- **Interactive Life Canvas**: A visual self-reflection tool to assess fulfillment across life domains with instant feedback and exportable insights.
- **Slow Living Photo Journal**: Curated visual sanctuary celebrating micro-moments.

---

### 📖 Daily Stories (`/stories` & `/stories/:id`)
A dedicated publication space for heart-warming, contemplative fiction and personal reflections.
- **Curated Reading Archive**: Browse stories filtered by read-time, date, and category (*Mindfulness, Resilience, Wisdom, Solitude, Wonder*).
- **Featured Cover Layout**: Hero spotlight for the latest release with preview cards for past entries.
- **Editorial Reading Mode**:
  - Immersive full-bleed cover imagery
  - Custom drop caps and typographic hierarchy
  - Dedicated **"Moment of Reflection"** contemplation box
  - Prev / Next story navigation controls
  - Social & copy link sharing

---

### 🌅 Thought of the Day (`/thought-of-the-day`)
A daily dose of wisdom paired with atmospheric photography:
- **Daily Automatic Selection**: Computes today's featured thought automatically based on the current calendar date.
- **Cinematic Quote Presentation**: Overlay typography on nature backdrops with full attribution and practical takeaway notes.
- **Interactive Carousel**: Step forward and backward through reflections seamlessly with fluid spring transitions.
- **Calendar Archive**: Browse past thoughts grouped by month in an elegant collapsible timeline.

---

## 🎨 Editorial Design System

LifeOps is engineered with a custom editorial design language prioritizing calm, readability, and subtle elegance:

| Token | Name | Hex Code | Visual Swatch | Purpose |
|:---|:---|:---|:---:|:---|
| `--color-cream` | Soft Cream | `#FDFBF7` | `⬜` | Page background & airy canvas |
| `--color-sage` | Muted Sage | `#82927B` | `🟩` | Primary brand accent & nature motif |
| `--color-terracotta` | Warm Terracotta | `#C4785A` | `🟧` | Warm interaction states & highlights |
| `--color-forest` | Deep Forest | `#2D3A2F` | `🌲` | High-contrast dark cards & footer |
| `--color-charcoal` | Charcoal | `#2C2C2C` | `⬛` | Primary typography for effortless reading |
| `--color-sand` | Warm Sand | `#EBE5DC` | `🟫` | Subtle borders, dividers & badge fills |

### 🖋️ Typography Hierarchy
- **Display Headings**: *DM Serif Display* — Classic literary elegance, italic styling for poetic accents.
- **Body & Interface**: *Inter* — Crisp, legible geometric sans-serif tuned for modern screens.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/) (SPA layout with scroll preservation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variable tokens
- **Animations**: [Framer Motion 14](https://www.framer.com/motion/) (orchestrated stagger, page fade, hover spring)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Hosting & CI/CD**: [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/) via GitHub Actions

---

## 📂 Project Structure

```bash
lifeops-static-page/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-*.yml # GitHub Actions automated CI/CD
├── public/
│   ├── staticwebapp.config.json        # Azure SWA SPA navigation routing rules
│   ├── favicon.svg                     # Site icon
│   └── images/                         # Static visual assets
├── src/
│   ├── components/                     # Reusable UI sections & widgets
│   │   ├── DailyRituals.tsx            # Morning/Midday/Evening routines
│   │   ├── FinalCTA.tsx                # Newsletter / Closing call to action
│   │   ├── Footer.tsx                  # Router-aware navigation footer
│   │   ├── Hero.tsx                    # Main landing hero banner
│   │   ├── ImperfectLife.tsx           # Wabi-sabi & vulnerability section
│   │   ├── Journal.tsx                 # Reflective prompts section
│   │   ├── LifeCanvas.tsx              # Interactive life balance auditor
│   │   ├── Manifesto.tsx               # Intentional living manifesto
│   │   ├── Navbar.tsx                  # Sticky blurred header with dual mode
│   │   ├── Philosophy.tsx              # LifeOps core philosophy
│   │   ├── PillarSection.tsx           # The 6 life pillars
│   │   ├── ScrollReveal.tsx            # Framer Motion view-trigger helper
│   │   ├── SectionHeading.tsx          # Consistent typography heading wrapper
│   │   ├── SlowLivingGallery.tsx       # Photo gallery
│   │   ├── StoriesPreview.tsx          # Homepage preview of latest stories
│   │   └── ThoughtPreview.tsx          # Homepage preview of today's thought
│   ├── data/
│   │   ├── stories.ts                  # Story library & content database
│   │   └── thoughts.ts                 # Thought-of-the-day library & helpers
│   ├── hooks/
│   │   └── useActiveSection.ts         # Viewport scroll spy for navigation
│   ├── pages/
│   │   ├── HomePage.tsx                # Main single-page scroll experience
│   │   ├── Layout.tsx                  # Shared header, footer & scroll reset
│   │   ├── StoriesPage.tsx             # All stories listing page
│   │   ├── StoryDetailPage.tsx         # Full reader view for single story
│   │   └── ThoughtOfTheDayPage.tsx     # Daily quote card & monthly archive
│   ├── App.tsx                         # Router configuration
│   ├── index.css                       # Design tokens & utility classes
│   └── main.tsx                        # React application entrypoint
├── index.html                          # HTML5 shell & Google Fonts preconnect
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript compiler options
└── vite.config.ts                      # Vite configuration & Tailwind plugin
```

---

## 📝 How to Add Daily Content

You have 3 easy ways to add content:
1. **Interactive CLI (Fastest)**: Run `npm run add:thought` or `npm run add:story` in your terminal.
2. **Ask AI Pair Programmer**: Simply tell Antigravity in chat: *"Add a new thought about X"* or *"Write a new story about Y"*.
3. **Direct Code Edit**: Copy & paste an existing object at the top of the array in `src/data/thoughts.ts` or `src/data/stories.ts`.

### 1. Adding a New Story (Manual Method)
Open [`src/data/stories.ts`](src/data/stories.ts) and add a new item to the `stories` array:

```typescript
{
  id: 'the-morning-fog',
  title: 'Walking into the Morning Fog',
  subtitle: 'How learning to see only three steps ahead cures future anxiety.',
  date: 'October 7, 2026',
  readTime: '3 min read',
  coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  coverImageAlt: 'Morning misty mountains',
  category: 'Mindfulness',
  excerpt: 'We often paralyze ourselves trying to see ten miles down the road...',
  body: [
    'Paragraph 1 of your story here...',
    'Paragraph 2 of your story here...',
  ],
  reflection: 'What is the single next step in front of you today?'
}
```

### 2. Adding a Thought of the Day
Open [`src/data/thoughts.ts`](src/data/thoughts.ts) and append a new thought to the `thoughts` array:

```typescript
{
  id: 'thought-2026-10-07',
  date: '2026-10-07',
  quote: 'Simplicity is not about having less. It is about making room for what matters.',
  author: 'Unknown',
  authorRole: 'Daily Reflection',
  image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
  imageAlt: 'Forest canopy illuminated by golden sunlight',
  category: 'Simplicity',
  note: 'Remove one non-essential obligation from your schedule today.'
}
```
> **Tip**: The algorithm in `getTodaysThought()` matches the current date string (`YYYY-MM-DD`). If a date is not found, it gracefully falls back to cycling through the archive by day-of-year so content is always fresh!

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArindamDutta1/lifeops-static-page.git
   cd lifeops-static-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

---

## 🔨 Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Starts the Vite local development server with HMR |
| `npm run add:thought` | Interactive prompt to add a new Thought of the Day |
| `npm run add:story` | Interactive prompt to add a new Story |
| `npm run build` | Runs TypeScript type-checking (`tsc -b`) and builds production assets to `/dist` |
| `npm run preview` | Previews the local production build in `/dist` |
| `npm run lint` | Runs the high-performance Oxlint linter across the project |

---

## ☁️ Azure Static Web Apps Deployment

This repository is configured for automated deployment to **Azure Static Web Apps** via GitHub Actions.

### ⚙️ Routing Configuration for Single Page Applications (SPA)
When navigating directly to deep client-side routes (like `/stories` or `/thought-of-the-day`), Azure Static Web Apps needs to redirect requests to `/index.html`. This is handled automatically by:

[`public/staticwebapp.config.json`](public/staticwebapp.config.json):
```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,svg}", "/favicon.svg", "/icons.svg", "/assets/*"]
  }
}
```

### 📋 GitHub Actions Workflow Configuration
Located at [`.github/workflows/azure-static-web-apps-*.yml`](.github/workflows/):

```yaml
app_location: "/"          # Path to source code
api_location: ""           # Optional API backend
output_location: "dist"    # Vite build output directory
```

When changes are pushed to the `main` branch, the workflow triggers automatically, compiles the code with `npm run build`, and publishes the site live.

---

## 🤝 Contributing

Contributions, feedback, and thoughtful ideas are always welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/mindful-addition`)
3. Commit your Changes (`git commit -m 'Add: mindful addition'`)
4. Push to the Branch (`git push origin feature/mindful-addition`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Crafted with 🤍 & intentionality by **[Arindam Dutta](https://github.com/ArindamDutta1)**

*“Take a deep breath. Slow down. You are right where you need to be.”*

</div>
