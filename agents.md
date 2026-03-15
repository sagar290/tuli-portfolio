# Project Context: Suborna Dash Tuli Portfolio

## Overview
This is a minimalist, elegant portfolio website for **Suborna Dash Tuli**, a professional Voiceover Artist and Poetry Reader. The design is sophisticated and artistic, using a soft color palette with high-impact typography.

## Technical Stack
- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **UI Architecture**: React components integrated into Astro.
- **Styling**: Tailwind CSS v4 (using the `@theme` block in CSS).
- **Content**: Markdown (stored in `src/content/services/`).
- **Icons**: Custom SVGs (SoundCloud, Facebook, YouTube, and Lucide-inspired service icons).

## Design System
- **Colors**:
  - `Cream`: `#fbfbf9` (Background)
  - `Charcoal`: `#2d2a26` (Text & Primary UI)
  - `Gold`: `#c5a880` (Accent & Logo details)
- **Typography**:
  - `Serif`: "Playfair Display" (Headings)
  - `Sans`: "Inter" (Body text)
- **Branding**:
  - Logo: `SDT` (Typography-based)
  - Style: Plenty of white space, subtle micro-animations, and uncompressed high-fidelity audio focus.

## Project Structure
- `/src/components/`:
  - `Hero.tsx`: Headline, bio, CTA, and social media thread.
  - `AudioGallery.tsx`: Interactive player with wave-inspired animations.
  - `Services.tsx`: Grid layout for expertise (Vocal Expertise).
  - `Pricing.tsx`: Investment plans (Artistic, Commercial, Audiobook).
  - `Testimonials.tsx`: Automatic slider for client feedback.
  - `ContactForm.tsx`: Simplified inquiry form.
- `/src/content/services/`: Markdown files for easy service management.
- `/src/styles/global.css`: Core theme and Tailwind v4 configuration.
- `/public/`:
  - `hero.jpg`: Main avatar image.
  - `/demos/`: (Action Required) Location for 320kbps MP3 samples.

## Key Development Notes
1. **Hydration Strategy**: Interactive components like `AudioGallery` and `Testimonials` use `client:visible` for performance. Purely static components like `Hero` and `Services` are rendered as HTML only.
2. **SEO**: Configured with meta descriptions and specific keywords (Female Voiceover Artist, Poetry Narrator).
3. **Audio Handling**: Players are designed to use high-quality, lossless-grade MP3s.

## Current Status
- Site logo and branding updated to "Suborna Dash Tuli" (SDT).
- Social media links (SoundCloud, Facebook, YouTube) added to Hero and Footer.
- Project initialized with Git and an initial commit has been made.
