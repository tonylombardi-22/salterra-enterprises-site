import Navbar from "@/components/Navbar";
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

        .wrap {
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
          margin-bottom: 32px;
        }

        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(54px, 7vw, 86px);
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-weight: 600;
          max-width: 900px;
          margin-bottom: 28px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 760px;
          font-size: 16px;
          line-height: 1.85;
          color: rgba(240,237,232,0.6);
          margin-bottom: 72px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 72px;
          align-items: start;
        }

        .panel {
          border: 0.5px solid rgba(240,237,232,0.09);
          background: rgba(240,237,232,0.025);
          padding: 36px;
        }

        .panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .panel-copy {
          color: rgba(240,237,232,0.55);
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .method {
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 18px;
        }

        .method-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.72);
          margin-bottom: 8px;
        }

        .method-value,
        .method-value a {
          color: #f0ede8;
          font-size: 15px;
          text-decoration: none;
        }

        .method-value a:hover {
          color: #C8A96E;
        }

        .form {
          display: grid;
          gap: 18px;
        }

        .field-group {
          display: grid;
          gap: 8px;
        }

        label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.5);
        }

        input,
        textarea,
        select {
          width: 100%;
          background: rgba(240,237,232,0.035);
          border: 0.5px solid rgba(240,237,232,0.12);
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 14px;
          outline: none;
          border-radius: 2px;
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

        .submit-note {
          color: rgba(240,237,232,0.42);
          font-size: 12.5px;
          line-height: 1.65;
        }

        .submit {
          background: #C8A96E;
          color: #0a0a0a;
          border: none;
          padding: 15px 28px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 2px;
          cursor: pointer;
          width: fit-content;
        }

        .submit:hover {
          opacity: 0.88;
        }

        .direct-email {
          display: inline-block;
          color: #C8A96E;
          text-decoration: none;
          margin-top: 10px;
        }

        .direct-email:hover {
          color: #f0ede8;
        }

        .disclaimer {
          margin-top: 72px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 34px;
          color: rgba(240,237,232,0.38);
          font-size: 12px;
          line-height: 1.7;
          max-width: 900px;
        }

        @media (max-width: 900px) {
          .wrap {
            padding: 56px 24px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="wrap">
          <div className="eyebrow">Contact</div>

          <h1>
            Let’s talk about where your business needs{" "}
            <span className="gold">more clarity and support.</span>
          </h1>

          <p className="intro">
            Whether you need help improving workflows, supporting a strategic initiative,
            organizing operations, or strengthening client-facing processes, Salterra Enterprises
            can help you identify the next practical step forward.
          </p>

          <div className="contact-grid">
            <div className="panel">
              <div className="panel-title">Start the conversation</div>

              <p className="panel-copy">
                Share a few details about your business, your goals, and the challenge you are
                trying to solve. Salterra Enterprises will follow up to determine whether there is
                a good fit for consulting, operations support, or project-based engagement.
              </p>

              <form
                className="form"
                action="mailto:amber@salterraenterprises.com"
                method="post"
                encType="text/plain"
              >
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="Name" type="text" placeholder="Your name" />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="Email" type="email" placeholder="you@example.com" />
                </div>

                <div className="field-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="Company" type="text" placeholder="Company name" />
                </div>

                <div className="field-group">
                  <label htmlFor="service">Area of Interest</label>
                  <select id="service" name="Area of Interest" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Business Operations Consulting</option>
                    <option>Workflow Optimization</option>
                    <option>Product & Project Management</option>
                    <option>Administrative & Operational Support</option>
                    <option>Customer Experience Optimization</option>
                    <option>Financial Services Operations</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    placeholder="Tell us what you are trying to improve, simplify, or move forward."
                  />
                </div>

                <button className="submit" type="submit">
                  Send Message
                </button>

                <p className="submit-note">
                  This form opens your email client so you can review the message before sending.
                  You can also email Amber directly using the address below.
                </p>
              </form>
            </div>

            <aside className="panel">
              <div className="panel-title">Contact Information</div>

              <p className="panel-copy">
                For consulting inquiries, business operations support, or project-based work,
                email Salterra Enterprises directly.
              </p>

              <div className="contact-methods">
                <div className="method">
                  <div className="method-label">Email</div>
                  <div className="method-value">
                    <a href="mailto:amber@salterraenterprises.com">
                      amber@salterraenterprises.com
                    </a>
                  </div>
                </div>

                <div className="method">
                  <div className="method-label">Services</div>
                  <div className="method-value">
                    Consulting · Operations · Workflow Strategy · Project Support
                  </div>
                </div>

                <div className="method">
                  <div className="method-label">Regulated Business Experience</div>
                  <div className="method-value">
                    Active FINRA licensing across 40+ states
                  </div>
                </div>

                <div className="method">
                  <div className="method-label">Next Step</div>
                  <div className="method-value">
                    <Link href="/services" className="direct-email">
                      Review Services →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <p className="disclaimer">
            Salterra Enterprises provides consulting, operations, workflow, and business support
            services. Any reference to financial services experience or FINRA licensing is intended
            to describe professional background and familiarity with regulated environments, not to
            advertise securities, investment advisory, brokerage, or legal services.
          </p>
        </section>
      </main>
    </>
  );
}