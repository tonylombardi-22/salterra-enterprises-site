import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ContactPage() {
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 48px;
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
          font-size: clamp(54px, 7vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 28px;
          max-width: 940px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 760px;
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
        }

        .panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          line-height: 1;
          margin-bottom: 18px;
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
          color: rgba(200,169,110,0.72);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        input,
        textarea,
        select {
          width: 100%;
          border: 0.5px solid rgba(240,237,232,0.12);
          background: rgba(10,10,10,0.7);
          color: #f0ede8;
          padding: 13px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: rgba(200,169,110,0.55);
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit {
          background: #C8A96E;
          color: #0a0a0a;
          border: none;
          padding: 14px 26px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          cursor: pointer;
          width: fit-content;
        }

        .submit:hover {
          opacity: 0.88;
        }

        .note {
          color: rgba(240,237,232,0.4);
          font-size: 12px;
          line-height: 1.7;
          margin-top: 4px;
        }

        .info-block {
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 22px;
          margin-top: 22px;
        }

        .info-label {
          color: rgba(200,169,110,0.72);
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
          color: #C8A96E;
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
        }

        .quick-link:hover {
          color: #C8A96E;
        }

        .disclaimer {
          margin-top: 72px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
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
            Let’s discuss where your business needs{" "}
            <span className="gold">more clarity, structure, and support.</span>
          </h1>

          <p className="intro">
            Whether you need help improving workflows, supporting a strategic initiative,
            organizing operations, or strengthening client-facing processes, Salterra
            Enterprises can help identify practical next steps.
          </p>

          <div className="contact-grid">
            <div className="panel">
              <div className="panel-title">Start the conversation</div>

              <p className="panel-copy">
                Share a few details about your business, your goals, and the challenge
                you are trying to solve. Salterra Enterprises will follow up to determine
                whether there is a good fit for consulting, operations support, or
                project-based work.
              </p>

              <form
                className="form"
                action="https://formspree.io/f/xpqndqoq"
                method="POST"
              >
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
                    <option value="Business Operations">Business Operations</option>
                    <option value="Product Strategy & Planning">Product Strategy & Planning</option>
                    <option value="Administrative Support">Administrative Support</option>
                    <option value="Strategic Project Support">Strategic Project Support</option>
                    <option value="Financial Services Operations">Financial Services Operations</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you are trying to improve, simplify, or move forward."
                    required
                  />
                </div>

                <button className="submit" type="submit">
                  Send Message
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
                For consulting inquiries, operations support, workflow improvement,
                or project-based engagements, email Salterra Enterprises directly.
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
                  Consulting · Operations · Workflow Strategy · Product & Project Support
                </div>
              </div>

              <div className="info-block">
                <div className="info-label">Professional Background</div>
                <div className="info-value">
                  Product management, sales operations, customer experience, workflow
                  optimization, and active FINRA licensing across 40+ states.
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
            Salterra Enterprises provides consulting, operations, workflow, and business
            support services. References to financial services experience or FINRA licensing
            describe professional background and familiarity with regulated environments,
            not securities, investment advisory, brokerage, legal, or tax services.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}