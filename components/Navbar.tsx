"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const CALENDLY_URL = "https://calendly.com/amber-salterraenterprises/30min";

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
          height: 96px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .tl-logo-zone {
          display: flex;
          align-items: center;
          padding-right: 46px;
          border-right: 0.5px solid rgba(200, 169, 110, 0.22);
          flex-shrink: 0;
          text-decoration: none;
        }

        .tl-logo-wordmark {
          height: 64px;
          width: auto;
          object-fit: contain;
          display: block;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .tl-links {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          padding-left: 58px;
        }

        .tl-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(240, 237, 232, 0.68);
          text-decoration: none;
          padding: 8px 13px;
          border-radius: 3px;
          border: 0.5px solid transparent;
          transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;
        }

        .tl-link:hover {
          color: #f0ede8;
          background: rgba(200, 169, 110, 0.055);
          border-color: rgba(200, 169, 110, 0.16);
        }

        .tl-link.active {
          color: #C8A96E;
          background: rgba(200, 169, 110, 0.08);
          border-color: rgba(200, 169, 110, 0.22);
        }

        .tl-cta {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.11em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.52);
          border-radius: 3px;
          padding: 11px 22px;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: rgba(200, 169, 110, 0.09);
          border-color: rgba(200, 169, 110, 0.86);
          color: #f0ede8;
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
          width: 24px;
          height: 1.5px;
          background: rgba(200, 169, 110, 0.85);
          transition: all 0.2s ease;
        }

        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0d0d0d;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          padding: 18px 24px 26px;
          gap: 6px;
        }

        .tl-mobile-menu.open {
          display: flex;
        }

        .tl-mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(240, 237, 232, 0.72);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 0.5px solid rgba(240, 237, 232, 0.06);
          transition: color 0.15s ease;
        }

        .tl-mobile-link:hover,
        .tl-mobile-link.active {
          color: #C8A96E;
        }

        .tl-mobile-cta {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.45);
          border-radius: 3px;
          padding: 12px 16px;
          text-align: center;
          margin-top: 14px;
        }

        .tl-mobile-cta:hover {
          background: rgba(200, 169, 110, 0.09);
          border-color: rgba(200, 169, 110, 0.86);
          color: #f0ede8;
        }

        @media (max-width: 1120px) {
          .tl-nav-inner {
            padding: 0 32px;
          }

          .tl-logo-zone {
            padding-right: 32px;
          }

          .tl-links {
            padding-left: 36px;
            gap: 4px;
          }

          .tl-link {
            font-size: 18px;
            padding: 8px 10px;
          }

          .tl-cta {
            font-size: 15px;
            padding: 10px 16px;
          }

          .tl-logo-wordmark {
            height: 56px;
          }
        }

        @media (max-width: 900px) {
          .tl-links,
          .tl-cta {
            display: none;
          }

          .tl-hamburger {
            display: flex;
          }

          .tl-logo-zone {
            border-right: none;
            padding-right: 0;
          }
        }

        @media (max-width: 520px) {
          .tl-nav-inner {
            height: 82px;
            padding: 0 22px;
          }

          .tl-logo-wordmark {
            height: 44px;
          }
        }

        @media (max-width: 390px) {
          .tl-logo-wordmark {
            height: 38px;
          }
        }
      `}</style>

      <nav className="tl-nav">
        <div className="tl-nav-inner">
          <Link href="/" className="tl-logo-zone" aria-label="Salterra Enterprises home">
            <img
              src="/salterra_wordmark_v2.png"
              alt="Salterra Enterprises, LLC"
              className="tl-logo-wordmark"
            />
          </Link>

          <div className="tl-links">
            <Link href="/about" className={`tl-link${isActive("/about") ? " active" : ""}`}>
              About
            </Link>
            <Link href="/services" className={`tl-link${isActive("/services") ? " active" : ""}`}>
              Services
            </Link>
            <Link href="/industries" className={`tl-link${isActive("/industries") ? " active" : ""}`}>
              Industries
            </Link>
            <Link href="/contact" className={`tl-link${isActive("/contact") ? " active" : ""}`}>
              Contact
            </Link>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tl-cta"
          >
            Schedule Consultation →
          </a>

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
          <Link href="/about" className={`tl-mobile-link${isActive("/about") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" className={`tl-mobile-link${isActive("/services") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/industries" className={`tl-mobile-link${isActive("/industries") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Industries
          </Link>
          <Link href="/contact" className={`tl-mobile-link${isActive("/contact") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tl-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Consultation →
          </a>
        </div>
      </nav>
    </>
  );
}