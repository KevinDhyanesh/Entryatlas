# EntryAtlas — Build Plan (for your approval)

**This is a plan only. No application code has been written yet.**

## Our learning rule

We will work in **tiny steps**. For each step, I will say what we are doing, explain the new idea in plain language, make only that change, and show you how to check it. Then I will pause for you. We will not paste a huge app into one file or pretend you understand code you have not seen.

## What we are building

A small portfolio prototype for one **fictional** university campus. Visitors can search for a building, open its entrance details, and see information marked **Verified**, **Reported**, or **Unknown**. They can submit a correction. A demo editor can review it. The directory must still work if the map is missing.

Demo data will be clearly marked as fictional. “Verified” means an observation was checked on a date; it does **not** guarantee the condition is true today. A lift outage is a temporary report, not a permanent building fact. The app will not claim that any route or building is safe or fully accessible.

For the first prototype, reports and editor actions will be saved only in this browser using local demo storage. This lets us demonstrate the flow, but it is **not secure multi-user review**. We will add a real shared database and editor login only if you approve that later stage.

## Proposed build sequence

1. **First tiny lesson:** make the app show a friendly title and a few fictional building names. Learn where the app starts and how to run it.
2. Add building search and a useful “no results” message.
3. Open a building profile with separate entrances and feature-by-feature evidence labels.
4. Add the optional fictional campus diagram and keep the building list as the map-free alternative.
5. Add a correction form that saves a pending report in this browser.
6. Add a clearly labelled demo editor screen to approve/reject a report and show that the public demo record changes only after approval.
7. Add simple checks, keyboard/mobile improvements, and a GitHub README explaining how to run the app and what is only a demo.
8. Connect the finished prototype to GitHub using the platform’s confirmation flow. The connection starts with a private repository; review the code before choosing whether to make it public.

We will not add automatic route-finding, real campus measurements, public accounts, image uploads, lift sensors, or AI assessments in this prototype.

## Technology choices

- **TypeScript** is the language for the app.
- **React** lets us build the page from small reusable pieces (“components”).
- **Vite** runs the development preview.
- Use ordinary CSS at first to reduce extra concepts and packages.
- Keep fictional sample buildings in a small JSON data file.
- Use browser local storage only for demo correction reports and demo-editor decisions. It can be changed by the browser owner and must not be described as secure.
- Add a map only after the directory and profile are easy to use. Use a fictional schematic map, not a real-world location for invented campus data.

## Page and component shape

- `src/App.tsx` — chooses which screen to show.
- `src/data/campus.json` — fictional campus, buildings, entrances, and sample observations.
- `src/types.ts` — describes the shape of the data in TypeScript.
- `src/pages/DirectoryPage.tsx` — building list and search.
- `src/pages/BuildingProfilePage.tsx` — entrances and accessibility evidence.
- `src/pages/CorrectionPage.tsx` — visitor correction form and receipt.
- `src/pages/EditorDemoPage.tsx` — simulated editor review, clearly labelled demo-only.
- `src/components/` — small reusable pieces such as evidence labels and entrance cards.
- `src/styles.css` — shared colors, layout, keyboard focus, and mobile styles.
- `public/manus-routes.json` — declares the web pages for Preview.
- `README.md` — project summary, setup steps, demo limitations, screenshots later, and GitHub instructions.

## Proposed visual direction

These are design suggestions, not choices you have already made:

- Quiet civic field guide — **0.03**
- Editorial campus atlas — **0.07**
- Calm transit wayfinding system — **0.05**

For this plan, I propose **Calm transit wayfinding system**: clear, reassuring, and practical. Use a warm off-white background, dark navy text, and a distinctive teal-blue action color. Use labels and icons as well as color for evidence status. Keep the building directory as a readable vertical list, with an entrance information panel beside it on wider screens and above/below it on phones. Use small, calm transitions only; no motion that hides information. Use a clean sans-serif for most text and a restrained serif for major page headings. Brand idea: a simple doorway/atlas-pin mark. Voice: plain and honest—for example, “Here’s what was checked” and “This detail is not known yet.”

## How we’ll know the prototype works

- You can search for a fictional building and open its profile.
- Each entrance is listed separately; missing details say **Unknown**, not “No.”
- A submitted correction is labelled **Pending** and does not change the displayed record before demo-editor approval.
- The building list remains usable when the map is hidden.
- All buttons and fields can be used with a keyboard, and the layout works on a phone-sized screen.
- The README clearly says the records and editor flow are fictional/demo-only.

## What “GitHub-ready” means here

The repository will have readable TypeScript files, a README with setup/run instructions, clear demo limitations, and a clean history of small changes. We’ll connect it to your GitHub after the prototype is working. The official connection step may show you a confirmation card. Do not share a password or access token in chat.

## Approval checkpoint

If this plan looks good, reply **“Yes, start step 1.”** Then we will make only the tiny first page, run it, and check what appears. If you want to change something first, tell me which part.
