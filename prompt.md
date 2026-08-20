# Landing Page Prompts & Specifications

## Sentinel AI 3D Hero Landing Page Prompt

Create a full-screen dark hero landing page for a security company called "SENTINEL AI" using React, Vite, TypeScript, Tailwind CSS, shadcn/ui, and an embedded Spline 3D scene as the background. The tech stack uses @splinetool/react-spline and @splinetool/runtime for the 3D embed. Here is every detail:

### FONT:
Google Fonts "Sora" with weights 300, 400, 500, 600, 700. Load it in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
Set `font-sora` as the body font via Tailwind config: `fontFamily: { sora: ["Sora", "sans-serif"] }` and apply `font-sora antialiased` on body.

### COLOR THEME (all HSL CSS custom properties, dark only, no light mode):
- `--background: 0 0% 10%` (dark charcoal)
- `--foreground: 0 0% 96%` (near-white)
- `--primary: 119 99% 46%` (vivid green)
- `--primary-foreground: 0 0% 4%` (near-black)
- `--secondary: 0 0% 18%`
- `--secondary-foreground: 0 0% 96%`
- `--muted: 0 0% 16%`
- `--muted-foreground: 0 0% 60%`
- `--accent: 119 99% 46%` (same vivid green as primary)
- `--accent-foreground: 0 0% 4%`
- `--destructive: 0 84% 60%`
- `--border: 0 0% 20%`
- `--input: 0 0% 20%`
- `--ring: 119 99% 46%`
- `--radius: 0.5rem`
- `--nav-button: 0 0% 18%`
- `--hero-bg: 0 0% 8%` (the darkest background, nearly black)

### CUSTOM ANIMATIONS:
- `fade-up`: 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards
- `fade-in`: 0.5s ease-out forwards

### NAVBAR:
- Fixed top-0 left-0 right-0 z-50, horizontal flex, justify-between, padding px-8 lg:px-16 py-5
- Left: Logo text "SENTINEL"
- Center: Links: Services, About Us, Projects, Team, Contacts
- Right: "Get Quote" button

### HERO SECTION:
- Full screen bottom-left content
- Spline 3D Scene: `https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode`
- Heading: `SENTINEL AI` (with vivid green AI)
- Subheading: "We implement security correctly."
- Description: "Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast."
- CTAs: "Book a Call" and "Our Work"
- Trust line: "Trusted security partner. Columbus, OH. 12 systems deployed."
