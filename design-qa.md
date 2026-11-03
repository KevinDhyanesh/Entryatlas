# EntryAtlas design QA

## Comparison setup

- **Source visual truth:** `C:\Users\kevin dhyanesh\Downloads\EntryAtlas-VS-Code-2026-10-16\ChatGPT Image Nov 3, 2026, 01_18_05 AM.png`
- **Pre-fix implementation screenshot:** [`design-qa-pre-logo-implementation.png`](./design-qa-pre-logo-implementation.png)
- **Pre-fix combined comparison:** [`design-qa-pre-logo-comparison.png`](./design-qa-pre-logo-comparison.png)
- **Viewport:** 1488 × 1058 CSS px, desktop, North Library selected, needs unselected.
- **Pixel dimensions:** source 1487 × 1058 px; implementation 1488 × 1058 px. Both were captured at device scale factor 1; the one-pixel width difference was retained without resampling.
- **State:** default directory view with sample content and fictional-campus notice.

## Evidence and review

The combined comparison image places the source on the left and the rendered page on the right. It shows the intended masthead, intro/search band, split building directory and profile, image, and feature list. The implementation uses a generated illustrative exterior and labels it as not surveyed; the source photo was also retained only as a visual reference, not as factual sample data.

Focused review covered the masthead, needs selector, type hierarchy, and feature rows. The target wraps needs in capsules; the implementation intentionally presents icon-and-text choices without capsules, following the latest user instruction. Newsreader is used for display headings and DM Sans for interface text. The screenshot includes nine actual sample features instead of the target's five illustrative rows, preserving the app's existing record set. The rest of the campus and entrance content remains explicitly fictional and unsurveyed.

## Comparison history

1. The first combined comparison found a **P2 masthead mismatch**: the source's EA mark had been replaced by a plain text monogram. This reduced fidelity in a prominent brand area.
2. The mark was changed to use the existing EntryAtlas logo asset, with a monochrome filter and blend treatment for the dark masthead. The current browser preview visibly shows the original mark without the white square.
3. A post-fix screenshot was inspected in the in-app browser, but a saved post-fix capture and combined comparison could not be produced. The browser security policy rejected the comparison-page URL protocol; no alternate browser route was attempted.
4. The directory was subsequently extended from three to ten sample buildings. The archived screenshots above predate that content update and do not represent the current building list.
5. The intro/search alignment was adjusted, the four primary needs were constrained to a single row, and the permanent status legend was replaced with a hover/focus popover. Browser inspection confirmed the popup appears near the feature heading and closes when focus leaves; these changes are also newer than the archived screenshots.

## Findings

- **Fonts and typography:** Newsreader headings and DM Sans controls/body text now replace the previous Georgia/Inter/system stack. The screenshot comparison shows the expected editorial heading and compact control hierarchy.
- **Spacing and layout rhythm:** The layout follows the source's top intro/tools row, left building list, and right detail pane. At desktop, the page remains calm and aligned; the full feature list is denser because the app has nine real sample fields.
- **Colors and visual tokens:** Dark forest header, off-white page surface, restrained green selection, muted text, and semantic reported/unknown colors match the reference direction.
- **Image quality and asset fidelity:** The profile uses an illustrative generated campus exterior, with a visible caption that it is not a surveyed entrance. The masthead now uses the existing project logo asset; its final treatment is visible in the current preview but lacks an archived comparison capture.
- **Copy and content:** The screenshot's fictional descriptions were not copied as factual records. Existing sample labels and their fictional/unsurveyed warnings are preserved.

## Open questions

- No product-content question blocks implementation. The remaining blocker is only the missing saved post-fix visual comparison.

## Implementation checklist

- [x] Rebuild the page around the selected reference composition.
- [x] Remove capsule backgrounds from the top needs choices and retain icons with labels.
- [x] Introduce the Newsreader + DM Sans font pair.
- [x] Use the project EntryAtlas logo asset in the masthead.
- [x] Keep the generated exterior image labeled as illustrative.
- [x] Build passes with `pnpm build`.
- [ ] Capture and compare the final implementation against the source at the same viewport.

**final result: blocked** — a final screenshot comparison including the current search alignment, transient status popover, and expanded ten-building directory is not archived, so visual QA cannot be marked passed.
