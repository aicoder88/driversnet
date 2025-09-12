# Slide Update Implementation Plan

This plan maps requested page changes to slide components and outlines precise implementation steps. Status reflects current progress.

## Slide Mapping (Page → Component)
- Page 4 → `src/components/slides/ServiceDivisions.tsx`
- Page 7 → `src/components/slides/CaseStudyTesla.tsx`
- Page 11 → `src/components/slides/TechnologyIntegration.tsx`
- Page 14 → `src/components/slides/GeographicCoverage.tsx`

## Tasks and Status
1) ServiceDivisions: add “Parking” wording
   - Change card title to “Parking, Valet & Traffic Mgmt”
   - Add a supporting bullet referencing parking operations
   - Update chart dataset label from `Valet/Traffic` → `Parking/Valet/Traffic`
   - Status: DONE

2) Tesla case study: scope + timeline copy
   - Update timeline copy to “Partnership since 2018–present” (replace 2021–2024)
   - Add scope bullets: “13+ cities in US & Canada”, “Hundreds of vehicles per city/day”, “24–48 hr notice”
   - Review/adjust any “Midwest only” phrasing to reflect US+Canada
   - Status: PENDING

3) TechnologyIntegration: reframe to 3rd‑party stack
   - Clarify we leverage third‑party platforms (Onfleet, Dropcar) vs proprietary tech
   - Rename “API Integration” to “3rd‑Party APIs & Webhooks” where appropriate
   - Swap example to vendor‑agnostic integration (webhook consumer pattern)
   - Status: PENDING

4) GeographicCoverage: replace markets and copy
   - Remove Seattle (WA) and Portland (OR)
   - Add Salt Lake City (UT), Toronto (ON), Montreal (QC), Vancouver (BC)
   - Update hero copy to reflect US + Canada presence
   - Replace chips/callouts that reference removed markets
   - Move Canada cities from “Expansion Roadmap” to active markets or adjust roadmap
   - Status: PENDING

5) Canada presence + Ford mention
   - Add brief note: active in Canada and working with Ford Canada (no new slide)
   - Status: PENDING

6) Align counts/labels
   - Update “Total Markets” and any distribution counts to reflect new markets
   - Status: PENDING (needs confirmation of desired counts)

7) Consistency pass
   - Update any other slide references (e.g., ClientPortfolio Tesla retention, any “19 markets” mentions)
   - Status: PENDING

8) Validation
   - Run `npm run lint` and `npm run check:ctas`
   - Verify in `npm run dev` and `npm run preview`
   - Status: PENDING

## Open Items / Assumptions
- Driver counts for SLC, Toronto, Montreal, Vancouver are not provided; placeholders or proportional values may be needed when updating coverage.
- Preferred phrasing for Tesla scope: confirm “over 13 cities” vs “13+ cities”.
- Technology slide should explicitly name Onfleet and Dropcar per request; confirm any additional vendors to list.

## Notes for Next Developer
- Keep TypeScript strict and use `@/*` imports when creating new modules.
- Update only the targeted slides to keep changes minimal.
- After making content edits, do a quick pass for consistency across related slides (metrics, dates, geography).

