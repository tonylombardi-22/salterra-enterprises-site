import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        body {
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
        }

        .page {
          min-height: 100vh;
          background: #0a0a0a;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 48px;
          text-align: center;
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
          font-size: clamp(56px, 8vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 28px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .copy {
          max-width: 680px;
          margin: 0 auto 42px;
          color: rgba(240,237,232,0.6);
          line-height: 1.9;
          font-size: 16px;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-ghost {
          text-decoration: none;
          padding: 14px 28px;
          font-size: 13px;
          border-radius: 2px;
        }

        .btn-primary {
          background: #f0ede8;
          color: #0a0a0a;
        }

        .btn-ghost {
          color: rgba(240,237,232,0.72);
          border: 0.5px solid rgba(240,237,232,0.18);
        }

        .btn-ghost:hover {
          color: #f0ede8;
          border-color: rgba(200,169,110,0.45);
        }

        @media (max-width: 700px) {
          .container {
            padding: 80px 24px;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="container">
          <div className="eyebrow">Message Received</div>

          <h1>
            Thank you for reaching out.<br />
            <span className="gold">We’ll be in touch soon.</span>
          </h1>

          <p className="copy">
            Your message has been sent to Salterra Enterprises. Amber will review your inquiry
            and follow up using the contact information provided.
          </p>

          <div className="actions">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}