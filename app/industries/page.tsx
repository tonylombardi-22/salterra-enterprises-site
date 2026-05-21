import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function IndustriesPage() {
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
          max-width: 950px;
          margin-bottom: 28px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 820px;
          font-size: 16px;
          line-height: 1.85;
          color: rgba(240,237,232,0.6);
          margin-bottom: 72px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .card {
          border: 0.5px solid rgba(240,237,232,0.09);
          background: rgba(240,237,232,0.025);
          padding: 34px;
          min-height: 320px;
          transition: all 0.25s ease;
        }

        .card:hover {
          border-color: rgba(200,169,110,0.24);
          transform: translateY(-3px);
        }

        .num {
          color: rgba(200,169,110,0.72);
          font-size: 11px;
          letter-spacing: 0.14em;
          margin-bottom: 22px;
        }

        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          line-height: 1.05;
          margin-bottom: 16px;
        }

        .body {
          color: rgba(240,237,232,0.55);
          font-size: 14px;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .bullet-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bullet {
          color: rgba(240,237,232,0.45);
          font-size: 13px;
          line-height: 1.7;
        }

        .credibility {
          margin-top: 90px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 60px;
        }

        .credibility-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 46px;
          line-height: 1.05;
          margin-bottom: 24px;
        }

        .credibility-copy {
          max-width: 850px;
          color: rgba(240,237,232,0.58);
          line-height: 1.9;
          margin-bottom: 34px;
        }

        .pill-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          border: 0.5px solid rgba(200,169,110,0.24);
          color: rgba(200,169,110,0.78);
          padding: 8px 14px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .cta {
          margin-top: 90px;
          background: #C8A96E;
          padding: 54px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          line-height: 1.05;
          color: #0a0a0a;
          font-weight: 600;
        }

        .cta-copy {
          margin-top: 10px;
          color: rgba(10,10,10,0.65);
          font-size: 14px;
        }

        .btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 14px 28px;
          text-decoration: none;
          font-size: 13px;
          border-radius: 2px;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .wrap {
            padding: 56px 24px;
          }

          .grid {
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

        <section className="wrap">
          <div className="eyebrow">Industries Served</div>

          <h1>
            Supporting organizations across{" "}
            <span className="gold">regulated, operational, and growth-focused environments.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises brings experience that spans product management,
            business operations, customer experience, workflow optimization, sales support,
            and regulated financial environments. While every organization is unique,
            our approach focuses on creating clarity, improving execution, and helping
            businesses operate more efficiently.
          </p>

          <div className="grid">

            <div className="card">
              <div className="num">01</div>
              <div className="title">Financial Services</div>

              <p className="body">
                Experience supporting regulated business environments where
                process consistency, documentation, client service, and operational
                discipline are critical.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Compliance-aware workflows</div>
                <div className="bullet">• Client onboarding support</div>
                <div className="bullet">• Process documentation</div>
                <div className="bullet">• Operational improvement initiatives</div>
              </div>
            </div>

            <div className="card">
              <div className="num">02</div>
              <div className="title">Insurance</div>

              <p className="body">
                Support operational teams, customer-facing functions,
                and process improvement efforts within insurance and
                risk-management organizations.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Workflow optimization</div>
                <div className="bullet">• Customer experience improvement</div>
                <div className="bullet">• Project coordination</div>
                <div className="bullet">• Documentation standards</div>
              </div>
            </div>

            <div className="card">
              <div className="num">03</div>
              <div className="title">Professional Services</div>

              <p className="body">
                Help consulting firms, agencies, and service-based businesses
                improve internal operations, client delivery, and organizational effectiveness.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Business process improvement</div>
                <div className="bullet">• Client engagement workflows</div>
                <div className="bullet">• Team coordination</div>
                <div className="bullet">• Administrative efficiency</div>
              </div>
            </div>

            <div className="card">
              <div className="num">04</div>
              <div className="title">Small Business</div>

              <p className="body">
                Provide practical operational support for growing businesses
                that need structure, documentation, and stronger processes
                without adding full-time overhead.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Operating procedures</div>
                <div className="bullet">• Business organization</div>
                <div className="bullet">• Administrative support</div>
                <div className="bullet">• Workflow design</div>
              </div>
            </div>

            <div className="card">
              <div className="num">05</div>
              <div className="title">Startups & Growth Companies</div>

              <p className="body">
                Support fast-moving organizations that need scalable systems,
                project coordination, operational structure, and execution discipline.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Product management support</div>
                <div className="bullet">• Process development</div>
                <div className="bullet">• Strategic initiative execution</div>
                <div className="bullet">• Team alignment</div>
              </div>
            </div>

            <div className="card">
              <div className="num">06</div>
              <div className="title">Operations-Focused Organizations</div>

              <p className="body">
                Partner with organizations that depend on repeatable processes,
                strong execution, and coordinated teams to deliver value consistently.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Workflow redesign</div>
                <div className="bullet">• Operational assessments</div>
                <div className="bullet">• Process documentation</div>
                <div className="bullet">• Execution support</div>
              </div>
            </div>

          </div>

          <section className="credibility">
            <div className="credibility-title">
              Experience that bridges operations, strategy, and regulated environments.
            </div>

            <p className="credibility-copy">
              Amber Zeigler's background combines product management, customer experience,
              sales support, business operations, and active FINRA licensing across more
              than 40 states. This diverse experience provides practical insight into how
              organizations can improve performance while maintaining consistency,
              accountability, and operational discipline.
            </p>

            <div className="pill-container">
              <div className="pill">FINRA Licensed</div>
              <div className="pill">40+ States</div>
              <div className="pill">Financial Services</div>
              <div className="pill">Insurance</div>
              <div className="pill">Professional Services</div>
              <div className="pill">Product Management</div>
              <div className="pill">Operations</div>
              <div className="pill">Customer Experience</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">
                Looking for support within your industry?
              </div>

              <div className="cta-copy">
                Let's discuss your business goals and identify practical opportunities
                to improve execution, efficiency, and operational effectiveness.
              </div>
            </div>

            <Link href="/contact" className="btn">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}