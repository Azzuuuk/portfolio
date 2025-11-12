# Azaan Khan Portfolio

A production-ready personal portfolio showcasing venture strategy, product execution, and entrepreneurial experience.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics
- **SEO:** next-seo + next-sitemap
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── app/                      # Next.js 14 App Router
│   ├── (pages)/             # Route groups
│   │   ├── experience/
│   │   ├── ventures/
│   │   ├── case-studies/
│   │   ├── thesis/
│   │   ├── contact/
│   │   └── resume/
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx
│   ├── footer.tsx
│   └── ...
├── lib/                     # Utilities and data
│   ├── data.ts              # Seed data
│   ├── types.ts             # TypeScript types
│   ├── seo.ts               # SEO configuration
│   ├── schema.ts            # JSON-LD schemas
│   ├── utils.ts             # Helper functions
│   └── validations.ts       # Zod schemas
├── public/                  # Static assets
│   ├── logos/              # Company logos
│   ├── og-image.png        # Open Graph image
│   └── resume.pdf          # Your resume (add this)
└── styles/
    └── theme.css           # CSS custom properties
```

## 🎨 Customization

### 1. Update Personal Information

Edit `/lib/seo.ts` to update your name, email, and social links:

```typescript
export const siteMetadata: SiteMetadata = {
  title: 'Your Name — Your Title',
  description: 'Your description',
  url: 'https://yoursite.com',
  author: {
    name: 'Your Name',
    email: 'your@email.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourprofile',
  },
}
```

### 2. Update Content

Edit `/lib/data.ts` to modify:
- Experience entries
- Ventures
- Theses

### 3. Add Your Resume

Place your resume PDF at `/public/resume.pdf`

### 4. Replace Logo Placeholders

Add real company logos to `/public/logos/`

### 5. Update Colors

Modify CSS variables in `/styles/theme.css`:

```css
:root {
  --accent-1: 22 100% 60%; /* Your primary accent */
  --accent-2: 285 63% 68%; /* Your secondary accent */
}
```

## 🔌 Contact Form Setup

The contact form uses `/app/api/contact/route.ts`. To enable email sending:

1. Choose an email service (SendGrid, Resend, Nodemailer, etc.)
2. Add credentials to `.env.local`
3. Update the API route with your email service logic

Example with SendGrid:

```bash
# .env.local
SENDGRID_API_KEY=your_key_here
CONTACT_TO_EMAIL=your@email.com
```

## 📊 Analytics

### Vercel Analytics

Already configured. Just deploy to Vercel and analytics will work automatically.

### Google Analytics (Optional)

Add your GA ID to `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Then add the GA script to `app/layout.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [vercel.com](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Build the project:

```bash
npm run build
```

The static build will be in `.next/` directory. Deploy using your preferred hosting platform.

## ✅ Production Checklist

- [ ] Update all personal information in `/lib/seo.ts` and `/lib/data.ts`
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Replace logo placeholders with real company logos
- [ ] Configure contact form email service
- [ ] Add real content to case studies
- [ ] Set up custom domain
- [ ] Configure environment variables
- [ ] Test all links and forms
- [ ] Verify SEO meta tags
- [ ] Check mobile responsiveness
- [ ] Test in multiple browsers
- [ ] Run Lighthouse audit

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 💬 Support

If you have questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js, Tailwind CSS, and TypeScript
