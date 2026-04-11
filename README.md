# Clements Biology Club Website

React + Vite website for the Clements Biology Club.

The site uses the existing React Router page structure and a centralized content file at `src/data/siteContent.js` so club details, links, events, and contact information can be updated without rewriting page components.

## Stack

- React 19
- Vite
- React Router
- Framer Motion
- ESLint

## Project Structure

- `src/data/siteContent.js`
  Main content source for club info, officers, events, resources, contact links, and featured items.
- `src/pages`
  Route-level pages such as `About`, `Events`, `Resources`, `Officers`, and `Contact`.
- `src/components`
  Shared sections plus page-specific visual components.
- `src/styles/globals.css`
  Global styling and page-specific visual systems.
- `public`
  Static images such as officer photos and branding assets.

## Current Site Features

- Homepage with falling leaf background treatment
- About page with DNA-inspired biology illustration
- Officers page with forest / vine / floral visuals
- Events page with microbe / virus / lab-inspired visuals
- Resources page with layered underwater / reef visuals
- Contact page with botanical specimen / field-journal notebook styling
- Shared club branding, favicon, and social preview logo
- Featured content support for:
  - RevTrak dues
  - dues deadline
  - T-shirt contest
  - Bio Bites

## Content Updates

Most routine edits should happen in `src/data/siteContent.js`.

Examples:

- update meeting text
- replace officer names or photos
- add event timeline entries
- change resource links
- plug in final RevTrak / T-shirt contest links

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Final QA Status

Checked recently:

- `npm run build` passes
- `npm run lint` passes
- key page-specific visual systems are implemented and integrated
- Resources page no longer duplicates Bio Bites in both featured and general sections

## Later TODOs

- Replace any remaining placeholder values in `src/data/siteContent.js`
  - `featuredLinks.dues.link`
  - `featuredLinks.dues.deadline`
  - `featuredLinks.tShirtContest.link`
  - `contact.revTrakLink`
  - `contact.duesDeadline`
  - `contact.tShirtContestLink`
- Do a full final visual QA pass on desktop, tablet, and mobile
- Check all external links one more time before publishing
- Do an accessibility pass
  - focus visibility
  - contrast
  - motion sensitivity review
- Decide whether Bio Bites should remain an Instagram link or become an embedded gallery later
- Optional cleanup pass if any page visuals feel too dense after stakeholder review

## Notes

- The current design intentionally uses page-specific biology visual themes rather than one repeated motif across the entire site.
- The architecture was kept intact instead of rewriting the project from scratch.
