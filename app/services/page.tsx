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
          max-width: 850px;
          margin-bottom: 28px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .intro {
          max-width: 720px;
          font-size: 16px;
          line-height: 1.8;
          color: rgba(240,237,232,0.58);
          margin-bottom: 64px;
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
          min-height: 280px;
        }

        .num {
          color: rgba(200,169,110,0.72);
          font-size: 11px;
          letter-spacing: 0.14em;
          margin-bottom: 24px;
        }

        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .body {
          color: rgba(240,237,232,0.52);
          font-size: 14px;
          line-height: 1.8;
        }

        .cta {
          margin-top: 72px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          padding-top: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
        }

        .cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          line-height: 1.05;
          font-weight: 600;
        }

        .btn {
          background: #f0ede8;
          color: #0a0a0a;
          padding: 14px 28px;
          text-decoration: none;
          font-size: 13px;
          border-radius: 2px;
          white-space: nowrap;
        }

        @media (max-width: 800px) {
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
            Practical support for businesses that need{" "}
            <span className="gold">clarity, structure, and execution.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises helps organizations improve the way work gets done.
            From workflow redesign and business operations to product strategy and
            project leadership, we provide practical support that helps teams operate
            with more confidence and less friction.
          </p>

          <div className="grid">
            <div className="card">
              <div className="num">01</div>
              <div className="title">Business Consulting</div>
              <p className="body">
                Strategic guidance for business owners and leadership teams that need
                help organizing priorities, improving execution, and creating clearer
                operating plans.
              </p>
            </div>

            <div className="card">
              <div className="num">02</div>
              <div className="title">Workflow Optimization</div>
              <p className="body">
                Analyze, redesign, and document business processes to reduce friction,
                eliminate bottlenecks, and create scalable ways of working.
              </p>
            </div>

            <div className="card">
              <div className="num">03</div>
              <div className="title">Product & Project Management</div>
              <p className="body">
                Support product initiatives, stakeholder alignment, requirements
                gathering, delivery planning, and cross-functional project execution.
              </p>
            </div>

            <div className="card">
              <div className="num">04</div>
              <div className="title">Administrative & Operations Support</div>
              <p className="body">
                Provide hands-on business support including documentation, reporting,
                scheduling, coordination, process management, and operational follow-through.
              </p>
            </div>

            <div className="card">
              <div className="num">05</div>
              <div className="title">Customer Experience</div>
              <p className="body">
                Improve client onboarding, service workflows, customer journeys, and
                internal processes that shape how customers experience the business.
              </p>
            </div>

            <div className="card">
              <div className="num">06</div>
              <div className="title">Sales Operations</div>
              <p className="body">
                Help refine sales workflows, improve follow-up processes, organize
                client pipelines, and support business development execution.
              </p>
            </div>
          </div>

          <div className="cta">
            <h2>
              Need a clearer way forward?
            </h2>
            <Link href="/contact" className="btn">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}