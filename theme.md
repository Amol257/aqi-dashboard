# Design Theme Extraction

Extracted from: AeroGlass — Air Quality Intelligence Dashboard  
Style: **Editorial Minimalism** — high-contrast monochromatic palette, serif display type, clean ink-on-paper aesthetic.

---

## Color Palette

### Core Colors
| Token | Value | Usage |
|---|---|---|
| Background | `#f8f7f4` | Page/app background — warm off-white |
| Surface | `#ffffff` | Cards, panels, overlays |
| Ink / Primary | `#1a1a1a` | All text, borders, icons, fills |
| On-Surface | `#1a1a1a` | Primary text on surface |
| On-Surface Muted | `rgba(26,26,26,0.6)` | Secondary/caption text |
| Outline | `rgba(26,26,26,0.2)` | Borders, dividers |
| Error | `#d94646` | Destructive states, alerts |
| Error Container | `rgba(217,70,70,0.1)` | Tinted error backgrounds |

### Opacity Scale (from `#1a1a1a`)
Used throughout for tints, fills, and hover states — all derived from the single ink color:

| Class | Alpha | Usage |
|---|---|---|
| `/5` | 5% | Subtle fills, hover backgrounds, bar chart bases |
| `/10` | 10% | Active/selected backgrounds |
| `/20` | 20% | Borders, dividers |
| `/30` | 30% | Muted icon decorations |
| `/40` | 40% | Mid-strength bar fills |
| `/60` | 60% | Secondary text, inactive nav items |

> **Design principle:** The entire UI uses a single ink color (`#1a1a1a`) at varying opacities — no accent colors. All states (hover, active, disabled) are expressed through opacity, not hue.

---

## Typography

### Font Stack
| Role | Font | Fallback | Google Fonts |
|---|---|---|---|
| `--font-sans` | Inter | `sans-serif` | `Inter` |
| `--font-serif` | Playfair Display | `serif` | `Playfair_Display` |
| `--font-mono` | JetBrains Mono | `monospace` | `JetBrains_Mono` |

### Type Scale & Usage

| Scale | Font | Size | Weight | Usage |
|---|---|---|---|---|
| `font-display-lg` | Serif | ~4xl–5xl | Bold | Hero headings, page titles |
| `font-display-md` | Serif | ~3xl–4xl | Bold | Section-level display numbers (e.g. big metrics) |
| `font-headline-lg` | Serif | ~2xl–3xl | Bold | Card/section headings |
| `font-headline-sm` | Serif | ~xl | Bold | Sub-section headers |
| `font-body-lg` | Sans | ~base | Regular | Body copy, descriptions |
| `font-body-sm` | Sans | ~sm–xs | Regular | Captions, helper text |
| `font-label-caps` | Mono | ~10–12px | Regular | ALL-CAPS labels, tags, status indicators |
| `font-data-huge` | Serif | ~5xl–6xl | Bold | Single large KPI numbers |

### Text Style Rules
- **ALL-CAPS labels** always use `font-mono`, `text-[10px]` or `text-[12px]`, `uppercase`, `tracking-widest` (letter-spacing ~0.2em)
- **Display numbers** use `font-serif` with `tracking-tighter`
- **Body copy** uses `font-sans` (Inter), regular weight
- **Interactive text** (buttons, nav) uses `font-semibold` in `font-sans`

---

## Spacing System

Base unit: `8px`

| Token | Value | Usage |
|---|---|---|
| `--spacing-unit` | `8px` | Base grid unit |
| `--spacing-container-padding-mobile` | `16px` | Page horizontal padding (mobile) |
| `--spacing-container-padding-desktop` | `40px` | Page horizontal padding (desktop) |
| `--spacing-card-gap` | `24px` | Gap between grid cards |
| `--spacing-section-margin` | `48px` | Margin between major page sections |

---

## Borders & Shapes

| Element | Style |
|---|---|
| Cards | `border border-[#1a1a1a]` + `rounded-2xl` — hard 1px ink border, no shadow |
| Small panels / badges | `rounded-xl` |
| Pills / status chips | `rounded-full` |
| Progress bars | `rounded-full` track, `rounded-full` fill |
| Bar chart columns | `rounded-t-sm` (top only) |
| Avatar images | `rounded-full` |
| Buttons (primary) | `rounded-lg` |
| Buttons (filter/toggle) | `rounded-lg` |

**Shadow policy:** `box-shadow: none` — no elevation shadows anywhere. Depth is communicated through borders and background contrast only.

---

## Surface & Panel Styles

```css
/* Primary card / panel */
background: #ffffff;
border: 1px solid #1a1a1a;
border-radius: 1rem; /* rounded-2xl */
box-shadow: none;

/* Subtle tinted panel (secondary info, callouts) */
background: rgba(26, 26, 26, 0.05); /* bg-[#1a1a1a]/5 */
border: 1px solid rgba(26, 26, 26, 0.2);
border-radius: 1rem;

/* Glass/backdrop panels (sidebar, mobile nav) */
background: transparent;
backdrop-filter: blur(24px); /* backdrop-blur-xl */
border: 1px solid rgba(26, 26, 26, 0.2);
```

---

## Component Patterns (Style Only)

### Navigation Sidebar (Desktop)
- Fixed, `w-64`, full viewport height
- `backdrop-blur-xl`, transparent background, right border `border-[#1a1a1a]/20`
- Logo: `font-bold text-4xl font-sans`; Tagline: `font-mono text-[10px] uppercase tracking-[0.2em] opacity-60`
- Nav item: `px-4 py-3 rounded-lg`, icon `w-5 h-5` + `font-semibold text-sm`
- **Active state:** `border-l-4 border-[#1a1a1a]` + `bg-[#1a1a1a]/5` + full opacity text
- **Inactive state:** `opacity-60/70`, hover adds `bg-[#1a1a1a]/5`

### Navigation Bar (Mobile Bottom)
- Fixed to bottom, full width, `backdrop-blur-2xl`, `border-t border-[#1a1a1a]/20`, `rounded-t-xl`
- Items: icon `w-6 h-6` + mono label `text-[10px] uppercase tracking-wider`
- **Active state:** full opacity + `scale-110`
- **Inactive state:** `opacity-80/60`

### Card Header Pattern
```
MONO LABEL IN CAPS         ← font-mono, 10–12px, uppercase, tracking-widest, opacity-60
Large Serif Headline       ← font-serif, bold, 2xl–4xl
Body description copy      ← font-sans, sm, opacity-60
```

### Status / Badge Chip
- `font-mono text-[12px] uppercase tracking-widest`
- `bg-[#1a1a1a]/5 text-[#1a1a1a]`
- `px-2 py-1 rounded` or `px-3 py-1 rounded-full`

### Live Indicator (Pulse Dot)
- `w-3 h-3 rounded-full bg-[#1a1a1a] animate-pulse`

### Progress / Data Bar
- Track: `bg-[#1a1a1a]/5 h-1.5 rounded-full overflow-hidden`
- Fill: `bg-[#1a1a1a] h-full rounded-full`

### Divider
- `h-[1px] bg-[#1a1a1a]/20`  or  `w-[1px] bg-[#1a1a1a]/5` (vertical)

### Primary CTA Button
```css
background: #1a1a1a;
color: #ffffff;
font-weight: 700;
border-radius: 0.5rem; /* rounded-lg */
padding: 12px 16px;
transition: transform 0.1s;
active: scale(0.95);
```

### Secondary / Ghost Button
```css
background: rgba(26,26,26,0.05);
border: 1px solid rgba(26,26,26,0.2);
border-radius: 0.5rem;
font-family: monospace;
font-size: 12px;
text-transform: uppercase;
```

### Hero Image Card
- Image fills container: `object-cover w-full h-full brightness-[0.3]`
- Hover: `group-hover:scale-105 transition-transform duration-700` (zoom on hover)
- Text overlay: `absolute` positioned content over image
- Gradient scrim at bottom: `bg-gradient-to-t from-surface to-transparent`

---

## Motion & Transitions

| Pattern | Value |
|---|---|
| Default transition | `transition-all duration-300` |
| Image zoom on hover | `transition-transform duration-700` |
| Button press | `active:scale-95 transition-transform` |
| Active nav scale | `scale-110` |
| Pulse animation | `animate-pulse` (Tailwind default) |

---

## Layout Grid

- **12-column CSS grid** for main content areas
- Cards span `md:col-span-4`, `md:col-span-8`, `md:col-span-12` etc.
- Grid gap: `gap-card-gap` (`24px`)
- Responsive breakpoints: mobile-first, `md:` (768px), `lg:` (1024px)

---

## CSS Variables (Ready to Copy)

```css
/* globals.css — paste into any project */

@theme {
  /* Colors */
  --color-background: #f8f7f4;
  --color-surface: #ffffff;
  --color-on-surface: #1a1a1a;
  --color-on-surface-variant: rgba(26, 26, 26, 0.6);
  --color-outline: rgba(26, 26, 26, 0.2);
  --color-primary: #1a1a1a;
  --color-on-primary: #ffffff;
  --color-error: #d94646;
  --color-error-container: rgba(217, 70, 70, 0.1);
  --color-ink: #1a1a1a;

  /* Font families */
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Semantic type roles */
  --font-display: var(--font-serif);
  --font-headline: var(--font-serif);
  --font-body: var(--font-sans);
  --font-label: var(--font-mono);
  --font-data: var(--font-serif);

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-container-padding-mobile: 16px;
  --spacing-container-padding-desktop: 40px;
  --spacing-card-gap: 24px;
  --spacing-section-margin: 48px;
}

/* Base */
body {
  background-color: var(--color-background);
  color: var(--color-on-surface);
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* Utility classes */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-ink);
  border-radius: 1rem;
  box-shadow: none;
}

.card-subtle {
  background: rgba(26, 26, 26, 0.05);
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 1rem;
}

.glass-panel {
  background: transparent;
  backdrop-filter: blur(24px);
  border: 1px solid rgba(26, 26, 26, 0.2);
}

.label-caps {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(26, 26, 26, 0.6);
}

.btn-primary {
  background: #1a1a1a;
  color: #ffffff;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 12px 16px;
  transition: transform 0.1s;
}
.btn-primary:active { transform: scale(0.95); }

.btn-secondary {
  background: rgba(26, 26, 26, 0.05);
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 0.5rem;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
}
```

---

## Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
```

---

## Design Principles Summary

1. **Monochromatic** — one ink color (`#1a1a1a`) on warm off-white (`#f8f7f4`). No accent hues.
2. **Opacity-driven hierarchy** — all state changes (hover, disabled, muted) use opacity, not color.
3. **Serif for display, mono for labels** — editorial contrast between Playfair Display headlines and JetBrains Mono caps labels.
4. **Hard borders, no shadows** — cards use solid 1px ink borders. Zero `box-shadow` anywhere.
5. **Flat surfaces** — no gradients on UI chrome; gradients only appear as image scrims on hero photos.
6. **Motion is subtle** — 300ms transitions, 700ms image zoom, `active:scale-95` button press. No dramatic animations.
