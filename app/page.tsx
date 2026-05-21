import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .page {
          background: #0a0a0a;
          min-height: 100vh;
        }

        .hero {
          padding: 72px 48px 72px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 470px;
          gap: 72px;
          align-items: center;
        }

        .hero-tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.72);
          border: 0.5px solid rgba(200,169,110,0.22);
          padding: 8px 14px;
          margin-bottom: 34px;
        }

        .hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(54px, 7vw, 86px);
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: -0.04em;
          color: #f0ede8;
          margin-bottom: 30px;
        }

        .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .hero-sub {
          max-width: 620px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240,237,232,0.6);
          margin-bottom: 34px;
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 2px;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: #f0ede8;
          color: #0a0a0a;
        }

        .btn-primary:hover {
          opacity: 0.86;
        }

        .btn-ghost {
          color: rgba(240,237,232,0.72);
          border: 0.5px solid rgba(240,237,232,0.18);
        }

        .btn-ghost:hover {
          color: #f0ede8;
          border-color: rgba(200,169,110,0.45);
        }

        .hero-portrait-wrap {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 18px;
        }

        .hero-portrait-glow {
          position: absolute;
          inset: 7%;
          background:
            radial-gradient(circle at 50% 38%, rgba(200,169,110,0.18), transparent 44%),
            radial-gradient(circle at 68% 52%, rgba(240,237,232,0.06), transparent 48%);
          filter: blur(34px);
          opacity: 0.9;
          pointer-events: none;
        }

        .hero-portrait-frame {
          position: relative;
          width: 100%;
          max-width: 470px;
          height: 520px;
          overflow: hidden;
          border-radius: 18px;
          background: transparent;
          box-shadow:
            0 0 0 0.5px rgba(200,169,110,0.08),
            0 24px 60px rgba(0,0,0,0.35);
          -webkit-mask-image: radial-gradient(
            ellipse at center,
            rgba(0,0,0,1) 74%,
            rgba(0,0,0,0.92) 86%,
            rgba(0,0,0,0.55) 95%,
            rgba(0,0,0,0) 100%
          );
          mask-image: radial-gradient(
            ellipse at center,
            rgba(0,0,0,1) 74%,
            rgba(0,0,0,0.92) 86%,
            rgba(0,0,0,0.55) 95%,
            rgba(0,0,0,0) 100%
          );
        }

        .hero-portrait {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 28%;
          transform: scale(1.18);
          filter: contrast(1.03) saturate(0.96);
        }

        .portrait-caption {
          position: absolute;
          right: 26px;
          bottom: 82px;
          background: rgba(10,10,10,0.72);
          border: 0.5px solid rgba(200,169,110,0.30);
          padding: 12px 16px;
          backdrop-filter: blur(8px);
          box-shadow: 0 14px 34px rgba(0,0,0,0.34);
        }

        .portrait-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          line-height: 1;
          color: #f0ede8;
          margin-bottom: 5px;
        }

        .portrait-title {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.78);
        }

        .rule {
          border: none;
          height: 0.5px;
          background: rgba(240,237,232,0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px;
        }

        .metric {
          border-right: 0.5px solid rgba(240,237,232,0.08);
          padding-right: 32px;
          margin-right: 32px;
        }

        .metric:last-child {
          border-right: none;
          margin-right: 0;
        }

        .metric-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
          margin-bottom: 10px;
        }

        .metric-label {
          font-size: 12px;
          line-height: 1.55;
          color: rgba(240,237,232,0.42);
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 48px;
        }

        .section-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.32);
          margin-bottom: 30px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          border: 0.5px solid rgba(240,237,232,0.08);
          padding: 30px;
          background: rgba(240,237,232,0.02);
          min-height: 230px;
        }

        .card-num {
          font-size: 11px;
          color: rgba(200,169,110,0.7);
          letter-spacing: 0.14em;
          margin-bottom: 22px;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.05;
          color: #f0ede8;
          margin-bottom: 16px;
        }

        .card-body {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240,237,232,0.48);
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }

        .split-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          line-height: 1.05;
          color: #f0ede8;
          margin-bottom: 20px;
        }

        .split-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,237,232,0.5);
          margin-bottom: 24px;
        }

        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          font-size: 11px;
          letter-spacing: 0.07em;
          color: rgba(200,169,110,0.72);
          border: 0.5px solid rgba(200,169,110,0.22);
          padding: 6px 12px;
          border-radius: 2px;
        }

        .cta-bar {
          background: #C8A96E;
          padding: 72px 48px;
        }

        .cta-bar-inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .cta-bar-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .cta-bar-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.65);
        }

        .cta-bar-btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 15px 34px;
          font-size: 12px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 56px 24px;
            gap: 32px;
          }

          .hero-portrait-wrap {
            min-height: auto;
            max-width: 470px;
            margin: 0 auto;
            padding-left: 0;
          }

          .hero-portrait-frame {
            height: 500px;
          }

          .portrait-caption {
            right: 18px;
            bottom: 58px;
          }

          .metrics {
            grid-template-columns: repeat(2, 1fr);
            padding: 42px 24px;
            gap: 30px;
          }

          .metric {
            border-right: none;
            margin-right: 0;
            padding-right: 0;
          }

          .section {
            padding: 56px 24px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .split {
            grid-template-columns: 1fr;
          }

          .cta-bar {
            padding: 56px 24px;
          }

          .cta-bar-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="page">
        <Navbar />
        <ScrollAnimations />

        <section className="hero">
          <div className="fade-up">
            <div className="hero-tag">
              Business Consulting · Operations · Workflow Strategy
            </div>

            <h1 className="hero-h1">
              Turning business<br />
              complexity into<br />
              <span className="gold">operational clarity.</span>
            </h1>

            <p className="hero-sub">
              Salterra Enterprises helps organizations streamline operations, improve workflows,
              and execute strategic initiatives with confidence. From process improvement and
              product strategy to business operations support, we help teams work smarter and grow
              with purpose.
            </p>

            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap fade-up">
            <div className="hero-portrait-glow" />
            <div className="hero-portrait-frame">
              <img
                src="/amber-headshot-2.png"
                alt="Amber Zeigler, founder of Salterra Enterprises"
                className="hero-portrait"
              />
            </div>
            <div className="portrait-caption">
              <div className="portrait-name">Amber Zeigler</div>
              <div className="portrait-title">Founder & Principal Consultant</div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="metrics">
          <div className="metric fade-up">
            <div className="metric-num">40+</div>
            <div className="metric-label">
              States with active<br />FINRA licensing
            </div>
          </div>
          <div className="metric fade-up">
            <div className="metric-num">01</div>
            <div className="metric-label">
              Product strategy<br />and business planning
            </div>
          </div>
          <div className="metric fade-up">
            <div className="metric-num">02</div>
            <div className="metric-label">
              Workflow redesign<br />and process improvement
            </div>
          </div>
          <div className="metric fade-up">
            <div className="metric-num">03</div>
            <div className="metric-label">
              Customer experience<br />and operational support
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="section">
          <div className="section-eyebrow fade-up">What Salterra does</div>

          <div className="cards">
            <div className="card fade-up">
              <div className="card-num">01</div>
              <div className="card-title">Operational Excellence</div>
              <div className="card-body">
                We help businesses identify inefficiencies, redesign workflows, document repeatable
                processes, and build operating systems that are easier to manage and scale.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">02</div>
              <div className="card-title">Product & Business Strategy</div>
              <div className="card-body">
                We support product planning, roadmap development, stakeholder alignment,
                requirements gathering, and practical business cases that connect strategy to execution.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">03</div>
              <div className="card-title">Project Leadership</div>
              <div className="card-body">
                We provide hands-on leadership for important initiatives, helping teams stay organized,
                aligned, accountable, and focused on measurable business outcomes.
              </div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="section split">
          <div className="fade-up">
            <div className="section-eyebrow">About Amber Zeigler</div>
            <div className="split-headline">
              Corporate experience.<br />
              <span className="gold">Independent focus.</span>
            </div>
            <p className="split-body">
              Amber Zeigler is a business professional with experience across product management,
              sales, customer experience, regulated industries, and workflow improvement. Through
              Salterra Enterprises, she partners with organizations that need practical structure,
              clearer execution, and stronger business systems.
            </p>
            <p className="split-body">
              Her approach combines strategic thinking, operational discipline, and hands-on
              execution to help leaders move from complexity to clarity.
            </p>
          </div>

          <div className="fade-up">
            <div className="section-eyebrow">Core capabilities</div>
            <div className="split-headline">
              Practical support for<br />
              <span className="gold">growing organizations.</span>
            </div>
            <div className="pills">
              <span className="pill">FINRA Licensed in 40+ States</span>
              <span className="pill">Product Management</span>
              <span className="pill">Workflow Re-engineering</span>
              <span className="pill">Sales Enablement</span>
              <span className="pill">Customer Experience</span>
              <span className="pill">Business Operations</span>
              <span className="pill">Project Management</span>
              <span className="pill">Administrative Systems</span>
            </div>
          </div>
        </section>

        <div className="cta-bar fade-up">
          <div className="cta-bar-inner">
            <div>
              <div className="cta-bar-headline">
                Ready to simplify the way your business works?
              </div>
              <div className="cta-bar-sub">
                Start with a conversation about your goals, workflows, and operational challenges.
              </div>
            </div>
            <Link href="/contact" className="cta-bar-btn">
              Get in touch →
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}