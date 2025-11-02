# City Guide - Next.js Project

A modern City Guide web application built with **Next.js 13+ (App Router)** and **Tailwind CSS**. This project allows users to browse interesting places in a city (e.g., Lviv), view details for each location, and explore their location on Google Maps.

---

## Features

- Server-side and client-side rendering with Next.js App Router
- Responsive UI built with **Tailwind CSS**
- Dynamic routing for individual places (`/place/[id]`)
- Google Maps integration for each location
- Fetching place data from built-in API routes (`/api/places` and `/api/places/:id`)
- Fully typed with TypeScript
- Easy-to-extend project structure for additional cities or places

---

## Technologies

- **Next.js 13+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** for deployment

---

## Project Structure
```
city-guide/
├─ app/
│ ├─ page.tsx # Homepage with list of places
│ ├─ place/
│ │ ├─ [id]/
│ │ │ └─ page.tsx # Individual place page
│ │ └─ page.tsx # Redirects /place to homepage
├─ components/
│ ├─ PlaceCard.tsx # Card component for each place
│ ├─ Header.tsx
│ └─ PlaceMap.tsx # Client component to render Google Maps iframe
├─ types/
│ └─ Place.type.ts # TypeScript types
├─ pages/api/
│ └─ places/
│ ├─ route.ts # GET /api/places
│ └─ [id]/route.ts # GET /api/places/:id
├─ public/ # Static assets
├─ tailwind.config.ts
├─ next.config.js
└─ package.json
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/city-guide.git
cd city-guide
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set environment variables
Create a .env.local file at the root:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

This variable is used for fetching data from internal API routes.

### 4. Run the development server
```bash
npm run dev
```
Open http://localhost:3000
 in your browser.
 
### 5. Build for production
```bash
npm run build
npm start
```
