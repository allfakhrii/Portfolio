# Design Direction: Al-Fakhri Portfolio

## 1. Identity & Overview
- **Name:** Fatih Al-Fakhri Muhammad (Al-Fakhri)
- **Role:** Full Stack Developer of Landexafy &bull; Data & IT Specialist of JP & CO &bull; Data Science Student at Telkom University Purwokerto
- **Audience:** High-value clients requiring custom web solutions, technical recruiters, founders, and collaborators
- **Aesthetic:** Editorial Minimalist & High-Tech. Clean architectural lines, razor-sharp typographic hierarchy, high-contrast dark surfaces, and deliberate engineering accents.

## 2. Design Dials
- **ENERGY:** 2 (Balanced - confident, professional, tech-forward, refined)
- **RHYTHM:** 2 (Structured grid with deliberate asymmetry between flagship projects, dense technical specs, and focused content)
- **MOTION:** 3 (Rich interactive motion: framer-motion scroll reveals, animated ambient orbs, card hover lifts, modal spring physics, and radar pings per explicit user directive)

## 3. Color Palette & Materials
- **Core Neutral Base (Dark):** Obsidian `#090a0f` and Surface Slate `#11131a`
- **Surface Elevation:** Card `#161922`, Card Border `rgba(255, 255, 255, 0.08)`, Hover Border `rgba(59, 130, 246, 0.3)`
- **Typography Contrast:** Primary Heading `#f8fafc` (21:1 contrast), Body `#cbd5e1` (11.5:1 contrast), Muted Technical `#94a3b8` (6.2:1 contrast)
- **Deliberate Accent:** Electric Cobalt `#2563eb` with Sapphire highlight `#38bdf8` (used strictly for primary CTA, active states, and focus rings)

## 4. Typography System
- **Display / Headings:** Space Grotesk / Plus Jakarta Sans - Bold, tight letter-spacing (`tracking-tight`), crisp hierarchy
- **Body:** Inter / System UI - Regular & Medium, balanced line-height (`leading-relaxed`)
- **Technical & Metrics:** JetBrains Mono - Monospace used strictly for code tags, project dates, and system metrics

## 5. Visual Hierarchy & Key Components
- **Hero:** Centered, confident typographic composition with status badge, authoritative headline, clear value proposition, dual CTAs, and quick credentials strip.
- **About:** Genuine personal journey (MAN Purbalingga to Telkom University Data Science, founding Landexafy), verified milestone facts, and high-fidelity portrait card.
- **Projects Showcase:** Interactive domain filter (All, Full-stack, Data & Geospatial, Client Works), expandable detail drawer / modal, live preview links, and clear tech badges.
- **Contact:** Real interactive inquiry form with field validation and immediate status feedback, plus direct email copy-to-clipboard and verified social links.

## 6. Explicit User Overrides (R-37 Protocol)
- **Continuous Tech Stack Marquee:** The owner explicitly requested a continuous scrolling marquee of programming toolchain logos in the Arsenal section (`MARQUEE_LOGOS`), paused on hover with edge gradient masks.
- **Logo Burst Preloader:** The owner explicitly preferred the signature burst preloader featuring radial logo expansion (`animate-burst`), animated headline typography, and circular clip-path reveal.
- **Rich Motion & Fluid Animations:** The owner explicitly requested extensive animations ("last banyakin animasiii, biar bagus"). Integrated Framer Motion staggered entrance animations on scroll, ambient glowing light drift, card hover physics, spring modals, and radar pulses across all sections.
