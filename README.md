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

## NextJS works on edge
Next.js on the edge means running your application closer to the end user—on servers located around the world. This approach, often called "edge computing," helps deliver your content faster by reducing the distance data has to travel.

## NextRequest & NextResponse — What are they?
These are Next.js-specific wrappers around the standard Web API Request and Response objects, tailored for the App Router and Edge/Serverless environments.

- **NextRequest** is used instead of Express-like req. It's like the Request object from the Fetch API.
    - Use .json(), .headers, .url, .cookies, etc.

- **NextResponse** is used to return a response — just like res.send() or res.json() in Express.
    - Use .json(), .redirect(), .next(), .rewrite().

## ***Middlewares***
Created under `/src` with name `middleware.ts`.