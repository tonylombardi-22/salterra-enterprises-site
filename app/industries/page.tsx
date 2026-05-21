import Navbar from "@/components/Navbar";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0a0a0a", color: "#f0ede8", minHeight: "100vh", padding: "80px 48px" }}>
        <h1>Industries</h1>
        <p style={{ marginTop: "20px", color: "rgba(240,237,232,0.6)" }}>
          Salterra Enterprises supports growing organizations across professional services,
          financial services, small business, and operations-focused environments.
        </p>
      </main>
    </>
  );
}
