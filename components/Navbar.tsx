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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .tl-nav {
          background: #0d0d0d;
          border-bottom: 0.5px solid rgba(240,237,232,0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        .tl-nav-inner {
          display: flex;
          align-items: center;
          height: 92px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .tl-logo-zone {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .tl-logo {
          height: 90px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .tl-links {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-left: 42px;
          flex: 1;
        }

        .tl-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.58);
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 4px;
          transition: all 0.18s ease;
        }

        .tl-link:hover {
          color: rgba(240,237,232,0.95);
          background: rgba(240,237,232,0.05);
        }

        .tl-link.active {
          color: #f0ede8;
          background: rgba(200,169,110,0.10);
        }

        .tl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200,169,110,0.5);
          border-radius: 4px;
          padding: 11px 22px;
          transition: all 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: rgba(200,169,110,0.08);
          border-color: rgba(200,169,110,0.85);
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
          background: rgba(240,237,232,0.65);
          transition: all 0.2s ease;
        }

        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0d0d0d;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding: 18px 24px 24px;
          gap: 4px;
        }

        .tl-mobile-menu.open {
          display: flex;
        }

        .tl-mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(240,237,232,0.65);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 0.5px solid rgba(240,237,232,0.06);
        }

        .tl-mobile-link.active,
        .tl-mobile-link:hover {
          color: #f0ede8;
        }

        .tl-mobile-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200,169,110,0.45);
          border-radius: 4px;
          padding: 11px 16px;
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .tl-nav-inner {
            padding: 0 24px;
          }

          .tl-logo {
            height: 78px;
          }
        }

        @media (max-width: 768px) {
          .tl-links {
            display: none;
          }

          .tl-cta {
            display: none;
          }

          .tl-hamburger {
            display: flex;
          }

          .tl-logo {
            height: 72px;
          }
        }

        @media (max-width: 480px) {
          .tl-nav-inner {
            height: 82px;
          }

          .tl-logo {
            height: 62px;
          }
        }
      `}</style>

      <nav className="tl-nav">
        <div className="tl-nav-inner">
          <Link
            href="/"
            className="tl-logo-zone"
            aria-label="Salterra Enterprises Home"
          >
            <img
              src="/salterra-logo.jpg"
              alt="Salterra Enterprises"
              className="tl-logo"
            />
          </Link>

          <div className="tl-links">
            <Link
              href="/about"
              className={`tl-link${isActive("/about") ? " active" : ""}`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`tl-link${isActive("/services") ? " active" : ""}`}
            >
              Services
            </Link>

            <Link
              href="/industries"
              className={`tl-link${isActive("/industries") ? " active" : ""}`}
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className={`tl-link${isActive("/contact") ? " active" : ""}`}
            >
              Contact
            </Link>
          </div>

          <Link href="/contact" className="tl-cta">
            SCHEDULE CONSULTATION →
          </Link>

          <button
            className="tl-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(5px,5px)"
                  : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px,-5px)"
                  : "none",
              }}
            />
          </button>
        </div>

        <div className={`tl-mobile-menu${menuOpen ? " open" : ""}`}>
          <Link
            href="/about"
            className={`tl-mobile-link${isActive("/about") ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/services"
            className={`tl-mobile-link${isActive("/services") ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/industries"
            className={`tl-mobile-link${isActive("/industries") ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className={`tl-mobile-link${isActive("/contact") ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="tl-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            SCHEDULE CONSULTATION →
          </Link>
        </div>
      </nav>
    </>
  );
}