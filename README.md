# Vidyodaya School Website

A modern, interactive, and responsive school website built with React, TypeScript, and Tailwind CSS. Designed for Indian schools with a focus on holistic education, innovation, and community values.

![Vidyodaya School](public/hero-girl.jpg)

## Features

### Sections Included
- **Home**: Hero banner with inspiring tagline, CTAs, highlights, and stats
- **About Us**: Vision & Mission, educational philosophy, core values
- **Academics**: Curriculum overview, grade structure, teaching approach, labs
- **Admissions**: Process timeline, requirements, interactive enquiry form
- **Campus Life**: Clubs, sports, arts, yoga, community service
- **News & Notices**: Dynamic notice board with category filters
- **Gallery**: Image grid with modal lightbox and filters
- **Contact**: Address, Google Map embed, working contact form
- **Footer**: Newsletter signup, quick links, social media

### Technical Features
- Responsive design (mobile-first approach)
- Smooth scroll animations and transitions
- Interactive forms with validation
- Image gallery with lightbox
- Category filtering for news and gallery
- Accessibility friendly (ARIA labels, keyboard navigation)
- SEO-ready meta tags
- Fast loading with optimized assets

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Fraunces (headings), Inter (body)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the project:
```bash
cd vidyodaya-school
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
├── public/                 # Static assets (images, fonts)
│   ├── hero-girl.jpg
│   ├── about-student.jpg
│   └── ...
├── src/
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── CampusLife.tsx
│   │   ├── Testimonials.tsx
│   │   ├── NewsNotices.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/ui/     # shadcn/ui components
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --brand-blue: #00457c;
  --brand-orange: #f36b25;
  --brand-dark-blue: #002a5c;
  /* ... */
}
```

### Updating Content
1. **Text Content**: Edit the respective section files in `src/sections/`
2. **Images**: Replace images in the `public/` folder
3. **Contact Info**: Update in `src/sections/Contact.tsx` and `src/sections/Footer.tsx`

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add it to `App.tsx`
3. Add a corresponding navigation link in `Navigation.tsx`

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist/` folder to Netlify's deploy page.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist/` folder to your web server.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

This website follows WCAG 2.1 guidelines:
- Keyboard navigation support
- ARIA labels for interactive elements
- Color contrast compliance
- Reduced motion support for animations
- Screen reader friendly

## Performance

- Lazy loading for images
- Optimized bundle size
- CSS animations (GPU accelerated)
- Minimal JavaScript for interactions

## License

This project is created for educational purposes. Feel free to customize and use it for your school.

## Support

For any questions or issues, please contact:
- Email: info@vidyodaya.edu.in
- Phone: +91 98765 43210

---

Built with ❤️ for Vidyodaya School
