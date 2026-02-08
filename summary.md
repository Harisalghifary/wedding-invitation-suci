# Suci & Seky Wedding Invitation Website

## 📋 Project Overview

A beautiful, mobile-responsive two-page wedding invitation website for Suci & Seky's wedding on **February 14, 2026**. Built with modern web technologies featuring an elegant design with curtain effect cover page, layered overlapping backgrounds, and comprehensive main page with 9 interactive sections.

---

## 🚀 Tech Stack

- **React 18** - Component-based UI framework
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Supabase** - Backend-as-a-Service for wishes storage and real-time updates
- **react-hook-form** - Form validation and state management
- **react-scroll** - Smooth scrolling between sections
- **react-icons** - UI icon library (FaInstagram, FaCopy, FaCheck, etc.)

---

## 🎨 Design System

### Typography
- **Love Light** - Decorative headers (cursive) - "The wedding of"
- **Josefin Sans** - Section headers (sans-serif, bold)
- **DM Sans** - Body text, buttons, labels (sans-serif)
- **Playfair Display** - Ceremony headers (serif, semi-bold)
- **PT Serif** - Countdown numbers (serif, bold)
- **Oregano** - Couple names in profiles (cursive, regular)
- **Passions Conflict** - "Terima Kasih" script text in footer (cursive, 80px)
- **Poppins** - Copyright bar text (sans-serif, 8px)

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
- ✅ Full-screen cover with background image (bg-cover.png)
- ✅ Absolutely positioned layout: "Wedding Invitation" top-center, "Suci" upper-left, "&" center, "Seky" lower-right (diagonal arrangement)
- ✅ Guest name from URL param (`?to=` or `?name=`), displays "Kepada: {name}" or fallback "Haris dan Rezkita"
- ✅ "Open Invitation" button with `icon_envelop.png` image at bottom-center
- ✅ Smooth transition to main page

### Page 2: Main Website (9 Sections)

1. **Hero Section** - "The wedding of" with 4-photo auto-sliding carousel (402×638px responsive) and Bird.gif
2. **Countdown Section** - Real-time countdown with PT Serif Bold numbers, 308×144px card, ribbon.gif, love_1/2.gif decorations, alarm.gif, Save the Date with Google Calendar/Apple Calendar (.ics) integration
3. **Quran Section** - Ar-Rum verse 21 (bismillah.png + translation), full-width flower_frame.png at bottom, min-height 100vh
4. **Profile Section** - Bride & Groom profiles with Oregano font, groom.gif flipped horizontally
5. **Event Section** - Ceremony details, venue, dresscode with bg-ceremony.png background
6. **Story Section** - Couple's love story with actual content, photos, and absolutely positioned decorative illustrations (chapel, glass, candle)
7. **Gallery Section** - Fixed 3x4 photo grid (109×171px cells, 13px gaps, 353px total width)
8. **Interaction Section** - Wishes form (Supabase backend, real-time + force re-fetch, URL param name read-only, scrollable 340px container) + Wedding Gift (gradient bank cards, copy icon, Google Sheets gift registry link)
9. **Footer Section** - Photo strip (3 rounded-xl photos with drop shadow), love animations (love_1_dark/love_2_dark/love_3.gif), "Terima Kasih" (Passions Conflict 80px), car illustration, black copyright bar

### Interactive Features
- ⏰ **Real-time countdown timer** (days, hours, minutes, seconds) with PT Serif Bold font
- 📅 **Save the Date** - Google Calendar (Android/desktop) + Apple Calendar (.ics download) integration
- 📝 **Wishes form** with Supabase backend, real-time updates + force re-fetch after submit, URL param name read-only, scrollable container (340px max-height), custom scrollbar, 500 char limit
- 💳 **Copy-to-clipboard** for bank account numbers with money-transfer.svg icon
- 🎁 **Gift registry link** button (Google Sheets: actual link)
- 🗺️ **Google Maps integration** for venue location
- 📱 **Instagram links** for bride and groom
- 💾 **Supabase** for wishes storage with real-time subscription + duplicate prevention
- 🎨 **Layered overlapping backgrounds** - Hero section overlaps with Countdown/Quran
- 💕 **Love animations** - Animated GIF decorations on countdown and footer sections

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
│       ├── carousel-1.png        # Main couple photo (cover page)
│       ├── hero_carrousel1.png   # Hero carousel slide 1
│       ├── hero_carrousel2.png   # Hero carousel slide 2
│       ├── hero_carrousel3.png   # Hero carousel slide 3
│       ├── hero_carrousel4.png   # Hero carousel slide 4
│       ├── Bird.gif              # Bird decoration with ribbon
│       ├── alarm.gif             # Alarm clock decoration
│       ├── calendar.svg          # Calendar icon for Save the Date button
│       ├── chapel.png           # Chapel decoration (Story section, left-top)
│       ├── glass.png            # Champagne glasses decoration (Story section, right-top)
│       ├── candle.png           # Candles decoration (Story section, right-bottom)
│       ├── flower_frame.png     # Flower frame decoration (Quran section bottom)
│       ├── icon_envelop.png     # Envelope icon for invitation button
│       ├── ribbon.gif           # Ribbon decoration (countdown card top-right)
│       ├── love_1.gif           # Love animation (countdown section)
│       ├── love_2.gif           # Love animation (countdown section)
│       ├── love_1_dark.gif      # Love animation dark variant (footer)
│       ├── love_2_dark.gif      # Love animation dark variant (footer)
│       ├── love_3.gif           # Love animation variant (footer)
│       ├── couple.gif            # Couple illustration
│       ├── bismillah.png         # Bismillah Arabic text
│       ├── logo_ss.png           # S monogram logo
│       ├── money-transfer.svg   # Copy icon for bank cards
│       ├── car.png              # Car with ribbon illustration
│       ├── footer_1.png         # Footer photo frame 1
│       ├── footer_2.png         # Footer photo frame 2
│       └── footer_3.png         # Footer photo frame 3
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
│   ├── lib/
│   │   └── supabase.js                  # Supabase client initialization
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
│  - 4-photo carousel (auto-slide)    │
│  - Bird.gif decoration              │
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
- Full-screen background image (bg-cover.png)
- Absolutely positioned layout: names in diagonal arrangement (Suci upper-left, & center, Seky lower-right)
- Guest name from URL params (`?to=` or `?name=`), displays "Kepada: {name}" or fallback
- "Open Invitation" button with `icon_envelop.png` image (no react-icons dependency)
- Opens main page on button click

**[src/components/layout/GradientWrapper.jsx](src/components/layout/GradientWrapper.jsx)** - **NEW!**
- Wraps Countdown + Quran sections
- Provides shared `bg-arrum.png` background
- Creates overlap effect with Hero section (margin-top: -160px)
- z-index: 20 (sits on top of Hero)

**[src/components/Page2/HeroSection.jsx](src/components/Page2/HeroSection.jsx)** - Hero section
- Background: `bg-opening.png` only (no overlay)
- 4-photo auto-sliding carousel (CSS Transform, no library)
- Photos: `hero_carrousel1-4.png`, auto-advance every 4s, infinite loop
- Carousel container: `max-w-[402px]` responsive with `aspect-ratio: 402/638`
- Decorative geometric shapes (lightBrown + blue-200) behind carousel
- Bird.gif decoration at bottom
- Padding-bottom: 160px for overlap
- z-index: 1 (bottom layer)

**[src/components/Page2/CountdownSection.jsx](src/components/Page2/CountdownSection.jsx)** - Countdown timer
- Bird.gif decoration flipped horizontally (`scale-x-[-1]`), 432×215px
- S monogram using `logo_ss.png` image (w-40 h-40, large and prominent)
- Countdown card: exact 308×144px, `#FFFAF2` background, rounded-2xl, opacity-84
- love_1.gif (left) and love_2.gif (right) decorations around card
- ribbon.gif at top-right of card (98×102px)
- alarm.gif at bottom-left with rotation (-15deg, 145×152px)
- Save the Date button: smaller (text-sm, px-6 py-2.5), `calendar.svg` icon
- **Calendar integration:** Google Calendar for Android/desktop, .ics file download for Apple devices
- Transparent background (inherits from GradientWrapper)

**[src/components/shared/CountdownTimer.jsx](src/components/shared/CountdownTimer.jsx)** - Timer display
- **Typography:** PT Serif Bold (text-4xl) for numbers
- DM Sans (text-xs) for labels (Hari, Jam, Menit, Detik)
- Grid layout (4 columns, gap-3, h-full items-center)
- No individual boxes (clean, minimal design)

**[src/components/Page2/ProfileSection.jsx](src/components/Page2/ProfileSection.jsx)** - Profiles
- **Couple names:** Oregano Regular (25px / text-2xl)
- **Instagram buttons:** Centered with flex justify-center
- **Parent descriptions:** Split into 2 rows (separate <p> tags)
- **Photo frames:** Transparent background, decorative corners
- **Couple illustration:** couple.gif at bottom
- Introduction card: cream background with rounded-3xl

**[src/components/Page2/QuranSection.jsx](src/components/Page2/QuranSection.jsx)** - Quran verse
- Custom `<section>` (no SectionWrapper) with min-height 100vh
- **Bismillah:** PNG image (bismillah.png) with mb-12 spacing
- Translation text centered with max-w-2xl, mb-16 spacing
- Full-width `flower_frame.png` at absolute bottom (left-0, w-full, z-10)
- Padding: top 80px, bottom 120px for flower frame space

**[src/components/Page2/InteractionSection.jsx](src/components/Page2/InteractionSection.jsx)** - Interactive features
- **WishesSection:** Supabase-backed with real-time updates + force re-fetch after submit
  - Guest name from URL param (`?to=` or `?name=`), input always visible but read-only when from URL
  - Scrollable wishes display (limit 20, maxHeight 340px) with custom scrollbar CSS
  - Duplicate prevention in real-time subscription
  - 500 character limit with counter display
  - Scroll hint when >4 wishes exist
  - Loading states, error handling, success feedback with fadeIn animation
- **WeddingGiftSection:** Gradient bank cards with money-transfer.svg copy icon, "Nama akun" labels, "Daftar Pilihan Hadiah" Google Sheets link (actual URL)

**[src/lib/supabase.js](src/lib/supabase.js)** - Supabase client
- Initializes Supabase client from env vars (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- Returns null if env vars missing (graceful degradation)

**[src/components/Page2/FooterSection.jsx](src/components/Page2/FooterSection.jsx)** - Footer
- Love animations: love_1_dark.gif, love_2_dark.gif, love_3.gif at absolute positions (left + right sides)
- Photo strip: #5B322D bg, 3 stacked photos (273×167px, 9px gap), **rounded-xl with shadow-lg and sharp rendering**
- Photo frame container: rounded-xl
- Wedding date: DM Sans 20px
- "Terima Kasih": Passions Conflict 80px script font with tracking-tight
- Car illustration: `/assets/car.png` with mix-blend-exclusion
- Copyright bar: black bg, Poppins 8px, full width
- Footer has `relative overflow-hidden` for love animation containment

**[src/hooks/useCountdown.js](src/hooks/useCountdown.js)** - Countdown timer
- Real-time calculation every second
- Returns days, hours, minutes, seconds
- Auto-cleanup with `useEffect`

### Configuration

**[tailwind.config.js](tailwind.config.js)** - Design system
- **Custom colors:** primary, cream, lightBrown, darkBrown
- **Custom fonts:** loveLight, josefin, dmSans, playfair, oregano, passions, poppins, ptSerif (8 fonts)
- **Background images:** cover-pattern, arrum-pattern, ceremony-pattern
- **Animation:** fadeIn keyframe (0.3s ease-in-out, translateY(-10px) to 0)

**[index.html](index.html)** - HTML template
- Google Fonts: Love Light, Josefin Sans, DM Sans, Playfair Display, Oregano, Passions Conflict, Poppins, PT Serif (Bold 700)
- Preconnect for performance optimization
- Favicon: logo_ss.png

**[src/index.css](src/index.css)** - Global styles
- Tailwind base/components/utilities
- Custom scrollbar styles for `.wishes-scroll` class (6px width, rounded, themed colors)

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
- `carousel-1.png` - Main couple photo (cover page)
- `hero_carrousel1.png` to `hero_carrousel4.png` - Hero carousel slides (4 photos)
- `our_story_photo.png` - Story section first photo (dining table)
- `our_story_carrousel1.png` - Story section second photo (mountain)
- `galeri 1.png` to `galeri 12.png` - Gallery photos (3x4 grid)
- `decor_venue.gif` - Ballroom decoration illustration
- `gedung.png` - Venue building sketch
- `ring.gif` - Wedding ring icon
- `pengantin.png` - Couple illustration
- `couple.gif` - Couple illustration (Profile + bottom)
- `Bird.gif` - Bird decoration with ribbon
- `alarm.gif` - Alarm clock decoration
- `calendar.png` - Calendar icon for button
- `bismillah.png` - Bismillah Arabic text image
- `logo_ss.png` - S monogram logo
- `money-transfer.svg` - Copy icon for bank cards
- `car.png` - Car with ribbon illustration (footer)
- `footer_photo1.png` - Footer photo frame 1
- `footer_photo2.png` - Footer photo frame 2
- `footer_photo3.png` - Footer photo frame 3

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
- Story content is now hardcoded (2 paragraphs in Indonesian)
- Photos: `our_story_photo.png` and `our_story_carrousel1.png`

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
| **Ceremony Headers** | **Playfair Display** | **4xl** | **Bold** | **"The Ceremony", date, venue name, Dresscode** |
| **Countdown Numbers** | **PT Serif** | **4xl** | **Bold (700)** | **Timer numbers** |
| Countdown Labels | DM Sans | xs | Regular | Hari/Jam/Menit/Detik |
| **Couple Names** | **Oregano** | **2xl (25px)** | **Regular** | **Profile names** |
| Event Labels (Akad/Resepsi) | Love Light | 3xl | Regular | Script labels |
| Body Text | DM Sans | base | Regular | Descriptions, paragraphs |
| Story Text | DM Sans | xs | Regular | Story paragraphs (justified) |
| Dresscode Labels | DM Sans | xs | Italic | Color circle labels |
| Buttons | DM Sans | base | Medium | All buttons |
| Instagram Button | DM Sans | base | Regular | Social links |
| "Terima Kasih" | Passions Conflict | 80px | Regular | Footer script text |
| Copyright | Poppins | 8px | Regular | Copyright bar |

---

## 🚢 Deployment

### Environment Variables
Set these in your hosting platform (Vercel/Netlify) or `.env` file:
```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Build settings auto-detected (Vite)
5. Deploy!

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
- Bird.gif flipped horizontally (`scale-x-[-1]`) and enlarged to w-56
- S monogram enlarged to w-40 h-40 (was w-18 h-18), removed opacity
- Countdown card background changed to `#FFFAF2` (was `bg-cream` / #F5EFE7)
- Card padding increased to px-6 py-14, shadow-xl
- alarm.gif enlarged to w-28 h-28 with z-20
- Button icon changed from `calendar.png` to `calendar.svg` with `brightness-0 invert` for white color
- CountdownTimer labels upgraded to text-sm (was text-xs)

### ✅ Profile Section Typography Fix
- Added Oregano font for couple names (25px, regular weight)
- Instagram buttons properly centered with `flex justify-center`
- Parent descriptions split into 2 rows (separate `<p>` tags)
- Photo frames have transparent backgrounds (no cream bg)
- couple.gif used as main illustration

### ✅ Quran Section Update
- Bismillah displayed as PNG image (bismillah.png)
- Cleaner layout with better spacing

### ✅ Hero Section Carousel (Latest)
- Replaced static single photo with 4-photo auto-sliding carousel
- CSS Transform approach (no external library) with `translateX` transitions
- Photos: `hero_carrousel1.png` through `hero_carrousel4.png`
- Auto-advance every 4 seconds with infinite loop
- Responsive container: `max-w-[402px] w-full` with `aspect-ratio: 402/638`
- Decorative geometric shapes (lightBrown + blue-200) positioned behind carousel
- Heart emoji decorations at corners
- Bird.gif decoration below carousel
- Removed redundant "S" monogram (already in CountdownSection)

### ✅ Event Section Overhaul (Latest)
- Custom `<section>` with `bg-ceremony-pattern bg-cover bg-center` (replaces SectionWrapper)
- All headers use Playfair Display font (The Ceremony, date, venue name, Dresscode)
- Venue name "Ballroom Grand Tjokro Premiere Bandung" now `font-playfair` (was `font-josefin`)
- Ring icon enlarged to `w-16 h-16` (was `w-12 h-12`)
- "Sabtu" displayed as decorative divider with horizontal lines
- Added `decor_venue.gif` ballroom illustration between event details and dresscode
- Dresscode: 5 color circles in single row with exact hex colors (#FFFFFF, #C8B1A0, #B6928D, #768064, #754B4D)
- Each circle has italic DM Sans label below

### ✅ Story Section with Decorative Illustrations (Latest)
- Absolutely positioned illustrations around story card:
  - Chapel (`chapel.png`): top-left (-top-10, -left-6, w-32)
  - Champagne glasses (`glass.png`): top-right (top-6, right-12, w-16)
  - Candles (`candle.png`): bottom-right (-bottom-4, -right-4, w-24)
  - All with opacity-80, pointer-events-none
- Photo 1: `our_story_photo.png` (top, full-width)
- Photo 2: `our_story_carrousel1.png` (bottom, full-width)
- Story card with relative positioning, mb-12 spacing
- Header: Josefin Sans "Our Story"
- Body: DM Sans `text-xs` justified text (2 paragraphs)

### ✅ Gallery Section Overhaul
- Fixed 3x4 grid on ALL screen sizes (no responsive breakpoints)
- Exact cell dimensions: 109px × 171px
- Gap: 13px (horizontal and vertical)
- Total grid width: 353px, centered with `mx-auto`
- Images: `/assets/galeri 1.png` through `/assets/galeri 12.png`
- Native lazy loading: `loading="lazy"` + `decoding="async"`
- Removed SectionWrapper and weddingData dependency

### ✅ Interaction Section - Supabase Integration (Latest)
- **Wishes Section:** Migrated from localStorage to Supabase backend
  - New file: `src/lib/supabase.js` - Supabase client with graceful null fallback
  - New dependency: `@supabase/supabase-js`
  - Environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (in `.env`)
  - Real-time updates via `postgres_changes` subscription (new wishes appear instantly)
  - Loading states (`fetchingWishes`, `loading`) with user feedback
  - Error handling with Indonesian error messages
  - Success message "Ucapan berhasil dikirim!" (3s auto-dismiss)
  - Relative timestamps (Baru saja, X menit lalu, X jam lalu, etc.)
  - URL param support: `?name=` or `?to=` auto-fills guest name
  - fadeIn animation on wish cards (Tailwind keyframe)
  - Supabase table: `wishes` (id, name, message, created_at) with RLS policies
- **Wedding Gift Section:** Unchanged (gradient bank cards, copy icon, gift registry)

### ✅ InvitationGuard Absolute Positioning (Latest)
- Switched from flex-column centered layout to absolute positioning
- "Wedding Invitation" at top-center (top-20)
- "Suci" at upper-left (top-[20%], left-[10%], text-[90px])
- "&" at center (top-[32%], centered with translate)
- "Seky" at lower-right (top-[45%], right-[10%], text-[90px])
- "To" + guest name at bottom-44/bottom-36
- Button at bottom-20, all elements use Love Light font for names

### ✅ Footer Section Overhaul (Latest)
- Photo frame: `#5B322D` dark brown bg, rounded-3xl, 20px padding
- 3 stacked photos (273×167px each, 9px gap)
- Wedding date: DM Sans 20px, tracking-wide
- "Terima Kasih": Passions Conflict 80px script font
- Car illustration: `/assets/car.png` (w-40)
- S monogram: `/assets/logo_ss.png` (w-16 h-16)
- Copyright bar: black bg, full width, Poppins 8px
- Added Passions Conflict + Poppins fonts to index.html and tailwind.config.js (now 7 fonts)
- Removed SectionWrapper, uses native `<footer>` tag

---

## 📝 Notes

- **Form submissions** save to Supabase (`wishes` table) with real-time subscription
- **URL parameters** - Guest name from `?name=` or `?to=` auto-fills wishes form
- **Countdown timer** uses real-time calculation (no time drift)
- **Images** show fallback if not found (graceful error handling)
- **Component architecture** allows easy swapping of placeholder content
- **Mobile-optimized** with touch-friendly buttons (min 44x44px)
- **Layered backgrounds** create sophisticated depth and visual hierarchy
- **Typography hierarchy** uses 7 different fonts for clear visual distinction

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

### ✅ Session 2 Updates (Latest)

**InvitationGuard:**
- Guest name from URL params (`?to=` or `?name=`), displays "Kepada: {name}"
- Replaced FaEnvelope react-icon with `icon_envelop.png` image

**Countdown Section Overhaul:**
- Card resized to exact 308×144px with inline styles
- Font changed from Playfair Display to PT Serif Bold (text-4xl)
- Added ribbon.gif (top-right, 98×102px), love_1.gif (left), love_2.gif (right)
- Alarm clock with rotation (-15deg) and larger size (145×152px)
- Save the Date: Google Calendar for Android/desktop, .ics file for Apple devices
- Button made smaller (text-sm, px-6 py-2.5)

**Quran Section:**
- Switched from SectionWrapper to custom `<section>` with min-height 100vh
- Added full-width flower_frame.png at absolute bottom
- Increased spacing: paddingTop 80px, paddingBottom 120px

**Wedding Gift:**
- Updated gift registry link from `#` to actual Google Sheets URL

**Wishes Section:**
- Force re-fetch after submit (replaces local state update for reliability)
- Name field always visible, read-only when from URL parameter
- Scrollable container (maxHeight 340px) with custom scrollbar CSS
- Duplicate prevention in real-time subscription
- 500 character limit with counter, scroll hint for >4 wishes

**Footer Section:**
- Added love animation GIFs (love_1_dark, love_2_dark, love_3) on left/right sides
- Photo strip: rounded-xl corners with shadow-lg drop shadow
- Sharp image rendering with imageRendering: auto

**Fonts & Config:**
- Added PT Serif Bold to Google Fonts import and Tailwind config (now 8 fonts)
- Added custom scrollbar CSS to index.css

**Latest Update:** Countdown overhaul, Quran flower frame, Wishes force re-fetch, Footer love animations, PT Serif font, Save the Date calendar integration
