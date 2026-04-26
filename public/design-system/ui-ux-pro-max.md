# UI UX Pro Max Design System

Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

This project keeps the implementation-facing design reference in `public/design-system/` instead of a hidden assistant-specific install folder.

## Portfolio Direction

- Pattern: Portfolio Grid
- Structure: Hero, project grid, about/philosophy, contact
- Style: Accessible & Ethical with portfolio-grade motion
- Typography: Archivo for headings, Space Grotesk for body
- Light theme: neutral white canvas with blue action color
- Dark theme: code-dark canvas with green action color

## Interaction Rules

- No emoji icons; use Lucide or brand SVG/icon components.
- Clickable elements use pointer cursor and visible hover feedback.
- Focus rings must be visible and at least 3px to 4px.
- Primary touch targets should be at least 44px.
- Motion must respect `prefers-reduced-motion`.
- Do not rely on hover-only interactions for critical actions.

## Layout Rules

- Fixed floating navbar uses inset spacing from viewport edges.
- Shared max width is `max-w-6xl`.
- Cards use 8px radius, stable dimensions, and clear borders.
- Images reserve aspect ratio and use Next `Image` with `fill` or explicit dimensions.
