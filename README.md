# The Great Me - Product Landing Page

An Apple-style product landing page for "The Great Me - Special Task Force" iOS app, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Apple-Style Design**: Clean, minimalist design inspired by Apple's product pages
- **Bilingual Support**: Seamlessly switch between English and Chinese
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 16 and Turbopack for optimal performance
- **Smooth Animations**: Floating animations, hover effects, and smooth scrolling
- **Screenshot Gallery**: Beautiful showcase of the app's interface

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)
- **Deployment Ready**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar with language switcher
│   ├── Hero.tsx            # Hero section with screenshots
│   ├── Features.tsx        # Features grid
│   ├── Screenshots.tsx     # Screenshot gallery
│   └── Footer.tsx          # Footer with download CTA
├── lib/
│   └── translations.ts     # Bilingual translations
└── public/                 # Static assets
```

## Key Components

### Navbar
- Fixed navigation bar with backdrop blur
- Language switcher (EN/中文)
- Smooth scroll to sections

### Hero
- Animated gold coin logo
- App title and description
- Three featured screenshots
- Download CTA button

### Features
- 6 feature cards with icons:
  - Daily Agent Missions
  - Gamified Experience
  - AI Assistant
  - Weekly Tracking
  - Voice Narration
  - Bilingual Support

### Screenshots
- Horizontal scrollable gallery
- 5 app screenshots with captions
- Dark background with gradient effects

### Footer
- Download section
- Copyright information

## Customization

### Adding/Editing Translations

Edit `lib/translations.ts`:

```typescript
export const translations: Record<Language, Translation> = {
  en: { /* English translations */ },
  zh: { /* Chinese translations */ }
};
```

### Updating Screenshots

1. Add screenshot URLs to the `screenshots` array in `components/Screenshots.tsx`
2. Update captions in `lib/translations.ts`

### Styling

Global styles are in `app/globals.css`. Component-specific styles use Tailwind utility classes.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Font optimization with next/font
- CSS-first Tailwind v4 for smaller bundle size
- Turbopack for faster development builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project for The Great Me app.

## Support

For issues or questions about the landing page, contact the development team.
# the-greate-me-web
