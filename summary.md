# Suci & Seky Wedding Invitation Website

## 📋 Project Overview

A beautiful, mobile-responsive two-page wedding invitation website for Suci & Seky's wedding on **February 14, 2026**. Built with modern web technologies featuring an elegant design with curtain effect cover page, layered overlapping backgrounds, and comprehensive main page with 9 interactive sections.

---

## 🚀 Tech Stack

- **React 18** - Component-based UI framework
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **react-hook-form** - Form validation and state management
- **react-scroll** - Smooth scrolling between sections
- **react-icons** - UI icon library (FaInstagram, FaCopy, FaCheck, etc.)

---

## 🎨 Design System

### Typography
- **Love Light** - Decorative headers (cursive) - "The wedding of"
- **Josefin Sans** - Section headers (sans-serif, bold)
- **DM Sans** - Body text, buttons, labels (sans-serif)
- **Playfair Display** - Countdown numbers (serif, semi-bold)
- **Oregano** - Couple names in profiles (cursive, regular)

### Color Palette
```css
primary: #764640     (burgundy/wine - main background)
cream: #F5EFE7       (cards, light backgrounds)
lightBrown: #C9A98A  (accents, buttons)
darkBrown: #5C3A34   (text on light backgrounds)
```

### Background Images
- `bg-cover.png` - Cover page background (wooden/fabric texture)
- `bg-opening.png` - Hero section base background
- `bg-arrum.png` - Countdown + Quran sections gradient overlay
- `bg-ceremony.png` - Ceremony section pattern

---

## ✨ Features

### Page 1: Invitation Guard
- ✅ Full-screen cover with curtain effect (clipPath CSS)
- ✅ Couple photo display (carousel-1.png)
- ✅ "Open Invitation" button with envelope icon
- ✅ Recipient name placeholder
- ✅ Smooth transition to main page

### Page 2: Main Website (9 Sections)

1. **Hero Section** - "The wedding of" with couple photo and Bird.gif
2. **Countdown Section** - Real-time countdown with Playfair Display numbers
3. **Quran Section** - Ar-Rum verse 21 (Arabic image + translation)
4. **Profile Section** - Bride & Groom profiles with Oregano font
5. **Event Section** - Ceremony details, venue, dresscode
6. **Story Section** - Couple's story with photo placeholders
7. **Gallery Section** - 3x4 photo grid (12 photos)
8. **Interaction Section** - Wishes form + Bank account cards
9. **Footer Section** - Thank you message and credits

### Interactive Features
- ⏰ **Real-time countdown timer** (days, hours, minutes, seconds)
- 📝 **Wishes form** with validation (name, message)
- 💳 **Copy-to-clipboard** for bank account numbers
- 🗺️ **Google Maps integration** for venue location
- 📱 **Instagram links** for bride and groom
- 💾 **localStorage** for wishes storage (ready for backend migration)
- 🎨 **Layered overlapping backgrounds** - Hero section overlaps with Countdown/Quran

---

## 📁 Project Structure

```
/Users/xbox/github/suci-wedding/
├── public/
│   └── assets/                    # Design assets
│       ├── bg-arrum.png          # Gradient background (Countdown + Quran)
│       ├── bg-ceremony.png       # Ceremony section background
│       ├── bg-cover.png          # Cover page background
│       ├── bg-opening.png        # Hero section background
│       ├── carousel-1.png        # Main couple photo
│       ├── Bird.gif              # Bird decoration with ribbon
│       ├── alarm.gif             # Alarm clock decoration
│       ├── calendar.png          # Calendar icon for button
│       ├── couple.gif            # Couple illustration
│       ├── bismillah.png         # Bismillah Arabic text
│       └── logo_ss.png           # S monogram logo
├── src/
│   ├── components/
│   │   ├── Page1/
│   │   │   └── InvitationGuard.jsx       # Cover page with curtain effect
│   │   ├── Page2/
│   │   │   ├── HeroSection.jsx           # Main hero with bg-opening.png
│   │   │   ├── CountdownSection.jsx      # Timer card with Playfair font
│   │   │   ├── QuranSection.jsx          # Bismillah image + verse
│   │   │   ├── ProfileSection.jsx        # Bride + Groom with Oregano font
│   │   │   ├── EventSection.jsx          # Ceremony + Dresscode
│   │   │   ├── StorySection.jsx          # Love story
│   │   │   ├── GallerySection.jsx        # 3x4 photo grid
│   │   │   ├── InteractionSection.jsx    # Wishes + Bank cards
│   │   │   └── FooterSection.jsx         # Thank you message
│   │   ├── shared/
│   │   │   ├── Button.jsx                # Reusable button component
│   │   │   ├── SectionWrapper.jsx        # Section container (supports transparent bg)
│   │   │   └── CountdownTimer.jsx        # Timer display with Playfair numbers
│   │   └── layout/
│   │       ├── MainLayout.jsx            # Container for all sections
│   │       └── GradientWrapper.jsx       # Wraps Countdown + Quran with bg-arrum
│   ├── hooks/
│   │   ├── useCountdown.js               # Real-time countdown logic
│   │   └── useScrollTo.js                # Smooth scroll helper
│   ├── data/
│   │   └── content.js                    # 🔑 All wedding data centralized
│   ├── utils/
│   │   └── helpers.js                    # Utility functions
│   ├── App.jsx                           # Root component (page transition)
│   ├── main.jsx                          # React entry point
│   └── index.css                         # Tailwind imports
├── index.html                            # HTML template + Google Fonts
├── package.json                          # Dependencies
├── vite.config.js                        # Vite configuration
├── tailwind.config.js                    # 🎨 Custom theme (5 fonts, colors, bg images)
└── postcss.config.js                     # PostCSS config
```

---

## 🔑 Key Files & Components

### **Architecture: Layered Overlapping Backgrounds**

The website uses a sophisticated layered background system where sections overlap:

```
┌─────────────────────────────────────┐
│  HERO SECTION (z-index: 1)          │
│  bg-opening.png                     │
│  - "The wedding of"                 │
│  - Couple photo                     │
│  - Bird.gif decoration              │
│  - "S" monogram                     │
│  - Padding-bottom: 160px (pb-40)    │
└─────────────────────────────────────┘
         ↓ OVERLAPS -160px ↓
┌─────────────────────────────────────┐
│  GRADIENT WRAPPER (z-index: 20)     │
│  bg-arrum.png - SHARED BACKGROUND   │
│  ┌───────────────────────────────┐  │
│  │  COUNTDOWN SECTION            │  │
│  │  (transparent background)     │  │
│  │  - Playfair Display numbers   │  │
│  │  - Cream card (rounded-3xl)   │  │
│  │  - alarm.gif decoration       │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  QURAN SECTION                │  │
│  │  (transparent background)     │  │
│  │  - bismillah.png image        │  │
│  │  - Verse translation          │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Data Management
**[src/data/content.js](src/data/content.js)** - Centralized wedding data
- Couple information (names, parents, Instagram)
- Event details (date, venue, times)
- Bank account information
- Quran verse text
- Gallery photo paths

**To update wedding content:** Edit this single file!

### Core Components

**[src/App.jsx](src/App.jsx)** - Root component
- Manages page state (cover vs main page)
- Handles page transition on "Open Invitation"

**[src/components/Page1/InvitationGuard.jsx](src/components/Page1/InvitationGuard.jsx)** - Cover page
- Curtain effect using CSS `clipPath`
- Full-screen background image (bg-cover.png)
- Opens main page on button click

**[src/components/layout/GradientWrapper.jsx](src/components/layout/GradientWrapper.jsx)** - **NEW!**
- Wraps Countdown + Quran sections
- Provides shared `bg-arrum.png` background
- Creates overlap effect with Hero section (margin-top: -160px)
- z-index: 20 (sits on top of Hero)

**[src/components/Page2/HeroSection.jsx](src/components/Page2/HeroSection.jsx)** - Hero section
- Background: `bg-opening.png` only (no overlay)
- Bird.gif decoration at bottom
- Padding-bottom: 160px for overlap
- z-index: 1 (bottom layer)

**[src/components/Page2/CountdownSection.jsx](src/components/Page2/CountdownSection.jsx)** - Countdown timer
- **NEW DESIGN:** Cream card with rounded-3xl corners
- S monogram using `logo_ss.png` image
- Countdown numbers: Playfair Display Semi Bold (48px)
- Labels: DM Sans (small)
- alarm.gif positioned outside bottom-left of card
- Button with calendar.png icon
- Transparent background (inherits from GradientWrapper)

**[src/components/shared/CountdownTimer.jsx](src/components/shared/CountdownTimer.jsx)** - Timer display
- **Typography:** Playfair Display Semi Bold for numbers
- DM Sans for labels (Hari, Jam, Menit, Detik)
- Grid layout (4 columns)
- No individual boxes (clean, minimal design)

**[src/components/Page2/ProfileSection.jsx](src/components/Page2/ProfileSection.jsx)** - Profiles
- **Couple names:** Oregano Regular (25px / text-2xl)
- **Instagram buttons:** Centered with flex justify-center
- **Parent descriptions:** Split into 2 rows (separate <p> tags)
- **Photo frames:** Transparent background, decorative corners
- **Couple illustration:** couple.gif at bottom
- Introduction card: cream background with rounded-3xl

**[src/components/Page2/QuranSection.jsx](src/components/Page2/QuranSection.jsx)** - Quran verse
- **Bismillah:** PNG image (bismillah.png)
- Translation text with justify alignment
- Transparent background (inherits from GradientWrapper)

**[src/components/Page2/InteractionSection.jsx](src/components/Page2/InteractionSection.jsx)** - Interactive features
- Wishes form with `react-hook-form` validation
- Bank account cards with copy-to-clipboard
- localStorage integration

**[src/hooks/useCountdown.js](src/hooks/useCountdown.js)** - Countdown timer
- Real-time calculation every second
- Returns days, hours, minutes, seconds
- Auto-cleanup with `useEffect`

### Configuration

**[tailwind.config.js](tailwind.config.js)** - Design system
- **Custom colors:** primary, cream, lightBrown, darkBrown
- **Custom fonts:** loveLight, josefin, dmSans, playfair, oregano (5 fonts)
- **Background images:** cover-pattern, arrum-pattern, ceremony-pattern
- **Transparent background:** Added to SectionWrapper

**[index.html](index.html)** - HTML template
- Google Fonts: Love Light, Josefin Sans, DM Sans, Playfair Display, Oregano
- Preconnect for performance optimization
- Favicon: logo_ss.png

---

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5173 (or next available port)

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## 🎯 Customization Guide

### 1. Update Wedding Information
Edit **[src/data/content.js](src/data/content.js)**:
- Couple names and details
- Event date and venue
- Bank account information
- Instagram handles

### 2. Replace Photos
Place photos in `public/assets/`:
- `carousel-1.png` - Main couple photo (cover + hero)
- `story-photo1.jpg` - Story section first photo
- `story-photo2.jpg` - Story section second photo
- `gallery/1.jpg` to `gallery/12.jpg` - Gallery photos
- `couple.gif` - Couple illustration (Profile + bottom)
- `Bird.gif` - Bird decoration with ribbon
- `alarm.gif` - Alarm clock decoration
- `calendar.png` - Calendar icon for button
- `bismillah.png` - Bismillah Arabic text image
- `logo_ss.png` - S monogram logo

### 3. Update Colors
Edit **[tailwind.config.js](tailwind.config.js)** `colors` section:
```javascript
colors: {
  primary: '#764640',      // Main burgundy
  cream: '#F5EFE7',       // Light background
  lightBrown: '#C9A98A',  // Accents
  darkBrown: '#5C3A34',   // Dark text
}
```

### 4. Change Fonts
Edit **[tailwind.config.js](tailwind.config.js)** `fontFamily` section and update Google Fonts import in **[index.html](index.html)**

### 5. Update Story Text
Edit **[src/components/Page2/StorySection.jsx](src/components/Page2/StorySection.jsx)**:
- Replace placeholder text with your love story

---

## 📱 Responsive Design

Mobile-first approach with Tailwind breakpoints:
- **Base (< 640px)**: Mobile phones - single column, larger touch targets
- **sm (≥ 640px)**: Large phones - slightly larger fonts
- **md (≥ 768px)**: Tablets - two-column layouts
- **lg (≥ 1024px)**: Desktops - multi-column, full width

---

## 🎨 Typography Reference

| Component | Font | Size | Weight | Usage |
|-----------|------|------|--------|-------|
| "The wedding of" | Love Light | 5xl-7xl | Regular | Hero header |
| Section Titles | Josefin Sans | 3xl-4xl | Bold | Section headers |
| **Countdown Numbers** | **Playfair Display** | **5xl (48px)** | **Semi Bold (600)** | **Timer numbers** |
| Countdown Labels | DM Sans | sm | Regular | Hari/Jam/Menit/Detik |
| **Couple Names** | **Oregano** | **2xl (25px)** | **Regular** | **Profile names** |
| Body Text | DM Sans | base | Regular | Descriptions, paragraphs |
| Buttons | DM Sans | base | Medium | All buttons |
| Instagram Button | DM Sans | base | Regular | Social links |

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Build settings auto-detected (Vite)
4. Deploy!

### Netlify
1. Push code to GitHub
2. Import project on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to any web host
```

---

## 🔮 Recent Updates & Fixes

### ✅ Layered Overlapping Backgrounds (Latest)
- Created `GradientWrapper` component for seamless background sharing
- Hero section uses `bg-opening.png` (base layer, z-index: 1)
- Countdown + Quran sections share `bg-arrum.png` (overlay, z-index: 20)
- Negative margin creates perfect overlap effect
- No gaps between sections

### ✅ Countdown Section Redesign
- Added Playfair Display font for countdown numbers
- S monogram now uses `logo_ss.png` image (not text)
- Countdown card: cream background with `rounded-3xl`
- alarm.gif positioned outside bottom-left of card
- Button includes calendar.png icon
- Perfect center alignment

### ✅ Profile Section Typography Fix
- Added Oregano font for couple names (25px, regular weight)
- Instagram buttons properly centered with `flex justify-center`
- Parent descriptions split into 2 rows (separate `<p>` tags)
- Photo frames have transparent backgrounds (no cream bg)
- couple.gif used as main illustration

### ✅ Quran Section Update
- Bismillah displayed as PNG image (bismillah.png)
- Cleaner layout with better spacing

### ✅ Hero Section Update
- Bird.gif decoration added at bottom
- Removed bg-arrum overlay (only bg-opening.png)
- Added padding-bottom for overlap effect

---

## 📝 Notes

- **Form submissions** currently save to `localStorage` - easy to migrate to backend API later
- **Countdown timer** uses real-time calculation (no time drift)
- **Images** show fallback if not found (graceful error handling)
- **Component architecture** allows easy swapping of placeholder content
- **Mobile-optimized** with touch-friendly buttons (min 44x44px)
- **Layered backgrounds** create sophisticated depth and visual hierarchy
- **Typography hierarchy** uses 5 different fonts for clear visual distinction

---

## 📄 License

Private project for Suci & Seky's wedding.
© 2026 HARIKITA. ALL RIGHTS RESERVED.

---

## 🙏 Support

For issues or questions about the website implementation, refer to:
- Plan file: `/Users/xbox/.claude/plans/twinkly-baking-pine.md`
- React docs: https://react.dev
- Tailwind docs: https://tailwindcss.com
- Vite docs: https://vitejs.dev

---

**Built with ❤️ using React + Vite + Tailwind CSS**

**Latest Update:** Layered overlapping backgrounds, Playfair Display countdown, Oregano profile names
