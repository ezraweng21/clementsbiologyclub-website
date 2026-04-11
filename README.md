# Clements Biology Club Website

Website for the Clements Biology Club, built with React and Vite.

## Overview

This project uses the existing React Router page structure and a centralized content file at `src/data/siteContent.js`. Most routine content updates can be made in that file without changing the page components.

## Tech Stack

- React
- Vite
- React Router
- Framer Motion
- ESLint

## Key Files

- `src/data/siteContent.js`
  Central source for club information, featured links, officers, events, resources, and contact details.
- `src/pages`
  Route-level pages for the main sections of the site.
- `src/components`
  Shared UI components and page-specific visual components.
- `src/styles/globals.css`
  Global styles and page-level visual treatments.
- `public`
  Static assets such as officer photos and branding files.

## Implemented Pages

- Home
- About
- Officers
- Events
- Resources
- Contact

Each page uses the same overall site structure while allowing for page-specific visual styling.

## Content Notes

The site currently supports:

- member dues / RevTrak messaging
- dues deadline messaging
- T-shirt contest messaging
- Bio Bites linking and future gallery support

Final values for school-year-specific links and deadlines should be updated in `src/data/siteContent.js`.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Current Status

Recent checks:

- `npm run build` passes
- `npm run lint` passes

## Remaining Updates

The main remaining work is content finalization rather than structural development.

Items still to update later:

- final RevTrak dues link
- final dues deadline
- final T-shirt contest link
- any year-specific link or contact changes
- final visual QA on desktop, tablet, and mobile
- accessibility review

## Maintenance

For routine updates:

1. Edit content in `src/data/siteContent.js`
2. Run `npm run build`
3. Run `npm run lint`

If a future redesign is needed, the current architecture should be preserved unless there is a strong reason to change it.
