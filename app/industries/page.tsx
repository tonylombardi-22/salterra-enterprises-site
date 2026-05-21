import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
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
          max-width: 820px;
          color: rgba(240,237,232,0.6);
          line-height: 1.9;
          font-size: 16px;
          margin-bottom: 72px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          border: 0.5px solid rgba(240,237,232,0.08);
          background: rgba(240,237,232,0.02);
          padding: 36px;
        }

        .number {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: rgba(200,169,110,0.72);
          margin-bottom: 20px;
        }

        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          line-height: 1;
          margin-bottom: 18px;
        }

        .body {
          color: rgba(240,237,232,0.55);
          line-height: 1.85;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .list {
          list-style: none;
          padding: 0;
        }

        .list li {
          color: rgba(240,237,232,0.72);
          margin-bottom: 10px;
          font-size: 13px;
        }

        .list li::before {
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
          margin-bottom: 24px;
        }

        .section-copy {
          max-width: 780px;
          color: rgba(240,237,232,0.55);
          line-height: 1.9;
          margin-bottom: 36px;
        }

        .pills {
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
          color: rgba(10,10,10,0.68);
          font-size: 14px;
        }

        .cta-button {
          background: #0a0a0a;
          color: #f0ede8;
          text-decoration: none;
          padding: 14px 28px;
          white-space: nowrap;
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .container {
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

        <section className="container">
          <div className="eyebrow">Industries Served</div>

          <h1>
            Experience supporting organizations across{" "}
            <span className="gold">regulated and growth-oriented industries.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises supports organizations that require operational discipline,
            customer focus, workflow efficiency, and practical execution. Amber's background
            spans regulated financial services, business operations, product management,
            customer experience, and sales support functions.
          </p>

          <div className="grid">

            <div className="card">
              <div className="number">01</div>
              <div className="title">Financial Services</div>
              <p className="body">
                Experience working within regulated environments where documentation,
                compliance awareness, process consistency, and customer service are critical.
              </p>
              <ul className="list">
                <li>Client onboarding workflows</li>
                <li>Operational process support</li>
                <li>Documentation management</li>
                <li>Compliance-aware procedures</li>
              </ul>
            </div>

            <div className="card">
              <div className="number">02</div>
              <div className="title">Insurance</div>
              <p className="body">
                Support organizations focused on customer service, operational efficiency,
                workflow optimization, and internal process improvement.
              </p>
              <ul className="list">
                <li>Process improvement</li>
                <li>Customer experience support</li>
                <li>Project coordination</li>
                <li>Operational documentation</li>
              </ul>
            </div>

            <div className="card">
              <div className="number">03</div>
              <div className="title">Professional Services</div>
              <p className="body">
                Help service-based businesses improve internal operations,
                client delivery, communication, and execution.
              </p>
              <ul className="list">
                <li>Workflow optimization</li>
                <li>Client-facing processes</li>
                <li>Administrative systems</li>
                <li>Business organization</li>
              </ul>
            </div>

            <div className="card">
              <div className="number">04</div>
              <div className="title">Small Business</div>
              <p className="body">
                Provide structure, operational support, and process clarity
                without requiring a full-time operations hire.
              </p>
              <ul className="list">
                <li>Operating procedures</li>
                <li>Administrative support</li>
                <li>Process documentation</li>
                <li>Business systems improvement</li>
              </ul>
            </div>

          </div>

          <section className="section">
            <div className="section-title">
              Experience built on practical execution.
            </div>

            <p className="section-copy">
              Amber maintains active FINRA licensing across more than 40 states and brings
              experience spanning product management, operations, customer experience,
              sales support, workflow optimization, and business process improvement.
            </p>

            <div className="pills">
              <div className="pill">FINRA Licensed</div>
              <div className="pill">40+ States</div>
              <div className="pill">Financial Services</div>
              <div className="pill">Insurance</div>
              <div className="pill">Operations</div>
              <div className="pill">Customer Experience</div>
              <div className="pill">Product Management</div>
              <div className="pill">Workflow Optimization</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">
                Looking for operational support in your industry?
              </div>

              <div className="cta-copy">
                Let's discuss your business goals and identify practical ways
                to improve execution, efficiency, and customer experience.
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