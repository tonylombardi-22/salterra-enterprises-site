import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer {
          border-top: 0.5px solid rgba(240,237,232,0.08);
          background: #0a0a0a;
          padding: 42px 48px;
        }

        .site-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 36px;
          align-items: start;
        }

        .footer-brand {
          color: #f0ede8;
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          letter-spacing: 0.12em;
          text-decoration: none;
        }

        .footer-sub {
          margin-top: 10px;
          color: rgba(200,169,110,0.72);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-copy {
          margin-top: 18px;
          color: rgba(240,237,232,0.45);
          font-size: 13px;
          line-height: 1.7;
          max-width: 360px;
        }

        .footer-heading {
          color: rgba(200,169,110,0.72);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: rgba(240,237,232,0.48);
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
        }

        .footer-link:hover {
          color: #f0ede8;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 36px auto 0;
          padding-top: 22px;
          border-top: 0.5px solid rgba(240,237,232,0.07);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          color: rgba(240,237,232,0.34);
          font-size: 12px;
          line-height: 1.6;
        }

        @media (max-width: 800px) {
          .site-footer {
            padding: 36px 24px;
          }

          .site-footer-inner {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <Link href="/" className="footer-brand">
              SALTERRA
            </Link>
            <div className="footer-sub">Enterprises, LLC</div>
            <p className="footer-copy">
              Business consulting, operations support, workflow optimization, and project
              leadership for organizations that need clearer systems and stronger execution.
            </p>
          </div>

          <div>
            <div className="footer-heading">Explore</div>
            <div className="footer-links">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/industries" className="footer-link">Industries</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-links">
              <a href="mailto:amber@salterraenterprises.com" className="footer-link">
                amber@salterraenterprises.com
              </a>
              <span className="footer-link">
                Active FINRA licensing across 40+ states
              </span>
              <a
                href="https://calendly.com/amber-salterraenterprises/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Schedule Consultation →
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Salterra Enterprises, LLC. All rights reserved.</span>
          <span>
            Consulting · Operations · Workflow Strategy · Project Support
          </span>
        </div>
      </footer>
    </>
  );
}