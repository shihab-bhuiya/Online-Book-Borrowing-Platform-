# 📚 Online Book Borrowing Platform

A seamless and modern web application designed to digitize the traditional library experience. Users can explore a curated collection of books, filter by categories, and borrow titles digitally — all secured with BetterAuth and built on Next.js.

## 🌐 Live URL

🔗 [https://online-book-borrowing-platform-h7hs.vercel.app/homepage](https://online-book-borrowing-platform-h7hs.vercel.app/homepage)

## 📌 Purpose

This platform brings the library experience online — allowing users to browse books, view detailed information, and borrow available copies with a clean, responsive interface across all devices.

## ✨ Key Features

- 🔐 **Secure Authentication** – Email/password login and Google OAuth via BetterAuth
- 📖 **Browse All Books** – Search by title and filter by category (Story, Tech, History, Science)
- 📄 **Book Details Page** – View full book info including availability *(private route)*
- 🛒 **Borrow System** – Borrow available books with confirmation toast feedback
- 👤 **My Profile** – View and update user name and avatar *(private route)*
- 🏠 **Home Page** – Featured books, marquee, book selection tips, and top books section
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework (SSR + routing) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Component library |
| [BetterAuth](https://better-auth.com/) | Authentication |
| [MongoDB](https://www.mongodb.com/) | Database |

## 📦 NPM Packages Used

| Package | Usage |
|---------|-------|
| `better-auth` | Auth (login, register, Google OAuth, session, profile update) |
| `next` | App framework with file-based routing |
| `react-icons` | Icons (CgProfile and more) |
| `react-hot-toast` | Toast notifications |

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB URI
- Google OAuth credentials

### Installation

```bash
git clone https://github.com/your-username/online-book-borrowing-platform.git
cd online-book-borrowing-platform
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000/homepage](http://localhost:3000/homepage) in your browser.

## 📁 Project Structure

online-book-borrowing-platform/
├── src/
│   ├── app/                  # Next.js app router pages
│   ├── assets/               # Static assets (logo.png, etc.)
│   ├── component/
│   │   └── shared/           # NavBar, NavLink, bookCard, leftSide, marque, tips, topBooks
│   └── lib/
│       └── auth-client.js    # BetterAuth client config
├── public/
├── .env
├── next.config.js
└── jsconfig.json

## 📄 Pages Overview

| Route | Access | Description |
|-------|--------|-------------|
| `/homepage` | Public | Banner, marquee, featured books, tips, top books |
| `/allBooks` | Public | All books with search and category filter sidebar |
| `/bookDetails/[id]` | Private | Single book details + borrow action |
| `/profile` | Private | View and update user info |
| `/category/[name]` | Public | Browse by category (Story, Tech, History, Science) |
| `/about` | Public | About page |
| `/contact` | Public | Contact page |

## 📚 Sample Books in Collection

- The Silent Forest *(Story)*
- C++ for Beginners *(Tech)*
- The Space Beyond *(Science)*
- Khuda Ki Basti, Udaas Naslain, Aangan, Peer-e-Kamil, Raja Gidh *(Story/Literature)*

## 👨‍💻 Author

**Your Name**  
GitHub: [shihab-bhuiya](https://github.com/shihab-bhuiya)

© 2026 Online Book Borrowing Platform. All rights reserved.