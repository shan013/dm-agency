
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Check whether this menu item matches the current page
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">

        {/* Logo */}
        <a href="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">◎</span>
          <span>DM Agency.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Social Links */}
        <div className="header-socials desktop-socials">
          <a href="#" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Mobile / Tablet Menu */}
        <div
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="mobile-navigation"
        >
          <nav className="main-nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Social Links */}
          <div className="header-socials">
            <a href="#" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
