import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const CALENDLY_URL = "https://calendly.com/amber-salterraenterprises/30min";

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
          background:
            radial-gradient(circle at 50% 6%, rgba(200,169,110,0.08), transparent 34%),
            #0a0a0a;
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
          max-width: 980px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 820px;
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
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(200,169,110,0.40);
          background: rgba(240,237,232,0.04);
          box-shadow: 0 0 60px rgba(200,169,110,0.14);
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
          border-top: 1px solid transparent;
          border-image: linear-gradient(
            90deg,
            transparent,
            rgba(200,169,110,0.35),
            transparent
          ) 1;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          line-height: 1;
          margin-bottom: 24px;
        }

        .section-copy {
          max-width: 780px;
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
          transition: all 0.25s ease;
        }

        .industry:hover {
          color: #f0ede8;
          border-color: rgba(200,169,110,0.48);
          box-shadow: 0 0 24px rgba(200,169,110,0.10);
          transform: translateY(-2px);
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
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(10,10,10,0.26);
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
            Integrated support for businesses ready to{" "}
            <span className="gold">grow with clarity and momentum.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises helps growing businesses align strategy, operations, brand,
            technology, and execution. Whether you need stronger internal systems, sharper
            positioning, digital support, improved customer experience, or help moving strategic
            initiatives forward, Salterra provides practical partnership designed to reduce
            complexity and support sustainable growth.
          </p>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-number">01</div>
              <div className="service-title">
                Strategic Growth & Business Advisory
              </div>

              <p className="service-description">
                Clarify priorities, shape growth plans, align stakeholders, and create practical
                pathways from business vision to execution.
              </p>

              <ul className="service-list">
                <li>Business planning and prioritization</li>
                <li>Growth strategy support</li>
                <li>Stakeholder alignment</li>
                <li>Strategic roadmap development</li>
                <li>Founder and leadership advisory</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-title">
                Operational Excellence & Execution
              </div>

              <p className="service-description">
                Improve how work gets done through better workflows, clearer accountability,
                stronger operating rhythms, and repeatable business systems.
              </p>

              <ul className="service-list">
                <li>Workflow analysis and redesign</li>
                <li>Process documentation</li>
                <li>Operational improvements</li>
                <li>Cross-functional coordination</li>
                <li>Execution support and project leadership</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-title">
                Brand, Content & Creative Strategy
              </div>

              <p className="service-description">
                Strengthen how the business presents itself through clearer messaging, sharper
                positioning, content direction, and creative strategy that supports growth.
              </p>

              <ul className="service-list">
                <li>Brand positioning</li>
                <li>Messaging strategy</li>
                <li>Content planning</li>
                <li>Thought leadership support</li>
                <li>Market differentiation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-title">
                Technology & Digital Solutions
              </div>

              <p className="service-description">
                Support digital execution through web development, automation, systems integration,
                full-stack technology services, and technical support through trusted partners.
              </p>

              <ul className="service-list">
                <li>Website and application development</li>
                <li>Automation and digital workflows</li>
                <li>Systems integration</li>
                <li>Technical consulting</li>
                <li>Full-stack IT execution support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">05</div>
              <div className="service-title">
                Customer Experience & Business Performance
              </div>

              <p className="service-description">
                Improve customer-facing systems, onboarding, communication workflows, and service
                delivery so clients experience the business with greater consistency and confidence.
              </p>

              <ul className="service-list">
                <li>Customer journey improvement</li>
                <li>Client onboarding workflows</li>
                <li>Service delivery refinement</li>
                <li>Communication process improvement</li>
                <li>Business performance support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-number">06</div>
              <div className="service-title">
                Administrative & Business Infrastructure
              </div>

              <p className="service-description">
                Create practical structure around daily operations, documentation, communication,
                scheduling, and the internal systems that keep growing businesses organized.
              </p>

              <ul className="service-list">
                <li>Documentation management</li>
                <li>Administrative workflow design</li>
                <li>Business organization</li>
                <li>Scheduling and coordination support</li>
                <li>Operating structure development</li>
              </ul>
            </div>

          </div>

          <section className="section">
            <div className="section-title">
              Built for growing organizations with complex needs.
            </div>

            <p className="section-copy">
              Amber's background includes regulated financial services, product management,
              customer-facing operations, sales, business process improvement, and operational
              support. Salterra brings that experience together with creative and technology
              capabilities to help small businesses, founders, and growth-minded organizations
              build stronger systems for what comes next.
            </p>

            <div className="industries">
              <div className="industry">Small Business</div>
              <div className="industry">Founders</div>
              <div className="industry">Financial Services</div>
              <div className="industry">Banking</div>
              <div className="industry">Insurance</div>
              <div className="industry">Professional Services</div>
              <div className="industry">Product Management</div>
              <div className="industry">Sales Operations</div>
              <div className="industry">Customer Experience</div>
              <div className="industry">Business Operations</div>
              <div className="industry">Technology-Enabled Businesses</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">
                Ready to build what comes next?
              </div>

              <div className="cta-copy">
                Schedule a conversation about your strategy, operations, brand, technology needs,
                and the support your business needs to grow.
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Schedule Consultation
            </a>
          </div>

        </section>

        <Footer />
      </main>
    </>
  );
}