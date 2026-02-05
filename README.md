# Sunrise Universal School Website 🌅

Official website for **Sunrise Universal School** — a modern, interactive, and responsive school platform built with React, TypeScript, and Tailwind CSS.

Designed for Indian schools with a focus on holistic education, innovation, discipline, and community values.

![Sunrise Universal School](public/hero-girl.jpg)

---

## ✨ Features

### 📚 Sections Included
- **Home**: Hero banner with inspiring tagline, CTAs, highlights, and stats  
- **About Us**: Vision & Mission, philosophy, core values  
- **Academics**: Curriculum overview, grade structure, teaching approach, labs  
- **Admissions**: Process timeline, requirements, enquiry form  
- **Campus Life**: Clubs, sports, arts, yoga, activities  
- **News & Notices**: CMS-powered notice board with filters  
- **Gallery**: Image grid with modal preview  
- **Contact**: Address, Google Map embed, working form  
- **Footer**: Quick links, social icons, newsletter

---

### ⚙️ Technical Highlights
- Responsive mobile-first design
- Smooth scroll animations
- Interactive forms with validation
- CMS integration using Sanity
- Category filtering
- Accessibility friendly
- SEO-ready
- Optimized performance

---

## 🧰 Tech Stack

- **Framework**: React 18 + TypeScript  
- **Build Tool**: Vite  
- **Styling**: Tailwind CSS  
- **UI Components**: shadcn/ui  
- **Icons**: Lucide React  
- **CMS**: Sanity  
- **Fonts**: Fraunces (Headings), Inter (Body)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

---

### Installation

1️⃣ Navigate to project:

```bash
cd sus-website
2️⃣ Install dependencies:

npm install
3️⃣ Start development server:

npm run dev
Open:

http://localhost:5173
📦 Build for Production
npm run build
Files will be generated in:

dist/
📁 Project Structure
├── public/
│   ├── hero.jpg
│   ├── team/
│   └── gallery/
├── src/
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── CampusLife.tsx
│   │   ├── NewsNotices.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── sanity.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
🎨 Customization
🎯 Colors
Edit:

src/index.css
:root {
  --brand-blue: #00457c;
  --brand-orange: #f36b25;
  --brand-dark-blue: #002a5c;
}
✏️ Content Updates
Text → src/sections/

Images → public/

Contact info → Contact.tsx & Footer.tsx

➕ Adding Sections
Create file in src/sections/

Import into App.tsx

Add nav link in Navigation.tsx

🌍 Deployment
▶️ Vercel (Recommended)
npm i -g vercel
vercel
Or connect GitHub → auto deploy.

▶️ Netlify
npm run build
netlify deploy --prod --dir=dist
▶️ Manual Hosting
Upload contents of dist/ to server.

🌐 Browser Support
Chrome

Firefox

Edge

Safari

♿ Accessibility
Keyboard navigation

ARIA labels

Proper contrast

Reduced motion

Screen-reader friendly

⚡ Performance
Lazy loading images

Optimized builds

Tailwind purge

CDN assets

📜 License
Created for Sunrise Universal School.
Free to customize and reuse for educational institutions.

📞 Contact
Sunrise Universal School
📍 Ratlam / Madhya Pradesh
📧 sus022017@gmail.com
📞 +91 9109001795, 9329824774