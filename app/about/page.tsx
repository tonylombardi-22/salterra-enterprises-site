// app/about/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Amber Zeigler | Salterra Enterprises",
  description:
    "Meet Amber Zeigler, founder of Salterra Enterprises. Practical consulting led by product management discipline, financial services experience, and operational expertise.",
  openGraph: {
    title: "About Amber Zeigler | Salterra Enterprises",
    description:
      "Meet Amber Zeigler, founder of Salterra Enterprises. Practical consulting led by product management discipline, financial services experience, and operational expertise.",
    url: "https://www.salterraenterprises.com/about",
    siteName: "Salterra Enterprises",
    images: [
      {
        url: "/amber-headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Amber Zeigler, Founder of Salterra Enterprises",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amber Zeigler | Salterra Enterprises",
    description:
      "Meet Amber Zeigler, founder of Salterra Enterprises. Practical consulting led by product management discipline, financial services experience, and operational expertise.",
    images: ["/amber-headshot-1.jpg"],
  },
};

const CALENDLY_URL = "https://calendly.com/amber-salterraenterprises/30min";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        body { background: #0D1B2A; color: #f0ede8; font-family: 'DM Sans', sans-serif; }
        .page { min-height: 100vh; background: #0D1B2A; }
        .wrap { max-width: 1200px; margin: 0 auto; padding: 88px 48px; }
        .eyebrow { display: inline-block; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(182,138,60,0.72); border: 0.5px solid rgba(182,138,60,0.22); padding: 8px 14px; margin-bottom: 32px; }
        h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(54px, 7vw, 86px); line-height: 0.95; letter-spacing: -0.04em; font-weight: 600; max-width: 900px; margin-bottom: 32px; }
        .gold { font-style: italic; color: #D4AF63; background: linear-gradient(160deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; padding-right: 0.08em; }
        .intro { max-width: 780px; font-size: 16px; line-height: 1.85; color: rgba(240,237,232,0.6); margin-bottom: 72px; }
        .split { display: grid; grid-template-columns: 1fr 420px; gap: 72px; align-items: start; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: 42px; line-height: 1.05; font-weight: 600; margin-bottom: 22px; }
        .body-copy { color: rgba(240,237,232,0.56); font-size: 14.5px; line-height: 1.9; margin-bottom: 22px; }
        .panel { border: 0.5px solid rgba(240,237,232,0.09); background: rgba(240,237,232,0.025); padding: 34px; }
        .panel img { width: 100%; height: 340px; object-fit: cover; object-position: center 18%; display: block; border: 0.5px solid rgba(182,138,60,0.18); margin-bottom: 28px; }
        .panel-title { font-family: 'Cormorant Garamond', serif; font-size: 30px; line-height: 1.05; margin-bottom: 12px; }
        .panel-sub { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(182,138,60,0.72); margin-bottom: 20px; }
        .capabilities { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .pill { font-size: 11px; letter-spacing: 0.07em; color: rgba(182,138,60,0.72); border: 0.5px solid rgba(182,138,60,0.22); padding: 7px 12px; border-radius: 2px; }
        .values { margin-top: 56px; border-top: 0.5px solid rgba(240,237,232,0.08); padding-top: 56px; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 34px; }
        .value-card { border: 0.5px solid rgba(240,237,232,0.09); background: rgba(240,237,232,0.02); padding: 30px; min-height: 210px; }
        .value-num { color: rgba(182,138,60,0.72); font-size: 11px; letter-spacing: 0.14em; margin-bottom: 22px; }
        .value-title { font-family: 'Cormorant Garamond', serif; font-size: 30px; margin-bottom: 14px; }
        .value-body { color: rgba(240,237,232,0.5); font-size: 13.5px; line-height: 1.75; }
        .cta { margin-top: 72px; background: linear-gradient(135deg, #E2C57D 0%, #D4AF63 35%, #B68A3C 70%, #8C6A2E 100%); padding: 48px; display: flex; justify-content: space-between; align-items: center; gap: 32px; }
        .cta-title { font-family: 'Cormorant Garamond', serif; font-size: 42px; line-height: 1.05; color: #0D1B2A; font-weight: 600; }
        .cta-copy { margin-top: 8px; color: rgba(13,27,42,0.72); font-size: 13.5px; }
        .btn { background: #0D1B2A; color: #f0ede8; padding: 14px 28px; text-decoration: none; font-size: 13px; border-radius: 2px; white-space: nowrap; }
        @media (max-width: 900px) {
          .wrap { padding: 56px 24px; }
          .split { grid-template-columns: 1fr; }
          .panel img { height: 380px; object-position: center 18%; }
          .values-grid { grid-template-columns: 1fr; }
          .cta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <main className="page">
        <Navbar />
        <section className="wrap">
          <div className="eyebrow">About Salterra Enterprises</div>
          <h1>Practical business support led by <span className="gold">clarity, discipline, and execution.</span></h1>
          <p className="intro">
            Salterra Enterprises helps organizations simplify operations, improve workflows,
            and move strategic priorities forward with confidence. Founded by Amber Zeigler,
            the company brings together corporate experience, product management discipline,
            sales perspective, regulated financial services experience, and hands-on operational
            support for businesses that need a clearer way to work and grow.
          </p>
          <div className="split">
            <div>
              <div className="section-title">Meet Amber Zeigler</div>
              <p className="body-copy">
                Amber Zeigler is a business professional with experience across product
                management, sales, customer experience, regulated financial environments,
                and workflow improvement. Her background gives her a practical understanding
                of how business strategy, operational process, and customer-facing execution
                need to work together.
              </p>
              <p className="body-copy">
                Through Salterra Enterprises, Amber partners with business owners and
                leadership teams that need more structure, better processes, and stronger
                follow-through. Her work is grounded in simplifying complexity, improving
                communication, and helping organizations turn ideas into action.
              </p>
              <p className="body-copy">
                Amber also maintains active FINRA licensing across more than 40 states,
                providing valuable familiarity with regulated environments, financial services
                operations, and compliance-driven business processes.
              </p>
              <div className="capabilities">
                <span className="pill">Product Management</span>
                <span className="pill">Workflow Re-engineering</span>
                <span className="pill">Sales Operations</span>
                <span className="pill">Customer Experience</span>
                <span className="pill">Business Operations</span>
                <span className="pill">Project Management</span>
                <span className="pill">Administrative Support</span>
                <span className="pill">FINRA Licensed in 40+ States</span>
              </div>
            </div>
            <aside className="panel">
              <img src="/amber-headshot-1.jpg" alt="Amber Zeigler, Founder of Salterra Enterprises" />
              <div className="panel-title">Amber Zeigler</div>
              <div className="panel-sub">Founder & CEO</div>
              <p className="body-copy">
                Built to support organizations that need practical help improving how work
                gets done — from strategy and planning to operations and execution.
              </p>
            </aside>
          </div>
          <section className="values">
            <div className="eyebrow">How we work</div>
            <div className="section-title">Clear thinking. Practical systems. Reliable follow-through.</div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-num">01</div>
                <div className="value-title">Clarity</div>
                <p className="value-body">We help teams understand what is working, what is not, and where operational changes can create the greatest impact.</p>
              </div>
              <div className="value-card">
                <div className="value-num">02</div>
                <div className="value-title">Structure</div>
                <p className="value-body">We turn scattered processes, unclear responsibilities, and informal workflows into practical systems that are easier to manage.</p>
              </div>
              <div className="value-card">
                <div className="value-num">03</div>
                <div className="value-title">Execution</div>
                <p className="value-body">We support the follow-through required to move work forward, coordinate stakeholders, and turn plans into measurable progress.</p>
              </div>
            </div>
          </section>
          <div className="cta">
            <div>
              <div className="cta-title">Ready to improve how your business works?</div>
              <div className="cta-copy">Start with a conversation about your goals, workflows, and operational challenges.</div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">Schedule Consultation</a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}