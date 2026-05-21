import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ServicesPage() {
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
          max-width: 950px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 780px;
          color: rgba(240,237,232,0.6);
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 72px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .service-card {
          border: 0.5px solid rgba(240,237,232,0.08);
          background: rgba(240,237,232,0.02);
          padding: 36px;
        }

        .service-number {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: rgba(200,169,110,0.72);
          margin-bottom: 22px;
        }

        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          line-height: 1;
          margin-bottom: 18px;
        }

        .service-description {
          color: rgba(240,237,232,0.55);
          line-height: 1.85;
          font-size: 14px;
          margin-bottom: 22px;
        }

        .service-list {
          list-style: none;
          padding: 0;
        }

        .service-list li {
          color: rgba(240,237,232,0.72);
          margin-bottom: 10px;
          font-size: 13px;
        }

        .service-list li::before {
          content: "• ";
          color: #C8A96E;
        }

        .section {
          margin-top: 88px;
          padding-top: 56px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          line-height: 1;
          margin-bottom: 24px;
        }

        .section-copy {
          max-width: 760px;
          color: rgba(240,237,232,0.55);
          line-height: 1.9;
          margin-bottom: 42px;
        }

        .industries {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .industry {
          border: 0.5px solid rgba(200,169,110,0.25);
          color: rgba(200,169,110,0.8);
          padding: 8px 14px;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        .cta {
          margin-top: 88px;
          background: #C8A96E;
          padding: 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          color: #0a0a0a;
          margin-bottom: 8px;
        }

        .cta-copy {
          color: rgba(10,10,10,0.7);
          font-size: 14px;
        }

        .cta-button {
          background: #0a0a0a;
          color: #f0ede8;
          text-decoration: none;
          padding: 14px 28px;
          font-size: 13px;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .container {
            padding: 56px 24px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="container">
          <div className="eyebrow">
            Services
          </div>

          <h1>
            Practical business support that drives{" "}
            <span className="gold">results, efficiency, and growth.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises provides consulting and operational support
            for organizations that need stronger processes, better workflow
            visibility, improved execution, and practical business structure.
            Whether you're managing growth, improving customer experiences,
            refining internal operations, or launching strategic initiatives,
            we help simplify complexity and move work forward.
          </p>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-number">01</div>
              <div className="service-title">
                Business Operations
              </div>

              <p className="service-description">
                Improve operational efficiency through process redesign,
                workflow documentation, accountability frameworks,
                and business system optimization.
              </p>

              <ul className="service-list">
                <li>Workflow analysis</li>
                <li>Process documentation</li>
                <li>Operational improvements</li>
                <li>Business systems optimization</li>
                <li>Cross-functional coordination</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-title">
                Product Strategy & Planning
              </div>

              <p className="service-description">
                Align business objectives with customer needs through
                structured planning, prioritization, stakeholder engagement,
                and roadmap development.
              </p>

              <ul className="service-list">
                <li>Product planning</li>
                <li>Roadmap development</li>
                <li>Requirements gathering</li>
                <li>Stakeholder alignment</li>
                <li>Strategic prioritization</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-title">
                Administrative Support
              </div>

              <p className="service-description">
                Create structure around daily operations, communication,
                scheduling, documentation, and organizational processes.
              </p>

              <ul className="service-list">
                <li>Documentation management</li>
                <li>Scheduling coordination</li>
                <li>Administrative workflows</li>
                <li>Business organization</li>
                <li>Process support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-title">
                Strategic Project Support
              </div>

              <p className="service-description">
                Help important initiatives stay on track with structured
                planning, stakeholder communication, risk awareness,
                and execution oversight.
              </p>

              <ul className="service-list">
                <li>Project coordination</li>
                <li>Status reporting</li>
                <li>Stakeholder communication</li>
                <li>Execution management</li>
                <li>Operational planning</li>
              </ul>
            </div>

          </div>

          <section className="section">
            <div className="section-title">
              Experience across multiple industries
            </div>

            <p className="section-copy">
              Amber's background includes regulated financial services,
              product management, customer-facing operations, sales,
              business process improvement, and operational support.
              This experience allows Salterra Enterprises to quickly
              understand business challenges and provide practical,
              execution-focused solutions.
            </p>

            <div className="industries">
              <div className="industry">Financial Services</div>
              <div className="industry">Banking</div>
              <div className="industry">Insurance</div>
              <div className="industry">Product Management</div>
              <div className="industry">Sales Operations</div>
              <div className="industry">Customer Experience</div>
              <div className="industry">Business Operations</div>
              <div className="industry">Professional Services</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">
                Let's talk about your business goals.
              </div>

              <div className="cta-copy">
                Schedule a consultation and explore how Salterra Enterprises
                can support your organization.
              </div>
            </div>

            <Link href="/contact" className="cta-button">
              Schedule Consultation
            </Link>
          </div>

        </section>

        <Footer />
      </main>
    </>
  );
}