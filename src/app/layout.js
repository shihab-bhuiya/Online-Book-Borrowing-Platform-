import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/shared/NavBar";
import Footer from "./footer/page.jsx";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Borrowing Platform",
  description: "Created by Shihab Bhuiya",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar></NavBar>
        {children}
        <ToastContainer />
        <Footer/>
        </body>
    </html>
  );
}
