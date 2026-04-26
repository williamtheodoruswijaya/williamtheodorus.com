# UI UX Pro Max Design System

Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

This project keeps the implementation-facing design reference in `public/design-system/` instead of a hidden assistant-specific install folder.

## Portfolio Direction

- Pattern: Portfolio Grid inside an OS-inspired desktop shell
- Structure: menu bar, desktop shortcuts, portfolio window, project grid, dock
- Style: Accessible & Ethical with portfolio-grade motion
- Typography: SF Mono for headings and body
- Light theme: neutral desktop canvas with indigo action color
- Dark theme: code-dark desktop canvas with purple action color

## Interaction Rules

- No emoji icons; use Lucide or brand SVG/icon components.
- Clickable elements use pointer cursor and visible hover feedback.
- Focus rings must be visible and at least 3px to 4px.
- Primary touch targets should be at least 44px.
- Motion must respect `prefers-reduced-motion`.
- Do not rely on hover-only interactions for critical actions.

## Layout Rules

- Fixed OS menu bar and dock use blurred chrome surfaces.
- Shared max width is `max-w-6xl`.
- Cards use 8px radius, stable dimensions, and clear borders.
- Images reserve aspect ratio and use Next `Image` with `fill` or explicit dimensions.
