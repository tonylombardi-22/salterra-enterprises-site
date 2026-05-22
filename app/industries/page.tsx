// app/industries/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Who We Serve | Salterra Enterprises",
  description:
    "Salterra Enterprises works with regulated organizations, founders, service-based businesses, and growth-focused teams navigating complexity and change.",
  openGraph: {
    title: "Who We Serve | Salterra Enterprises",
    description:
      "Salterra Enterprises works with regulated organizations, founders, service-based businesses, and growth-focused teams navigating complexity and change.",
    url: "https://www.salterraenterprises.com/industries",
    siteName: "Salterra Enterprises",
    images: [
      {
        url: "/salterra-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Salterra Enterprises",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve | Salterra Enterprises",
    description:
      "Salterra Enterprises works with regulated organizations, founders, service-based businesses, and growth-focused teams navigating complexity and change.",
    images: ["/salterra-hero.jpg"],
  },
};

const CALENDLY_URL = "https://calendly.com/amber-salterraenterprises/30min";

export default function IndustriesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        body { background: #0a0a0a; color: #f0ede8; font-family: 'DM Sans', sans-serif; }
        .page { min-height: 100vh; background: radial-gradient(circle at 50% 6%, rgba(200,169,110,0.08), transparent 34%), #0a0a0a; }
        .container { max-width: 1200px; margin: 0 auto; padding: 88px 48px; }
        .eyebrow { display: inline-block; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(200,169,110,0.72); border: 0.5px solid rgba(200,169,110,0.22); padding: 8px 14px; margin-bottom: 30px; }
        h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(54px, 7vw, 84px); line-height: 0.95; letter-spacing: -0.04em; margin-bottom: 28px; max-width: 980px; }
        .gold { color: #C8A96E; font-style: italic; }
        .intro { max-width: 820px; color: rgba(240,237,232,0.6); line-height: 1.9; font-size: 16px; margin-bottom: 72px; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .card { border: 0.5px solid rgba(240,237,232,0.08); background: rgba(240,237,232,0.02); padding: 36px; transition: all 0.3s ease; }
        .card:hover { transform: translateY(-8px); border-color: rgba(200,169,110,0.40); background: rgba(240,237,232,0.04); box-shadow: 0 0 60px rgba(200,169,110,0.14); }
        .card-number { font-size: 11px; letter-spacing: 0.14em; color: rgba(200,169,110,0.72); margin-bottom: 22px; }
        .card-title { font-family: 'Cormorant Garamond', serif; font-size: 38px; line-height: 1; margin-bottom: 18px; }
        .card-description { color: rgba(240,237,232,0.55); line-height: 1.85; font-size: 14px; margin-bottom: 22px; }
        .card-list { list-style: none; padding: 0; }
        .card-list li { color: rgba(240,237,232,0.72); margin-bottom: 10px; font-size: 13px; }
        .card-list li::before { content: "- "; color: #C8A96E; }
        .section { margin-top: 88px; padding-top: 56px; border-top: 1px solid transparent; border-image: linear-gradient(90deg, transparent, rgba(200,169,110,0.35), transparent) 1; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: 48px; line-height: 1; margin-bottom: 24px; }
        .section-copy { max-width: 780px; color: rgba(240,237,232,0.55); line-height: 1.9; margin-bottom: 42px; }
        .tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag { border: 0.5px solid rgba(200,169,110,0.25); color: rgba(200,169,110,0.8); padding: 8px 14px; font-size: 12px; letter-spacing: 0.06em; transition: all 0.25s ease; }
        .tag:hover { color: #f0ede8; border-color: rgba(200,169,110,0.48); box-shadow: 0 0 24px rgba(200,169,110,0.10); transform: translateY(-2px); }
        .cta { margin-top: 88px; background: #C8A96E; padding: 56px; display: flex; justify-content: space-between; align-items: center; gap: 32px; }
        .cta-title { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: #0a0a0a; margin-bottom: 8px; }
        .cta-copy { color: rgba(10,10,10,0.7); font-size: 14px; }
        .cta-button { background: #0a0a0a; color: #f0ede8; text-decoration: none; padding: 14px 28px; font-size: 13px; white-space: nowrap; transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 18px 38px rgba(10,10,10,0.26); }
        @media (max-width: 900px) {
          .container { padding: 56px 24px; }
          .grid { grid-template-columns: 1fr; }
          .cta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <section className="container">
          <div className="eyebrow">Who We Help</div>

          <h1>
            Support for organizations navigating{" "}
            <span className="gold">growth, change, and complexity.</span>
          </h1>

          <p className="intro">
            Salterra Enterprises works with small businesses, founders, service-based companies,
            regulated organizations, and growth-minded teams that need stronger alignment across
            strategy, operations, brand, technology, and execution.
          </p>

          <div className="grid">
            <div className="card">
              <div className="card-number">01</div>
              <div className="card-title">Regulated and Compliance-Driven Organizations</div>
              <p className="card-description">
                Organizations operating in regulated environments need clear processes, strong
                documentation, operational discipline, and consistent execution. Salterra helps
                businesses align strategy, operations, customer experience, and growth initiatives
                while maintaining structure and accountability.
              </p>
              <ul className="card-list">
                <li>Process governance</li>
                <li>Customer onboarding</li>
                <li>Documentation management</li>
                <li>Operational consistency</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-number">02</div>
              <div className="card-title">Growth-Focused Businesses</div>
              <p className="card-description">
                As businesses grow, systems, communication, customer experience, and internal
                coordination become more complex. Salterra helps organizations build the operational
                foundation needed to scale effectively.
              </p>
              <ul className="card-list">
                <li>Strategic planning support</li>
                <li>Workflow improvement</li>
                <li>Customer experience optimization</li>
                <li>Cross-functional coordination</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-number">03</div>
              <div className="card-title">Service-Based Companies</div>
              <p className="card-description">
                Professional and service-based organizations succeed when delivery, communication,
                brand experience, and internal execution work together. Salterra helps strengthen
                the systems behind exceptional client experiences.
              </p>
              <ul className="card-list">
                <li>Service delivery improvement</li>
                <li>Brand and client experience</li>
                <li>Process design</li>
                <li>Business organization</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-number">04</div>
              <div className="card-title">Founders and Emerging Companies</div>
              <p className="card-description">
                Founders often need strategic guidance, operational structure, technology support,
                and execution assistance before hiring a full internal leadership team. Salterra
                provides flexible support that grows with the business.
              </p>
              <ul className="card-list">
                <li>Business planning</li>
                <li>Operational infrastructure</li>
                <li>Technology solutions</li>
                <li>Growth support</li>
              </ul>
            </div>
          </div>

          <section className="section">
            <div className="section-title">Built for organizations navigating growth and change.</div>
            <p className="section-copy">
              Salterra Enterprises combines experience in financial services, operations, customer
              experience, product management, sales support, brand strategy, and technology-enabled
              business solutions. The result is a practical, cross-functional approach that helps
              organizations move from complexity to momentum.
            </p>
            <div className="tags">
              <div className="tag">Small Businesses</div>
              <div className="tag">Founders</div>
              <div className="tag">Growth-Stage Companies</div>
              <div className="tag">Professional Services</div>
              <div className="tag">Financial Services</div>
              <div className="tag">Insurance</div>
              <div className="tag">Regulated Businesses</div>
              <div className="tag">Customer Experience Teams</div>
              <div className="tag">Technology-Enabled Businesses</div>
              <div className="tag">Organizations Undergoing Change</div>
            </div>
          </section>

          <div className="cta">
            <div>
              <div className="cta-title">Ready to align strategy, operations, brand, and growth?</div>
              <div className="cta-copy">
                Schedule a conversation about your business goals, operational challenges,
                growth priorities, and opportunities to build stronger systems for the future.
              </div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              Schedule Consultation
            </a>
          </div>

        </section>

        <Footer />
      </main>
    </>
  );
}