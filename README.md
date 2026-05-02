# 📚 Online Book Borrowing Platform

A seamless and modern web application designed to digitize the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally — all secured with authentication and built for performance.

---

## 🌐 Live URL

[https://your-live-url.vercel.app](https://your-live-url.vercel.app)

> Replace this with your actual deployed URL.

---

## ✨ Key Features

- **Browse & Discover** — Explore a full collection of books with cover images, titles, authors, and descriptions
- **Category Sidebar** — Filter books instantly by category (Story, Tech, Science) on the All Books page
- **Featured Books Carousel** — Homepage Swiper.js carousel showcasing top books with smooth drag-to-scroll
- **Book Details Page** — Private route showing full book info including available quantity and a "Borrow This Book" action
- **Authentication** — Email/password login & registration + Google OAuth via BetterAuth
- **My Profile** — Private route displaying user info with an update form (name & avatar)
- **Marquee Banner** — Scrolling new arrivals and membership discount announcements
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Search** — Search books by title on the All Books page

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [DaisyUI](https://daisyui.com/) |
| Authentication | [BetterAuth](https://better-auth.com/) |
| Database | [MongoDB](https://www.mongodb.com/) |
| Carousel | [Swiper.js](https://swiperjs.com/) |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | App framework with SSR and App Router |
| `react` / `react-dom` | UI rendering |
| `tailwindcss` | Utility-first CSS |
| `daisyui` | Pre-built Tailwind components |
| `better-auth` | Authentication (email + Google OAuth) |
| `swiper` | Featured books drag-to-scroll carousel |
| `mongoose` | MongoDB ODM |
| `react-hot-toast` | Toast notifications for auth feedback |

---

## 📁 Project Structure

```
├── app/
│   ├── page.jsx               # Homepage
│   ├── all-books/
│   │   └── page.jsx           # All Books page
│   ├── books/[id]/
│   │   └── page.jsx           # Single Book Details (private)
│   ├── profile/
│   │   └── page.jsx           # My Profile (private)
│   ├── login/
│   │   └── page.jsx           # Login page
│   └── register/
│       └── page.jsx           # Register page
├── component/
│   ├── homepage/
│   │   ├── Banner.jsx         # Hero banner
│   │   ├── Marque.jsx         # Scrolling marquee
│   │   ├── FeaturedBooks.jsx  # Swiper carousel
│   │   └── BookCard.jsx       # Reusable book card
│   └── allBookPage/
│       ├── AllBooksClient.jsx # Category filter + search logic
│       └── allBookCard.jsx    # Books grid
├── lib/
│   └── data.js                # Data fetching utility
└── public/
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never commit `.env.local` to GitHub. It is already listed in `.gitignore`.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Pages Overview

| Page | Access | Description |
|---|---|---|
| `/` | Public | Homepage with banner, marquee, featured books |
| `/all-books` | Public | Full book list with category sidebar and search |
| `/books/[id]` | Private | Book details with borrow action |
| `/profile` | Private | User info and update form |
| `/login` | Public | Email login + Google OAuth |
| `/register` | Public | New user registration |

---

## 👤 Author

**Shihab Bhuiya**
- GitHub: [@your-github-username](https://github.com/your-github-username)