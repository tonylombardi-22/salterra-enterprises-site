import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Received | Salterra Enterprises",
  description:
    "Thank you for reaching out to Salterra Enterprises. Amber will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

const CALENDLY_URL = "https://calendly.com/amber-salterraenterprises/30min";

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        body {
          background: #0D1B2A;
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 8%, rgba(200,169,110,0.08), transparent 36%),
            #0D1B2A;
        }

        .container {
          max-width: 820px;
          margin: 0 auto;
          padding: 120px 48px 100px;
          text-align: center;
        }

        .check-mark {
          width: 56px;
          height: 56px;
          border: 0.5px solid rgba(200,169,110,0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          background: rgba(200,169,110,0.06);
        }

        .check-mark svg {
          width: 22px;
          height: 22px;
          color: #C8A96E;
        }

        .eyebrow {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.72);
          border: 0.5px solid rgba(200,169,110,0.22);
          padding: 8px 14px;
          margin-bottom: 30px;
        }

        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 28px;
          font-weight: 600;
        }

        .gold {
          font-style: italic;
          color: #C8A96E;
          background: linear-gradient(160deg, #F5D98A 0%, #C8A96E 50%, #8B6318 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .copy {
          max-width: 620px;
          margin: 0 auto 16px;
          color: rgba(240,237,232,0.6);
          line-height: 1.9;
          font-size: 16px;
        }

        .response-time {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: rgba(200,169,110,0.65);
          border: 0.5px solid rgba(200,169,110,0.18);
          padding: 8px 16px;
          margin: 22px auto 48px;
        }

        .divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(200,169,110,0.35), transparent);
          margin: 0 auto 40px;
        }

        .calendly-prompt {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 600;
          color: #f0ede8;
          margin-bottom: 12px;
          line-height: 1.1;
        }

        .calendly-sub {
          font-size: 14px;
          color: rgba(240,237,232,0.5);
          margin-bottom: 32px;
          line-height: 1.7;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .btn-calendly {
          background: linear-gradient(135deg, #E8CC7A 0%, #C8A96E 40%, #9A7030 100%);
          color: #0D1B2A;
          text-decoration: none;
          padding: 15px 32px;
          font-size: 13px;
          letter-spacing: 0.04em;
          border-radius: 2px;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        .btn-calendly:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(200,169,110,0.22);
        }

        .btn-ghost {
          color: rgba(240,237,232,0.62);
          border: 0.5px solid rgba(240,237,232,0.16);
          text-decoration: none;
          padding: 15px 28px;
          font-size: 13px;
          border-radius: 2px;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        .btn-ghost:hover {
          color: #f0ede8;
          border-color: rgba(200,169,110,0.45);
          box-shadow: 0 0 32px rgba(200,169,110,0.10);
        }

        .btn-home {
          color: rgba(240,237,232,0.48);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.06em;
          transition: color 0.2s ease;
          display: block;
          margin-top: 28px;
        }

        .btn-home:hover {
          color: rgba(240,237,232,0.72);
        }

        @media (max-width: 700px) {
          .container {
            padding: 80px 24px 72px;
          }

          .actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-calendly,
          .btn-ghost {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="container">

          <div className="check-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div className="eyebrow">Message Received</div>

          <h1>
            Thank you for<br />
            <span className="gold">reaching out.</span>
          </h1>

          <p className="copy">
            Your message has been sent to Salterra Enterprises. Amber will review your inquiry
            and follow up using the contact information you provided.
          </p>

          <div className="response-time">
            Typical response within 1–2 business days
          </div>

          <div className="divider" />

          <div className="calendly-prompt">
            Prefer to talk sooner?
          </div>

          <p className="calendly-sub">
            Skip the wait and schedule a consultation directly — pick a time that works for you.
          </p>

          <div className="actions">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-calendly"
            >
              Schedule a Consultation
            </a>
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
          </div>

          <Link href="/" className="btn-home">
            ← Return to homepage
          </Link>

        </section>

        <Footer />
      </main>
    </>
  );
}
