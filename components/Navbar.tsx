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
          background:
            radial-gradient(circle at 78% 0%, rgba(182, 138, 60, 0.055), transparent 28%),
            rgba(13, 27, 42, 0.96);
          border-bottom: 0.5px solid rgba(182, 138, 60, 0.12);
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          backdrop-filter: blur(14px);
          box-shadow: 0 14px 38px rgba(0, 0, 0, 0.18);
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
          border-right: 0.5px solid rgba(182, 138, 60, 0.22);
          flex-shrink: 0;
          text-decoration: none;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }

        .tl-logo-zone:hover {
          filter: drop-shadow(0 0 18px rgba(182, 138, 60, 0.16));
          opacity: 0.96;
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
          transition:
            color 0.28s ease,
            background 0.28s ease,
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            text-shadow 0.28s ease,
            transform 0.28s ease;
        }

        .tl-link:hover {
          color: #D4AF63;
          background: rgba(182, 138, 60, 0.055);
          border-color: rgba(182, 138, 60, 0.22);
          text-shadow: 0 0 18px rgba(182, 138, 60, 0.25);
          box-shadow: 0 0 28px rgba(182, 138, 60, 0.08);
          transform: translateY(-1px);
        }

        .tl-link.active {
          color: #D4AF63;
          background: rgba(182, 138, 60, 0.08);
          border-color: rgba(182, 138, 60, 0.26);
          text-shadow: 0 0 14px rgba(182, 138, 60, 0.18);
        }

        .tl-cta {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.11em;
          color: #D4AF63;
          background-image: linear-gradient(160deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          border: 0.5px solid rgba(182, 138, 60, 0.52);
          border-radius: 3px;
          padding: 11px 22px;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background-image: none;
          background-color: rgba(182, 138, 60, 0.105);
          -webkit-background-clip: initial;
          -webkit-text-fill-color: #f0ede8;
          background-clip: initial;
          border-color: rgba(182, 138, 60, 0.9);
          box-shadow: 0 0 34px rgba(182, 138, 60, 0.14);
          transform: translateY(-2px);
        }

        .tl-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: 0.5px solid rgba(182, 138, 60, 0.16);
          border-radius: 3px;
          cursor: pointer;
          padding: 8px;
          margin-left: auto;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .tl-hamburger:hover {
          border-color: rgba(182, 138, 60, 0.42);
          box-shadow: 0 0 24px rgba(182, 138, 60, 0.10);
        }

        .tl-hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: rgba(182, 138, 60, 0.85);
          transition: all 0.25s ease;
        }

        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background:
            radial-gradient(circle at 80% 0%, rgba(182, 138, 60, 0.06), transparent 36%),
            #0D1B2A;
          border-top: 0.5px solid rgba(182, 138, 60, 0.12);
          padding: 18px 24px 26px;
          gap: 6px;
          box-shadow: 0 20px 44px rgba(0, 0, 0, 0.22);
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
          transition: color 0.25s ease, text-shadow 0.25s ease, padding-left 0.25s ease;
        }

        .tl-mobile-link:hover,
        .tl-mobile-link.active {
          color: #D4AF63;
          text-shadow: 0 0 18px rgba(182, 138, 60, 0.22);
          padding-left: 4px;
        }

        .tl-mobile-cta {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #D4AF63;
          background: linear-gradient(160deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          border: 0.5px solid rgba(182, 138, 60, 0.45);
          border-radius: 3px;
          padding: 12px 16px;
          text-align: center;
          margin-top: 14px;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .tl-mobile-cta:hover {
          background: rgba(182, 138, 60, 0.105);
          border-color: rgba(182, 138, 60, 0.86);
          color: #f0ede8;
          box-shadow: 0 0 34px rgba(182, 138, 60, 0.13);
          transform: translateY(-2px);
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