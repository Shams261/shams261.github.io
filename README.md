# ✨ Modern Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.7-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<br />

<div align="center">
  <p>A sleek, performant portfolio website showcasing modern web development skills with smooth animations and responsive design.</p>
  
  <strong>🌐 <a href="https://shams261-github-io.vercel.app/">View Live Site</a></strong>
</div>

---

## 🚀 Features

- **⚡ Ultra-fast Performance** - Built with Next.js 15 and optimized for speed
- **📱 Responsive Design** - Seamless experience across all devices
- **🎬 Smooth Animations** - Beautiful Framer Motion animations throughout
- **🎨 Modern UI/UX** - Clean, minimalist design with attention to detail
- **🔧 Type Safety** - Full TypeScript implementation
- **📊 Skills Showcase** - Optimized, icon-free tech stack display
- **💼 Project Portfolio** - Dynamic project showcase with live demos
- **📫 Contact Integration** - Interactive contact form with validation
- **🎯 SEO Optimized** - Meta tags, structured data, and performance optimized

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing and enhanced developer experience
- **React 19** - Latest React features and optimizations

### Styling & Animation

- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Responsive Design** - Mobile-first approach

### Development Tools

- **ESLint** - Code linting and quality checks
- **Turbopack** - Fast bundler for development
- **React DevTools** - Development debugging

### Deployment

- **Vercel** - Edge network deployment with automatic CI/CD

---

## 📁 Project Structure

```
portfolio-website/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── globals.css           # Global styles and Tailwind imports
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Homepage component
│   ├── 📂 components/            # Reusable UI components
│   │   ├── ClientOnly.tsx        # Client-side rendering wrapper
│   │   ├── Header.tsx            # Navigation header with smooth scrolling
│   │   ├── Hero.tsx              # Landing section with typewriter effect
│   │   ├── Skills.tsx            # Optimized tech stack showcase
│   │   ├── Experience.tsx        # Professional background timeline
│   │   ├── Services.tsx          # Services and capabilities
│   │   ├── Projects.tsx          # Portfolio project showcase
│   │   └── Footer.tsx            # Contact form and social links
│   └── 📂 utils/                 # Utility functions
│       └── imagePreloader.ts     # Image optimization utilities
├── 📂 public/                    # Static assets
├── 📄 next.config.js             # Next.js configuration
├── 📄 tailwind.config.js         # Tailwind CSS customization
├── 📄 tsconfig.json              # TypeScript configuration
└── 📄 package.json               # Project dependencies
```

---

## 🚦 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm** 9+
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build production-ready application      |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint for code quality checks      |

---

## 🎨 Customization

### Personalizing Content

1. **Update personal information** in `src/components/Hero.tsx`
2. **Modify skills** in `src/components/Skills.tsx`
3. **Add your projects** in `src/components/Projects.tsx`
4. **Update experience** in `src/components/Experience.tsx`
5. **Configure contact info** in `src/components/Footer.tsx`

### Styling Customization

- **Colors**: Edit `tailwind.config.js` for custom color palette
- **Fonts**: Update `src/app/layout.tsx` for typography changes
- **Animations**: Modify Framer Motion variants in components
- **Layout**: Adjust responsive breakpoints and spacing

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## 📈 Performance Optimizations

- **⚡ Fast Initial Load** - Optimized bundle size (157kb First Load JS)
- **🖼️ Image Optimization** - Next.js automatic image optimization
- **🎯 Code Splitting** - Automatic route-based code splitting
- **📱 Mobile Performance** - Optimized for mobile Core Web Vitals
- **🚀 Edge Deployment** - Vercel Edge Network for global performance

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub** repository
2. **Connect to Vercel** and import project
3. **Auto-deploy** on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📝 License

This project is **MIT Licensed** - see the [LICENSE](LICENSE) file for details.

---

## 💼 Contact & Connect

<div align="center">
  <p>Built with ❤️ using modern web technologies</p>
  <p>
    <strong>🌐 <a href="https://shams261-github-io.vercel.app/">Portfolio</a></strong> •
    <strong>💼 <a href="https://www.linkedin.com/in/shamstabrez-ca/">LinkedIn</a></strong> •
    <strong>🐙 <a href="https://github.com/Shams261">GitHub</a></strong>
  </p>
</div>

---

<div align="center">
  <sub>⭐ Star this repo if you found it helpful!</sub>
</div>
