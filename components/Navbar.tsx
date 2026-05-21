"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .tl-nav {
          background: #0d0d0d;
          border-bottom: 0.5px solid rgba(240, 237, 232, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        .tl-nav-inner {
          display: flex;
          align-items: center;
          height: 76px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .tl-logo-zone {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 32px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.1);
          flex-shrink: 0;
          text-decoration: none;
        }

        .tl-logo-mark {
          height: 42px;
          width: 42px;
          object-fit: cover;
          border-radius: 50%;
        }

        .tl-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .tl-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #f0ede8;
        }

        .tl-logo-sub {
          margin-top: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: #C8A96E;
          text-transform: uppercase;
        }

        .tl-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          padding-left: 28px;
        }

        .tl-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(240, 237, 232, 0.5);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 4px;
          transition: color 0.18s ease, background 0.18s ease;
        }

        .tl-link:hover {
          color: rgba(240, 237, 232, 0.9);
          background: rgba(240, 237, 232, 0.05);
        }

        .tl-link.active {
          color: #f0ede8;
          background: rgba(200, 169, 110, 0.1);
        }

        .tl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.5);
          border-radius: 4px;
          padding: 8px 18px;
          transition: background 0.18s ease, border-color 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: rgba(200, 169, 110, 0.08);
          border-color: rgba(200, 169, 110, 0.8);
        }

        .tl-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          margin-left: auto;
        }

        .tl-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(240, 237, 232, 0.6);
          transition: all 0.2s ease;
        }

        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0d0d0d;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          padding: 16px 24px 24px;
          gap: 4px;
        }

        .tl-mobile-menu.open { display: flex; }

        .tl-mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(240, 237, 232, 0.6);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 0.5px solid rgba(240, 237, 232, 0.06);
          transition: color 0.15s ease;
        }

        .tl-mobile-link:hover,
        .tl-mobile-link.active { color: #f0ede8; }

        .tl-mobile-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.4);
          border-radius: 4px;
          padding: 10px 16px;
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .tl-logo-main { font-size: 23px; }
          .tl-logo-sub { font-size: 9px; }
          .tl-logo-zone { padding-right: 20px; }
        }

        @media (max-width: 768px) {
          .tl-nav-inner { padding: 0 24px; }
          .tl-links { display: none; }
          .tl-cta { display: none; }
          .tl-hamburger { display: flex; }
          .tl-logo-zone { border-right: none; padding-right: 0; }
        }

        @media (max-width: 430px) {
          .tl-logo-main { font-size: 20px; letter-spacing: 0.12em; }
          .tl-logo-sub { font-size: 8px; letter-spacing: 0.14em; }
          .tl-logo-mark { height: 36px; width: 36px; }
        }
      `}</style>

      <nav className="tl-nav">
        <div className="tl-nav-inner">
          <Link href="/" className="tl-logo-zone" aria-label="Salterra Enterprises home">
            <img
              src="/salterra-logo.jpg"
              alt="Salterra Enterprises logo"
              className="tl-logo-mark"
            />
            <div className="tl-logo-text">
              <span className="tl-logo-main">SALTERRA</span>
              <span className="tl-logo-sub">Enterprises, LLC</span>
            </div>
          </Link>

          <div className="tl-links">
            <Link href="/about" className={`tl-link${isActive("/about") ? " active" : ""}`}>About</Link>
            <Link href="/services" className={`tl-link${isActive("/services") ? " active" : ""}`}>Services</Link>
            <Link href="/industries" className={`tl-link${isActive("/industries") ? " active" : ""}`}>Industries</Link>
            <Link href="/contact" className={`tl-link${isActive("/contact") ? " active" : ""}`}>Contact</Link>
          </div>

          <Link href="/contact" className="tl-cta">SCHEDULE CONSULTATION →</Link>

          <button
            className="tl-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        <div className={`tl-mobile-menu${menuOpen ? " open" : ""}`}>
          <Link href="/about" className={`tl-mobile-link${isActive("/about") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className={`tl-mobile-link${isActive("/services") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/industries" className={`tl-mobile-link${isActive("/industries") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link href="/contact" className={`tl-mobile-link${isActive("/contact") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="tl-mobile-cta" onClick={() => setMenuOpen(false)}>SCHEDULE CONSULTATION →</Link>
        </div>
      </nav>
    </>
  );
}