import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Online Book Borrowing
          </h2>
          <p className="text-sm">
            Discover, borrow, and enjoy your favorite books anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/books">All Books</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/story">Story</Link></li>
            <li><Link href="/category/tech">Tech</Link></li>
            <li><Link href="/category/history">History</Link></li>
            <li><Link href="/category/science">Science</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>© {new Date().getFullYear()} Online Book Borrowing Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;