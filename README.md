# Kushi T H — Personal Engineering Portfolio (Next.js App Router)

A high-performance personal developer portfolio and engineering case-study experience built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **TypeScript**.

Authentic to **Kushi T H**, Computer Science & Engineering (Data Science) undergraduate at CMR Institute of Technology, Bengaluru (CGPA: 9.13).

---

## 🎨 Design System & Strict Color Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Background** | `#F7F0E8` | Warm porcelain / earthenware oatmeal |
| **Text** | `#2B1F1A` | Deep roasted espresso |
| **Accent** | `#B5583C` | Warm terracotta rust for buttons, step markers, and highlights |
| **Muted** | `#E3D5C5` | Warm linen / clay for dividers, subtle borders, and backgrounds |
| **Hover Highlight** | `#6B8F71` | Sage forest moss green (activates exclusively on hover) |

### Typography via `next/font`
- **Headings**: `Fraunces` (warm, sculptural editorial serif)
- **Body**: `DM Sans` (clean, contemporary sans-serif)
- **Metadata & Counters**: `JetBrains Mono`

---

## ✨ Interactive Features & Behaviors

1. **Step-by-Step Photo / Project Flow**:
   - Numbered sequence of projects (Step 01, 02, 03, 04) that appears progressively via `IntersectionObserver`.
   - Each step features an interactive visual preview simulation, quantitative metric pills, and an architectural deep-dive trigger.
   - Chronological connective thread leading each step into the next.
2. **Hover Pop Effect**:
   - Class `.hover-pop`: `transform: translateY(-0.375rem) scale(1.05);` (`-translate-y-1.5 scale-105`), soft shadow, and `transition: 300ms ease-out`, with border turning to `#6B8F71`.
3. **Accessibility**:
   - Semantic landmarks, accessible focus rings, ARIA dialog modal, and full `@media (prefers-reduced-motion: reduce)` support.
4. **Additional Modules**:
   - **Sticky Navigation**: Monogram branding, smooth scrolling, resume CTA.
   - **Technical Capability Matrix**: Interactive category filtering across languages, frontend, data, and theoretical CS pillars.
   - **Academic & Sports Trajectory**: Asymmetric vertical timeline featuring 9.13 CGPA, volleyball captaincy, and SIH Hackathon 1st place.
   - **Testimonials & Endorsements**: Peer and faculty recommendations.
   - **FAQ Accordion**: Expandable answers to recruitment and availability questions.
   - **Contact Hub**: Instant one-click clipboard copying for email and phone, plus an interactive dispatch form.

---

## 🚀 Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Preview
```bash
npm run build
npm run start
```

---

## ☁️ Deployment on Vercel

This repository is ready for zero-configuration deployment to [Vercel](https://vercel.com):
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will auto-detect **Next.js**.
5. Click **Deploy**.
