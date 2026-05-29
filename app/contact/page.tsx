"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqndqoq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        router.push("/thank-you");
        return;
      }

      setErrorMessage(
        "Something went wrong while sending your message. Please try again or email Amber directly."
      );
    } catch {
      setErrorMessage(
        "Something went wrong while sending your message. Please try again or email Amber directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
            radial-gradient(circle at 50% 6%, rgba(182,138,60,0.08), transparent 34%),
            #0D1B2A;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 48px;
        }

        .eyebrow {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(182,138,60,0.72);
          border: 0.5px solid rgba(182,138,60,0.22);
          padding: 8px 14px;
          margin-bottom: 30px;
        }

        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(54px, 7vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 28px;
          max-width: 940px;
          font-weight: 600;
        }

        .gold {
          font-style: italic;
          color: #D4AF63;
          background: linear-gradient(160deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-right: 0.08em;
        }

        .intro {
          max-width: 800px;
          color: rgba(240,237,232,0.6);
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 72px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }

        .panel {
          border: 0.5px solid rgba(240,237,232,0.08);
          background: rgba(240,237,232,0.02);
          padding: 36px;
          transition: all 0.3s ease;
        }

        .panel:hover {
          border-color: rgba(182,138,60,0.24);
          box-shadow: 0 0 42px rgba(182,138,60,0.08);
        }

        .panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          line-height: 1;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .panel-copy {
          color: rgba(240,237,232,0.55);
          line-height: 1.85;
          font-size: 14px;
          margin-bottom: 28px;
        }

        .form {
          display: grid;
          gap: 18px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        label {
          color: rgba(182,138,60,0.72);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        input,
        textarea,
        select {
          width: 100%;
          border: 0.5px solid rgba(240,237,232,0.12);
          background: rgba(13,27,42,0.72);
          color: #f0ede8;
          padding: 13px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: rgba(182,138,60,0.55);
          box-shadow: 0 0 24px rgba(182,138,60,0.08);
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit {
          background: linear-gradient(135deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%);
          color: #0D1B2A;
          border: none;
          padding: 14px 26px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          cursor: pointer;
          width: fit-content;
          transition: all 0.3s ease;
        }

        .submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(182,138,60,0.18);
        }

        .submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .note {
          color: rgba(240,237,232,0.4);
          font-size: 12px;
          line-height: 1.7;
          margin-top: 4px;
        }

        .error {
          color: #f2b8b8;
          border: 0.5px solid rgba(242,184,184,0.35);
          background: rgba(242,184,184,0.07);
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.6;
        }

        .info-block {
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 22px;
          margin-top: 22px;
        }

        .info-label {
          color: rgba(182,138,60,0.72);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .info-value,
        .info-value a {
          color: rgba(240,237,232,0.76);
          font-size: 14px;
          line-height: 1.8;
          text-decoration: none;
        }

        .info-value a:hover {
          color: #D4AF63;
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 18px;
        }

        .quick-link {
          color: rgba(240,237,232,0.6);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.25s ease, text-shadow 0.25s ease;
        }

        .quick-link:hover {
          color: #D4AF63;
          text-shadow: 0 0 18px rgba(182,138,60,0.18);
        }

        .disclaimer {
          margin-top: 72px;
          border-top: 1px solid transparent;
          border-image: linear-gradient(
            90deg,
            transparent,
            rgba(182,138,60,0.35),
            transparent
          ) 1;
          padding-top: 28px;
          color: rgba(240,237,232,0.38);
          font-size: 12px;
          line-height: 1.75;
          max-width: 920px;
        }

        @media (max-width: 900px) {
          .container {
            padding: 56px 24px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="container">
          <div className="eyebrow">Contact</div>

          <h1>
            Let’s discuss how your business can{" "}
            <span className="gold">grow with greater clarity and momentum.</span>
          </h1>

          <p className="intro">
            Whether you need help aligning strategy, improving operations, strengthening your
            brand, implementing technology solutions, or supporting growth initiatives, Salterra
            Enterprises helps organizations move from complexity to confident execution
          </p>

          <div className="contact-grid">
            <div className="panel">
              <div className="panel-title">Start the conversation</div>

              <p className="panel-copy">
                Share a few details about your business, growth goals, and the challenges you are
                facing. Salterra Enterprises will follow up to discuss opportunities to improve
                strategy, operations, customer experience, brand positioning, technology execution,
                or business growth initiatives
              </p>

              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Salterra Enterprises website inquiry"
                />

                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Optional" />
                </div>

                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company name" />
                </div>

                <div className="field">
                  <label htmlFor="interest">Area of Interest</label>
                  <select id="interest" name="area_of_interest" defaultValue="" required>
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Strategic Growth & Advisory">
                      Strategic Growth & Advisory
                    </option>
                    <option value="Operations & Process Improvement">
                      Operations & Process Improvement
                    </option>
                    <option value="Brand & Content Strategy">
                      Brand & Content Strategy
                    </option>
                    <option value="Technology & Digital Solutions">
                      Technology & Digital Solutions
                    </option>
                    <option value="Customer Experience & Business Performance">
                      Customer Experience & Business Performance
                    </option>
                    <option value="Administrative & Business Infrastructure">
                      Administrative & Business Infrastructure
                    </option>
                    <option value="Not sure yet">
                      Not sure yet
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business goals, challenges, and what success looks like for your organization"
                    required
                  />
                </div>

                {errorMessage && <p className="error">{errorMessage}</p>}

                <button className="submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="note">
                  This secure form sends your inquiry directly to Salterra Enterprises.
                  Amber will follow up using the contact information provided.
                </p>
              </form>
            </div>

            <aside className="panel">
              <div className="panel-title">Contact Information</div>

              <p className="panel-copy">
                For strategic advisory, operational support, brand development, technology
                initiatives, or growth-focused engagements, contact Salterra Enterprises directly.
              </p>

              <div className="info-block">
                <div className="info-label">Email</div>
                <div className="info-value">
                  <a href="mailto:amber@salterraenterprises.com">
                    amber@salterraenterprises.com
                  </a>
                </div>
              </div>

              <div className="info-block">
                <div className="info-label">Services</div>
                <div className="info-value">
                  Strategy · Operations · Brand · Technology · Growth
                </div>
              </div>

              <div className="info-block">
                <div className="info-label">Professional Background</div>
                <div className="info-value">
                  Experience spanning product management, customer experience, sales, operations,
                  regulated financial services, workflow improvement, business strategy, and
                  growth-focused execution
                </div>
              </div>

              <div className="info-block">
                <div className="info-label">Explore</div>
                <div className="quick-links">
                  <Link href="/services" className="quick-link">
                    View Services →
                  </Link>
                  <Link href="/industries" className="quick-link">
                    View Industries →
                  </Link>
                  <Link href="/about" className="quick-link">
                    Learn About Amber →
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          <p className="disclaimer">
            Salterra Enterprises provides strategic advisory, operational support, brand strategy,
            technology coordination, and business growth services. References to financial services
            experience or FINRA licensing describe professional background and familiarity with
            regulated environments, not securities, investment advisory, brokerage, legal, or tax
            services.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}