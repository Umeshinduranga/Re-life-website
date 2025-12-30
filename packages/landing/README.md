# RE-LIFE Landing Page

A futuristic, dark-themed landing page for RE-LIFE - Your AI Powered Companion for Addiction Recovery. Built with React and Tailwind CSS featuring advanced animations, video backgrounds, and glassmorphism design.

## ✨ Features

- 🌑 Dark monochromatic theme with cyan, purple, and orange accents
- 📱 Fully responsive design
- 🎥 Video background with overlay effects
- 🎯 Comprehensive sections:
  - **Hero Section** - Immersive video background with animated CTA
  - **Chat Interface Demo** - Real-time typing animation showcase
  - **Problems Section** - Addiction challenges visualization
  - **Solution Section** - AI-powered recovery approach
  - **Features Section** - 6 key features with hover effects
  - **How It Works** - Step-by-step process with scroll animations
  - **Technology Section** - RAG AI technology explanation
  - **FAQ Section** - Expandable accordions for common questions
- ⚡ Smooth scroll-triggered animations
- 🎭 Interactive glassmorphism cards with hover effects
- 🔄 Modern futuristic UI with gradient overlays
- 🎨 Custom animations and transitions

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
Landing page/
├── public/
│   ├── index.html
│   └── videos/
│       └── background.mp4
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Futuristic glassmorphism navbar
│   │   ├── HeroSection.jsx         # Video background hero
│   │   ├── ChatSection.jsx         # AI chat demo with typing animation
│   │   ├── ProblemsSection.jsx     # Addiction challenges grid
│   │   ├── SolutionSection.jsx     # AI solution showcase
│   │   ├── FeaturesSection.jsx     # 6 key features
│   │   ├── HowItWorksSection.jsx   # Step-by-step process
│   │   ├── TechnologySection.jsx   # RAG technology explanations
│   │   └── FAQSection.jsx          # Expandable FAQ accordions
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Icons** - Icon library (Bootstrap Icons)
- **PostCSS & Autoprefixer** - CSS processing
- **Intersection Observer API** - Scroll animations
- **CSS Animations** - Custom keyframe animations

## Design System

### Color Palette
- **Primary Colors:**
  - Cyan: `#06b6d4` (rgb(6, 182, 212))
  - Purple: `#a855f7` (rgb(168, 85, 247))
  - Orange: `#f97316` (rgb(249, 115, 22))
  
- **Base Colors:**
  - Black: `#000000`
  - Gray-900: `#111827`
  - White: `#ffffff`
  
- **Accent Gradients:**
  - Cyan to Blue: `from-cyan-500 to-blue-500`
  - Purple to Pink: `from-purple-500 to-pink-500`
  - Orange to Amber: `from-orange-500 to-amber-500`

### Design Principles
- Glassmorphism effects with backdrop blur
- Dark monochromatic base with vibrant accents
- Smooth transitions and hover states
- Responsive grid layouts
- Scroll-triggered animations

## License

Private project - All rights reserved
