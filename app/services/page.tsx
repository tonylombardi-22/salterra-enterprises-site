import Navbar from "@/components/Navbar";
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
          max-width: 780px;
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
          line-height: 1.8;
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
          <div className="eyebrow">Services</div>

          <h1>
            Practical business support built around{" "}
            <span className="gold">execution, efficiency, and growth.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises helps organizations improve operations,
            streamline workflows, support strategic initiatives, and create
            scalable systems that help teams work more effectively. We focus on
            practical solutions that create measurable business value.
          </p>

          <div className="grid">

            <div className="card">
              <div className="num">01</div>
              <div className="title">Business Operations Consulting</div>

              <p className="body">
                Improve operational efficiency through process evaluation,
                organizational structure, workflow redesign, and operational
                planning.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Process mapping and documentation</div>
                <div className="bullet">• Workflow optimization</div>
                <div className="bullet">• SOP development</div>
                <div className="bullet">• Operational assessments</div>
              </div>
            </div>

            <div className="card">
              <div className="num">02</div>
              <div className="title">Product & Project Management</div>

              <p className="body">
                Bring structure and accountability to important initiatives from
                planning through execution.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Project planning and coordination</div>
                <div className="bullet">• Product roadmap support</div>
                <div className="bullet">• Stakeholder management</div>
                <div className="bullet">• Delivery oversight</div>
              </div>
            </div>

            <div className="card">
              <div className="num">03</div>
              <div className="title">Administrative & Operational Support</div>

              <p className="body">
                Experienced business support that helps organizations stay
                organized, responsive, and focused on growth.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Documentation management</div>
                <div className="bullet">• Reporting support</div>
                <div className="bullet">• Scheduling and coordination</div>
                <div className="bullet">• Process administration</div>
              </div>
            </div>

            <div className="card">
              <div className="num">04</div>
              <div className="title">Customer Experience Optimization</div>

              <p className="body">
                Improve how customers interact with your organization by
                identifying friction points and improving service delivery.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Customer journey review</div>
                <div className="bullet">• Service process improvement</div>
                <div className="bullet">• Onboarding optimization</div>
                <div className="bullet">• Client experience enhancements</div>
              </div>
            </div>

            <div className="card">
              <div className="num">05</div>
              <div className="title">Sales Operations Support</div>

              <p className="body">
                Strengthen sales processes and improve visibility into pipeline,
                communication, and follow-through.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Sales workflow improvement</div>
                <div className="bullet">• CRM process support</div>
                <div className="bullet">• Client engagement workflows</div>
                <div className="bullet">• Operational sales support</div>
              </div>
            </div>

            <div className="card">
              <div className="num">06</div>
              <div className="title">Financial Services Operations</div>

              <p className="body">
                Specialized support for regulated environments leveraging
                active FINRA licensing across 40+ states and experience working
                within compliance-focused business operations.
              </p>

              <div className="bullet-list">
                <div className="bullet">• Regulatory workflow support</div>
                <div className="bullet">• Client onboarding processes</div>
                <div className="bullet">• Documentation controls</div>
                <div className="bullet">• Operational improvement initiatives</div>
              </div>
            </div>

          </div>

          <section className="credibility">
            <div className="credibility-title">
              Experience grounded in real-world business operations.
            </div>

            <p className="credibility-copy">
              Amber Zeigler brings experience across product management,
              operations, customer experience, sales support, workflow
              optimization, and regulated financial environments. Her active
              FINRA licensing across more than 40 states provides valuable
              perspective when supporting organizations that operate within
              compliance-focused business environments.
            </p>

            <div className="pill-container">
              <div className="pill">FINRA Licensed</div>
              <div className="pill">40+ States</div>
              <div className="pill">Product Management</div>
              <div className="pill">Business Operations</div>
              <div className="pill">Workflow Re-engineering</div>
              <div className="pill">Customer Experience</div>
              <div className="pill">Project Leadership</div>
              <div className="pill">Sales Operations</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">
                Ready to improve how your business operates?
              </div>

              <div className="cta-copy">
                Let's discuss your goals, challenges, and opportunities for
                operational improvement.
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