# 🚀 Alfan Umar Faruq - Portfolio Website

Portfolio website profesional untuk seorang Full-Stack Developer yang dibuat dengan teknologi modern dan design yang elegan.

## ✨ Fitur Utama

### 🎨 **Design & UX**
- **Dark/Light Mode Toggle** - Switch tema dengan animasi smooth
- **Responsive Design** - Optimal di semua device (desktop, tablet, mobile)
- **Modern UI/UX** - Design profesional dengan animasi dan transitions
- **Professional Color Scheme** - Palet warna biru tua, putih, dan aksen neon

### 📄 **Halaman & Konten**
- **Home (Beranda)** - Hero section dengan CTA buttons dan social links
- **About (Tentang)** - Profil, keahlian teknis, pengalaman profesional, dan prestasi
- **Projects (Proyek)** - Galeri proyek dengan filter kategori dan teknologi
- **Contact (Kontak)** - Form kontak interaktif dan informasi media sosial

### 🔧 **Fitur Interaktif**
- Navbar responsif dengan active states
- Contact form dengan validasi dan feedback
- Project filter dengan kategori teknologi
- Animasi hover dan loading states
- Social media integration

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Library utama untuk UI components
- **TypeScript** - Type safety dan developer experience
- **Vite 6.0.1** - Build tool yang cepat dengan HMR

### **Styling & UI**
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **Lucide React** - Icon library modern dan konsisten
- **next-themes** - Theme switching (dark/light mode)
- **Custom CSS** - Animasi dan styling tambahan

### **Routing & State Management**
- **React Router DOM 6** - Client-side routing
- **React Hooks** - State management (useState, useEffect)
- **Context API** - Theme management

### **Form Handling & Validation**
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Custom validation** - Form feedback dan error handling

### **Developer Tools**
- **ESLint** - Code linting dan quality assurance
- **TypeScript ESLint** - Type-aware linting rules
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Struktur Proyek

```
developer-portfolio/
├── public/
│   ├── images/          # Gambar assets (profile, projects, backgrounds)
│   ├── favicon.svg      # Icon website
│   └── index.html       # HTML template dengan SEO meta tags
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx   # Navigation bar dengan theme toggle
│   │   └── ErrorBoundary.tsx # Error handling component
│   ├── pages/          # Page components
│   │   ├── Home.tsx    # Landing page dengan hero section
│   │   ├── About.tsx   # Profile dan keahlian developer
│   │   ├── Projects.tsx # Portfolio proyek dengan filter
│   │   └── Contact.tsx # Form kontak dan social media
│   ├── App.tsx         # Main app dengan routing dan theme provider
│   ├── main.tsx        # Entry point aplikasi
│   └── index.css       # Global styles dan custom animations
├── tailwind.config.js  # Konfigurasi Tailwind CSS
├── vite.config.ts      # Konfigurasi Vite build tool
└── package.json        # Dependencies dan scripts
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm atau pnpm package manager
- Git untuk version control

### **Installation & Setup**

```bash
# Clone repository
git clone https://github.com/username/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install
# atau menggunakan pnpm
pnpm install

# Jalankan development server
npm run dev
# atau
pnpm dev

# Build untuk production
npm run build
# atau  
pnpm build

# Preview production build
npm run preview
# atau
pnpm preview
```

### **Available Scripts**
- `npm run dev` - Development server dengan hot reload (http://localhost:5173)
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint untuk code quality check

## 🎨 Customization Guide

### **Mengubah Informasi Personal**
1. Edit data di `src/pages/Home.tsx` untuk hero section
2. Update profile dan pengalaman di `src/pages/About.tsx`
3. Modifikasi daftar proyek di `src/pages/Projects.tsx`
4. Sesuaikan informasi kontak di `src/pages/Contact.tsx`

### **Mengganti Color Scheme**
```css
/* src/index.css */
:root {
  --primary-blue: #2563eb;
  --secondary-purple: #7c3aed;
  --accent-neon: #06d6a0;
}
```

### **Menambah Gambar Assets**
1. Letakkan gambar di folder `public/images/`
2. Reference dengan path `/images/filename.jpg`
3. Untuk project images, update path di `projects` array

### **Custom Animations**
Tambahkan custom animations di `src/index.css`:
```css
@keyframes customAnimation {
  /* keyframe definitions */
}
.custom-animation {
  animation: customAnimation 2s ease-in-out;
}
```

## 📊 Performance & SEO

### **Optimizations Implemented**
- **Image Optimization** - Lazy loading dan proper sizing
- **Code Splitting** - Dynamic imports untuk better loading
- **Font Loading** - Google Fonts dengan `display=swap`
- **CSS Optimization** - PurgeCSS melalui Tailwind
- **Bundle Analysis** - Optimized chunk sizes

### **SEO Features**
- Meta tags lengkap untuk social sharing
- Open Graph dan Twitter Card support
- Semantic HTML structure
- Accessible navigation dan form elements
- Mobile-friendly responsive design

## 🔧 Development Best Practices

### **Code Quality**
- **TypeScript** untuk type safety
- **ESLint** untuk consistent code style
- **Component-based architecture** untuk reusability
- **Custom hooks** untuk logic sharing
- **Error boundaries** untuk graceful error handling

### **Performance**
- **React.memo** untuk expensive component re-renders
- **useCallback** dan **useMemo** untuk optimization
- **Lazy loading** untuk images dan components
- **Efficient re-renders** dengan proper state management

### **Accessibility**
- WCAG 2.1 compliance
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios
- Focus management

## 🚢 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### **Netlify**
```bash
# Build project
npm run build

# Deploy dist folder to Netlify
# atau connect GitHub repository untuk auto-deploy
```

### **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run build && npm run deploy
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - Untuk framework yang luar biasa
- **Tailwind CSS** - Untuk utility-first CSS framework
- **Lucide** - Untuk beautiful icon set
- **Vite Team** - Untuk build tool yang super cepat

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: muhammad.developer@email.com
- 💬 WhatsApp: +62 812-3456-7890
- 🐙 GitHub: [@muhammad-dev](https://github.com/muhammad-dev)
- 💼 LinkedIn: [Muhammad Developer](https://linkedin.com/in/muhammad-developer)

---

**Built with ❤️ by Muhammad Developer** | **© 2024 All Rights Reserved**
