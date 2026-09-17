# Javier Pérez Urrutia — Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro-v5-FF5D01.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Deployed-F38020.svg?style=flat&logo=cloudflare&logoColor=white)](https://cloudflare.com)

A personal portfolio built for **Javier Pérez Urrutia**, Software Engineer & Full-Stack Developer. Designed with Japanese editorial minimalism (_Hankō_, clean serif typography, balanced negative space, and dual-language localization).

---

## ✨ Features

- **⚡ Blazing Fast Performance:** Powered by Astro's zero-JS-by-default architecture and static pre-rendering.
- **🌐 Bilingual Localization (EN / JA):** Seamless, zero-flicker switching between English and Japanese with `localStorage` persistence.
- **🌓 Dark & Light Modes:** Elegant contrast schemes with FOUC prevention (no theme flash on load).
- **📬 Secure Modular Contact Form:**
  - Client-side validation & anti-spam honeypot (`_gotcha`).
  - Anti-flooding rate limiting (30s cooldown).
  - Configurable webhook/worker endpoint via environment variables (`PUBLIC_CONTACT_FORM_URL`).
  - Live bilingual status alerts and character counter.
- **🎨 Modern Tailwind CSS v4:** Styled using native `@theme` design tokens and semantic variables.
- **🔒 Privacy-Conscious Resume:** Curated resume PDF with sensitive information (address and phone number) secured and redacted.
- **☁️ Cloudflare Ready:** Integrated with `@astrojs/cloudflare` and Wrangler for edge-network deployment.

---

## 🛠️ Tech Stack

| Technology                                                        | Role                                                                      |
| :---------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **[Astro](https://astro.build)**                                  | Core web framework & static site generator                                |
| **[TypeScript](https://www.typescriptlang.org/)**                 | Type safety and structured data                                           |
| **[Tailwind CSS v4](https://tailwindcss.com)**                    | Utility-first styling with theme tokens                                   |
| **[Cloudflare Pages / Workers](https://workers.cloudflare.com/)** | Edge hosting & deployment                                                 |
| **[Google Fonts](https://fonts.google.com/)**                     | Typography (_Inter_, _Playfair Display_, _Noto Sans JP_, _Noto Serif JP_) |

---

## 📁 Project Structure

```text
astro_portafolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Optimized WebP project previews
│   │   └── profile.jpg        # Profile portrait
│   └── JavierCurriculum.pdf   # Public redacted resume
├── src/
│   ├── components/
│   │   ├── About.astro        # Biography & engineering path
│   │   ├── Contact.astro      # Contact section & social links
│   │   ├── ContactForm.astro  # Modular, secure contact form
│   │   ├── Experience.astro   # Professional timeline & education
│   │   ├── Footer.astro       # Footer & copyright
│   │   ├── Hero.astro         # Hero section & seal (Hankō)
│   │   ├── Navbar.astro       # Header navigation, theme & lang toggles
│   │   ├── Projects.astro     # Featured projects showcase
│   │   └── Skills.astro       # Technical skills & toolkits
│   ├── i18n/
│   │   └── translations.ts    # Centralized English & Japanese copy
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML document, Open Graph SEO & theme scripts
│   ├── pages/
│   │   └── index.astro        # Portfolio main entry page
│   └── index.css              # Tailwind imports & theme tokens
├── .env.example               # Environment variables template
├── astro.config.mjs           # Astro & adapter configuration
├── package.json               # Dependencies & build scripts
├── tsconfig.json              # TypeScript configuration
└── wrangler.jsonc             # Cloudflare deployment settings
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/peladno/astro_portafolio.git
   cd astro_portafolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Set your contact form receiver endpoint:
   ```env
   PUBLIC_CONTACT_FORM_URL="https://your-worker-or-form-service.com"
   ```

---

## 💻 Available Scripts

| Command           | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| `npm run dev`     | Starts the local dev server at `http://localhost:3000`       |
| `npm run build`   | Compiles the project into optimized static assets in `dist/` |
| `npm run preview` | Previews the production build locally                        |
| `npm run lint`    | Runs type-checking using `tsc --noEmit`                      |
| `npm run clean`   | Cross-platform clean of `dist/` and build artifacts          |
| `npm run deploy`  | Builds the project and deploys to Cloudflare via Wrangler    |

---

## ☁️ Deployment

This project is configured for **Cloudflare Pages / Workers** using `@astrojs/cloudflare` and `wrangler`:

```bash
npm run deploy
```

Alternatively, push to your connected Git repository on the Cloudflare Dashboard with build settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## 👤 Author

**Javier Pérez Urrutia**

- **GitHub:** [@peladno](https://github.com/peladno)
- **LinkedIn:** [Javier Pérez Urrutia](https://www.linkedin.com/in/javier-perez-u/)
- **Email:** [j.perezurrutia@gmail.com](mailto:j.perezurrutia@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
