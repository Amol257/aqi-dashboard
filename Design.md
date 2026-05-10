# Design System: Editorial Aesthetic

## Overview
The **Editorial Aesthetic** is a design system inspired by high-end print publications, quarterly reports, and analytical journals. It emphasizes stark typography, high-contrast black-and-white palettes, and structural layouts driven by meticulous grid systems.

## Color Palette
The color palette relies on high contrast and minimal hues, focusing almost entirely on shades of black, white, and subtle grays to keep the focus on the data and typography.

- **Background (Paper):** `#F8F7F4` (An off-white, slightly warm tone resembling premium print paper)
- **Surface:** `#FFFFFF` (Pure white for raised elements like cards and panels)
- **Primary / Ink:** `#1A1A1A` (A rich, deep "ink" black used for text, borders, and primary accents)
- **Text Variant:** `rgba(26, 26, 26, 0.6)` (Subtle gray for secondary text and metadata)
- **Borders / Outlines:** `rgba(26, 26, 26, 0.2)` (Faint ink borders to divide content without overwhelming it)
- **Error / Alert (Accent):** `#D94646` (A muted, sophisticated red for critical alerts)

## Typography
Typography is the cornerstone of this aesthetic. It intentionally mixes serif, sans-serif, and monospaced fonts to create a rich typographic hierarchy.

- **Serif (`font-serif`)**: *Playfair Display*
  - Used for large display headings, dynamic numbers, and areas requiring an elegant, authoritative tone.
- **Sans-Serif (`font-sans`)**: *Inter*
  - Used for body copy, paragraphs, and general UI readability. Clean and neutral.
- **Monospace (`font-mono`)**: *JetBrains Mono*
  - Used for labels, uppercase caps, metadata, timestamps, and subtle technical accents. Often styled with tracking (letter-spacing) and reduced opacity.

## Styling & Layout Patterns

### Structural Borders
Instead of soft shadows or glowing effects, elevation and separation are achieved through strict, solid borders (`border-solid border-[#1A1A1A]`).
- Elements like panels and cards are styled with pure white backgrounds (`bg-white`) and strict ink borders.
- Full-bleed dividing lines and column separators reinforce the "print layout" feel.

### Minimalist Effects
- **No Shadows:** Shadows (`box-shadow`), dropshadows, and glows are deliberately stripped away to maintain a flat, print-like appearance.
- **No Gradients:** Backgrounds are solid. The focus is entirely on structure and spacing over layered digital effects.

### Typographic Hierarchy
- **Headers:** Large, bold serif typeography (often up to `text-4xl` or `text-6xl`).
- **Eyebrows / Overlines:** Tiny, monospaced, all-caps text with wide tracking (e.g., `text-[10px] uppercase tracking-widest font-mono`).
- **Data Callouts:** Big bold serif numbers juxtaposed with tiny monospaced labels.

### Spacing & Grid
- Relies heavily on CSS Grid and Flexbox for precise alignment.
- Generous white space around major components to allow the dense typography to breathe.
