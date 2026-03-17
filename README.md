# Fitness Gym Website

A modern, responsive promotional website for Fitness Gym built to attract new members and showcase fitness services.

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **UI Framework**: React 19
- **TypeScript**: For type safety
- **Database**: JSON file storage (development)
- **Hosting**: Ready for deployment on Vercel

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Hero section with smooth scroll navigation
- ✅ About section showcasing gym history
- ✅ Services/Features section
- ✅ Contact form with validation
- ✅ Backend API for form submissions
- ✅ Logo branding in top-left corner
- ✅ Dark mode UI with amber accent colors
- ✅ Smooth scroll navigation between sections

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fitness
```

2. Install dependencies
```bash
pnpm install
# or
npm install
```

3. Run the development server
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # Contact form API endpoint
├── components/
│   ├── Hero/
│   │   └── HeroSection.tsx   # Hero section with navigation
│   ├── About/
│   │   └── AboutSection.tsx  # Gym information section
│   ├── Services/
│   │   └── ServicesSection.tsx # Services/features showcase
│   ├── Contact/
│   │   └── ContactSection.tsx # Contact form section
│   ├── Navbar/
│   │   └── Navbar.tsx        # Navigation bar with logo
│   └── ScrollingBanner/
│       └── ScrollingBanner.tsx
├── lib/
│   └── db.ts                 # Database utility functions
├── globals.css               # Global styles
├── layout.tsx                # Root layout
└── page.tsx                  # Home page

data/
└── contacts.json             # Contact submissions storage

public/
└── assets/                   # Branding assets and images
```

## Contact Form

The contact form accepts the following fields:
- **Name**: User's full name (required)
- **Email**: Valid email address (required)
- **Message**: User's message or fitness goals (required)

Form submissions are validated and stored in `data/contacts.json`.

## API Endpoints

### POST `/api/contact`

Submit a contact form inquiry.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in joining the gym"
}
```

**Success response (201):**
```json
{
  "success": true
}
```

**Error response (400/500):**
```json
{
  "error": "Error message"
}
```

## Navigation

Click navigation buttons in the hero section to smoothly scroll to:
- **Home**: Scrolls to top
- **About**: Jumps to about section
- **Services**: Jumps to services section
- **Contact**: Jumps to contact form

## Live Link

[Live Demo](https://fitness-three-umber.vercel.app/)

## Figma Design

[View Figma Design](https://www.figma.com/design/hJn4cgWXVWZSvgvM958l8J/GYM-Website-design?node-id=0-1&t=od1SCTnUuCZrNdLE-1)

## Author

Fitness Gym
