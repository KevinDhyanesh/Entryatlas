# EntryAtlas prototype — TODO

Status: step 1 implemented and verified. Keep future outcomes open until implemented and checked. The working style is one small lesson at a time; explain each change simply and pause after each step.

## 1. Show the first fictional building directory
- [x] Start a React + TypeScript + Vite app and show an EntryAtlas title plus a few fictional building names.
- [x] Keep all example names/details fictional and label demo data clearly so it cannot be mistaken for real campus accessibility information.
- [x] Explain the files changed and how to run/see this first page before moving to another feature.

## 2. Search and open a building profile
- [ ] A visitor can search for a building by name and open its profile.
- [ ] Search is case-insensitive and ignores leading/trailing spaces.
- [ ] A no-results state provides a clear way to clear the search or try again.
- [ ] The profile shows one or more entrances separately, with a text location description.

## 3. Show feature-by-feature evidence honestly
- [ ] Each relevant mobility feature has its own value and evidence state: Verified, Reported, or Unknown.
- [ ] A building with unknown entrance information is never shown as verified or labelled accessible based on missing data.
- [ ] Missing information displays Unknown, not “No.” Do not infer one entrance’s information from another entrance.
- [ ] Verified observations display their date and evidence/method where available; old observations can be marked review-due and are not proof of a current condition.
- [ ] A temporary condition report, such as a lift being reported out of service, is kept separate from a permanent building feature. Expiry means status must be rechecked; it does not mean the issue is fixed.
- [ ] No feature or route is described as guaranteed safe or fully accessible.

## 4. Provide a map with a usable text alternative
- [ ] The campus view offers a map and a searchable building list; the list and entrance text descriptions remain usable when the map is unavailable or hidden.
- [ ] Fictional campus positions are clearly schematic/demo-only and are not presented as real geographic accessibility data.
- [ ] If a real map/tile service is added later, its required attribution is visible and its usage policy is respected.
- [ ] The map does not imply an accessible route or generate wheelchair routing.

## 5. Submit a correction and show its review status
- [ ] A visitor can report a building/entrance/feature issue without a public account.
- [ ] The form validates required fields and gives understandable errors; safe entries are retained if submission fails.
- [ ] A submitted correction is labelled pending and does not change the displayed public/demo record before editor approval.
- [ ] A success receipt appears only after the demo/report submission succeeds and says that submission is not approval.
- [ ] Corrections or demo-editor decisions stored in browser local storage are explicitly described as local, editable demo data—not secure or shared.

## 6. Demonstrate editor review and data quality
- [ ] A clearly labelled demo editor can review a pending correction, approve, reject, or request clarification.
- [ ] Approval changes the demo display only after the approval action; rejection/clarification does not change it.
- [ ] Previous demo values and the decision are shown in a simple history/audit view.
- [ ] The dashboard can identify missing entrance information, Unknown features, review-due observations, expired temporary reports, and pending/conflicting reports without assigning an overall campus accessibility score.
- [ ] The frontend-only demo is never described as secure multi-user review. A real pilot will require approved authentication, database permissions, and server-side review actions.

## 7. Meet basic accessibility, responsiveness, and portfolio handoff needs
- [ ] Core screens work with keyboard only, have visible focus, labelled controls, understandable errors, and text/icons as well as color for status.
- [ ] The directory remains usable without the map, and the main interface works at a phone-sized width.
- [ ] The GitHub README explains the project, setup/run steps, demo limitations, and what is not implemented.
- [ ] Connect to GitHub only through the platform’s confirmation workflow; never request a password or token in chat. Review repository visibility before making code public.
