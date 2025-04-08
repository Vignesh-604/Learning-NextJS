# Notes

## Creating next js app
`npx create-next-app@latest .`
- . to make project in same directory  
- Typescript, ESLint, Tailwind.CSS, "src", App Router, Turbopack :- Yes  
- Customize import alias :- No  

## Folder structure
- **/app:** Folders created in this are considered as routes (ex. contact, courses)
    - **layout.tsx:** Describes the layout of a folder. Each folder has a layout page but only the root layout will require MetaData.
    - **page.tsx:** Content that is served
    - > [! NOTE] Layout (root file) takes children (page.tsx)
    - **/api:** Used to write backend (ex. /login/route.ts)

---
## Notes
- `'use client'` - Since NextJS is a full-stack framework, most components load at the server side. React hooks and other DOM manipulation occur on the client side so using 'use client' serves the component on client side.

#### UI from [Aceternity.ui](https://ui.aceternity.com/components)
- Follow the installation and dependencies as required (lib/utils.ts)
- Copy paste the ui component into the given components/ui folder
- Copy Paste required code into component file
