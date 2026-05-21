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
          background:
            radial-gradient(circle at 72% 8%, rgba(200,169,110,0.08), transparent 30%),
            radial-gradient(circle at 12% 34%, rgba(200,169,110,0.045), transparent 28%),
            #0a0a0a;
          min-height: 100vh;
        }

        .hero {
          padding: 72px 48px 76px;
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
          max-width: 660px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240,237,232,0.62);
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
          transition: all 0.25s ease;
        }

        .btn-primary {
          background: #f0ede8;
          color: #0a0a0a;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(240,237,232,0.10);
        }

        .btn-ghost {
          color: rgba(240,237,232,0.72);
          border: 0.5px solid rgba(240,237,232,0.18);
        }

        .btn-ghost:hover {
          color: #f0ede8;
          border-color: rgba(200,169,110,0.45);
          box-shadow: 0 0 32px rgba(200,169,110,0.08);
        }

        .hero-portrait-wrap {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 18px;
        }

        .hero-portrait-blur {
          position: absolute;
          width: 108%;
          max-width: 520px;
          height: 560px;
          object-fit: cover;
          object-position: center 28%;
          transform: scale(1.2);
          filter: blur(28px) brightness(0.72) saturate(0.9);
          opacity: 0.42;
          border-radius: 24px;
          z-index: 0;
          pointer-events: none;
        }

        .hero-portrait-frame {
          position: relative;
          isolation: isolate;
          z-index: 1;
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
            rgba(0,0,0,1) 68%,
            rgba(0,0,0,0.92) 82%,
            rgba(0,0,0,0.55) 92%,
            rgba(0,0,0,0) 100%
          );
          mask-image: radial-gradient(
            ellipse at center,
            rgba(0,0,0,1) 68%,
            rgba(0,0,0,0.92) 82%,
            rgba(0,0,0,0.55) 92%,
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
          z-index: 2;
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

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 76px 48px;
        }

        .section-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.32);
          margin-bottom: 30px;
        }

        .vision {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items: center;
        }

        .section-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 58px);
          font-weight: 600;
          line-height: 1.02;
          color: #f0ede8;
        }

        .vision-copy {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,237,232,0.56);
          margin-bottom: 22px;
        }

        .outcomes {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .outcome {
          border: 0.5px solid rgba(240,237,232,0.08);
          background: rgba(240,237,232,0.02);
          padding: 22px;
          font-size: 14px;
          color: rgba(240,237,232,0.68);
          transition: all 0.25s ease;
        }

        .outcome:hover {
          transform: translateY(-4px);
          border-color: rgba(200,169,110,0.30);
          box-shadow: 0 0 42px rgba(200,169,110,0.08);
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
          min-height: 250px;
          transition: all 0.25s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(200,169,110,0.32);
          background: rgba(240,237,232,0.035);
          box-shadow: 0 0 48px rgba(200,169,110,0.12);
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
          color: rgba(240,237,232,0.50);
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
          transition: all 0.2s ease;
        }

        .pill:hover {
          border-color: rgba(200,169,110,0.48);
          color: rgba(240,237,232,0.88);
          box-shadow: 0 0 22px rgba(200,169,110,0.08);
        }

        .cta-bar {
          background: linear-gradient(135deg, #C8A96E, #d8bd82);
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
          transition: all 0.25s ease;
        }

        .cta-bar-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(10,10,10,0.22);
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

          .hero-portrait-blur {
            height: 540px;
          }

          .hero-portrait-frame {
            height: 500px;
          }

          .portrait-caption {
            right: 18px;
            bottom: 58px;
          }

          .section {
            padding: 58px 24px;
          }

          .vision,
          .split {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .cards,
          .outcomes {
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
              Strategy · Operations · Brand · Technology
            </div>

            <h1 className="hero-h1">
              Transforming<br />
              complexity into<br />
              <span className="gold">strategic momentum.</span>
            </h1>

            <p className="hero-sub">
              Salterra Enterprises helps growing businesses align strategy, operations, brand,
              and technology so they can scale with clarity, confidence, and purpose.
            </p>

            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">
                Start the Conversation
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap fade-up">
            <img
              src="/amber-headshot-2.png"
              alt=""
              aria-hidden="true"
              className="hero-portrait-blur"
            />

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

        <section className="section vision">
          <div className="fade-up">
            <div className="section-eyebrow">Built for businesses ready to evolve</div>
            <div className="section-headline">
              Growth requires more than isolated solutions.
            </div>
          </div>

          <div className="fade-up">
            <p className="vision-copy">
              Growing organizations need alignment between strategy, operations, customer
              experience, brand presence, and technology execution.
            </p>
            <p className="vision-copy">
              Salterra Enterprises helps businesses build the structure, systems, creative
              direction, and execution support needed to move forward with intention.
            </p>
          </div>
        </section>

        <hr className="rule" />

        <section className="section">
          <div className="section-eyebrow fade-up">What we help businesses achieve</div>

          <div className="outcomes">
            <div className="outcome fade-up">Streamlined operational systems</div>
            <div className="outcome fade-up">Greater organizational clarity</div>
            <div className="outcome fade-up">Improved scalability and efficiency</div>
            <div className="outcome fade-up">Stronger customer experiences</div>
            <div className="outcome fade-up">Strategic growth alignment</div>
            <div className="outcome fade-up">Technology-enabled execution</div>
            <div className="outcome fade-up">Distinctive brand and market positioning</div>
            <div className="outcome fade-up">Sustainable long-term infrastructure</div>
          </div>
        </section>

        <hr className="rule" />

        <section className="section">
          <div className="section-eyebrow fade-up">How Salterra helps</div>

          <div className="cards">
            <div className="card fade-up">
              <div className="card-num">01</div>
              <div className="card-title">Strategic Growth & Business Advisory</div>
              <div className="card-body">
                Clarify priorities, shape business plans, support growth decisions, and create
                practical pathways from vision to execution.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">02</div>
              <div className="card-title">Operational Excellence & Execution</div>
              <div className="card-body">
                Improve workflows, eliminate bottlenecks, document repeatable processes, and build
                operating systems that reduce friction and increase consistency.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">03</div>
              <div className="card-title">Brand, Content & Creative Strategy</div>
              <div className="card-body">
                Strengthen positioning, messaging, content direction, and market differentiation so
                the business presents itself with clarity and confidence.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">04</div>
              <div className="card-title">Technology & Digital Solutions</div>
              <div className="card-body">
                Support web development, automation, systems integration, digital tools, and
                full-stack technology execution through trusted partners.
              </div>
            </div>

            <div className="card fade-up">
              <div className="card-num">05</div>
              <div className="card-title">Customer Experience & Business Performance</div>
              <div className="card-body">
                Improve onboarding, service delivery, communication workflows, client journeys, and
                the systems that shape how customers experience the business.
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
              <span className="gold">Entrepreneurial focus.</span>
            </div>
            <p className="split-body">
              Amber Zeigler is a business professional with experience across product management,
              sales, customer experience, regulated industries, workflow improvement, and business
              operations. Through Salterra Enterprises, she partners with organizations that need
              practical structure, sharper execution, and stronger systems for growth.
            </p>
            <p className="split-body">
              Her approach combines strategic thinking, operational discipline, creative problem
              solving, and trusted execution support to help leaders move from complexity to
              capability.
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
              <span className="pill">Business Advisory</span>
              <span className="pill">Product Management</span>
              <span className="pill">Workflow Re-engineering</span>
              <span className="pill">Brand Strategy</span>
              <span className="pill">Content Strategy</span>
              <span className="pill">Technology Solutions</span>
              <span className="pill">Customer Experience</span>
              <span className="pill">Project Management</span>
              <span className="pill">Operational Support</span>
            </div>
          </div>
        </section>

        <div className="cta-bar fade-up">
          <div className="cta-bar-inner">
            <div>
              <div className="cta-bar-headline">
                Ready to build what comes next?
              </div>
              <div className="cta-bar-sub">
                Start with a conversation about your goals, systems, brand, technology needs, and the support your business needs to move forward.
              </div>
            </div>
            <Link href="/contact" className="cta-bar-btn">
              Start the Conversation →
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}