# EcoSort Website

A high-end, futuristic, animation-driven website for EcoSort - an AI-powered automatic waste-segregation system.

## Features

- 🎬 **Cinematic Loading Experience** - Animated transition from chaotic waste to clean segregation
- 🎨 **Full-Screen Sections** - Large, immersive 100vh sections with scroll-based storytelling
- ✨ **Rich Animations** - Fade, scale, parallax, pinning, and progressive reveals throughout
- 🌙 **Dark Futuristic Theme** - Eco-tech accents (green/teal/cyan) on dark background
- 📱 **Responsive Design** - Works beautifully on all screen sizes
- 🚀 **Performance Optimized** - Built with Next.js 14 and optimized animations

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations and transitions
- **React Intersection Observer** - Scroll-triggered animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage with all sections
│   ├── about/
│   │   └── page.tsx        # About Us page
│   └── globals.css         # Global styles
├── components/
│   ├── LoadingScreen.tsx   # Cinematic loading animation
│   ├── Navbar.tsx          # Fixed animated navigation
│   ├── HeroSection.tsx     # Full-screen hero
│   ├── ProblemSection.tsx  # Global waste crisis stats
│   ├── CurrentSolutionsSection.tsx  # Scroll-pinned failures
│   ├── TurningPointSection.tsx      # EcoSort introduction
│   ├── PipelineSection.tsx          # Segment-Detect-Confirm animation
│   ├── EnergySection.tsx            # Cost & energy comparison
│   ├── ImpactSection.tsx            # Real-world metrics
│   └── ScaleSection.tsx             # Government deployment
└── public/                 # Static assets
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `eco-green`: #00ff88
- `eco-teal`: #00d4aa
- `eco-cyan`: #00b8d4
- `eco-dark`: #0a0a0a
- `eco-darker`: #050505

### Team Members

Update team member information in `app/about/page.tsx`

### Content

All content is in the component files. Edit directly to update text, statistics, and descriptions.

## Performance Tips

- Animations are optimized with `useInView` to trigger only when visible
- Images should be optimized and placed in the `public` folder
- Consider using Next.js Image component for product visuals

## License

Private - EcoSort Project
