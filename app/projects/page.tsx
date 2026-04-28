import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: "var(--bg-surface-2)",
        border: "0.5px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "7px",
          background: "var(--accent-dim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text-secondary)",
          marginBottom: "6px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          lineHeight: "1.6",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

const ghProjects = [
  {
    name: "CookMate",
    stack: "MERN stack",
    url: "https://github.com/Meva1997/cookMate_frontend",
  },
  {
    name: "Pokemon TCG",
    stack: "SERN stack",
    url: "https://github.com/Meva1997/frontend-pokemonTCG-ecommerce",
  },
];

const medidashChips = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "TailwindCSS v4",
  "TanStack Query v5",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "JWT",
  "Pydantic",
];
const pawscoutChips = [
  "Next.js 16",
  "React 19",
  "FastAPI",
  "PostgreSQL",
  "SQLModel",
  "TanStack Query",
  "httpOnly JWT",
  "Cloudinary",
];

export default function ProjectsPage() {
  return (
    <>
      <MainHeader />

      <main
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "64px 32px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label">Portfolio</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "1.08",
              letterSpacing: "-0.5px",
              marginBottom: "16px",
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              maxWidth: "500px",
              lineHeight: "1.7",
            }}
          >
            Production-grade applications built across health tech, full stack
            architecture, and clinical domain problems.
          </p>
        </div>

        {/* ── MEDIDASH FLAGSHIP ── */}
        <div
          style={{
            marginBottom: "24px",
            padding: "32px",
            background: "var(--bg-surface)",
            border: "0.5px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            borderLeft: "2px solid var(--accent)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <p className="section-label" style={{ margin: 0 }}>
              Featured project
            </p>
            <span
              className="chip chip-tech"
              style={{ fontSize: "11px", letterSpacing: "0.8px" }}
            >
              Flagship
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            Medi
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Dash
            </em>{" "}
            — clinical dashboard
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: "1.75",
              maxWidth: "620px",
              marginBottom: "24px",
            }}
          >
            A full-stack medical dashboard for clinical teams. Not a CRUD app —
            built with real clinical logic: pairwise drug interaction detection,
            auto-calculated BMI and Glasgow Coma Scale scoring, WHO-compliant
            surgical checklists, and JWT role-based access separating doctor and
            nurse permissions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <FeatureCard
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="6"
                    width="12"
                    height="2"
                    rx="1"
                    fill="#2FCCAA"
                  />
                  <rect
                    x="6"
                    y="1"
                    width="2"
                    height="12"
                    rx="1"
                    fill="#2FCCAA"
                  />
                </svg>
              }
              title="Drug interaction checker"
              desc="Pairwise detection across any combination with severity-level alerts"
            />
            <FeatureCard
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="#2FCCAA"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M7 4v3l2 1.5"
                    stroke="#2FCCAA"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Role-based access"
              desc="JWT auth with doctor vs nurse permissions enforced at API level"
            />
            <FeatureCard
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 10L5 7l3 2 4-5"
                    stroke="#2FCCAA"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Clinical scoring"
              desc="Auto-calculated BMI and Glasgow Coma Scale with clinical interpretation"
            />
            <FeatureCard
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="#2FCCAA"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 7l1.5 1.5L9 5"
                    stroke="#2FCCAA"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="WHO surgical checklist"
              desc="Per-item timestamp tracking following surgical safety standards"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "24px",
            }}
          >
            {medidashChips.map((t) => (
              <span key={t} className="chip chip-neutral">
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://github.com/Meva1997/medidash-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Frontend code
            </a>
            <a
              href="https://github.com/Meva1997/medidash-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Backend code
            </a>
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        <div
          style={{
            borderTop: "0.5px solid var(--border)",
            paddingTop: "32px",
            marginTop: "32px",
          }}
        >
          <p className="section-label">More work</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              marginBottom: "24px",
            }}
          >
            Other{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              projects
            </em>
          </h2>

          {/* PawScout */}
          <div
            style={{
              padding: "24px",
              marginBottom: "16px",
              background: "var(--bg-surface)",
              border: "0.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              borderLeft: "2px solid rgba(47,204,170,0.4)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <span className="chip chip-tech" style={{ fontSize: "11px" }}>
                    Production architecture
                  </span>
                  <span
                    className="chip chip-neutral"
                    style={{ fontSize: "11px" }}
                  >
                    Full stack
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    marginBottom: "8px",
                  }}
                >
                  PawScout
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: "1.7",
                    maxWidth: "520px",
                    marginBottom: "16px",
                  }}
                >
                  Demonstrates{" "}
                  <span
                    style={{ color: "var(--text-secondary)", fontWeight: 500 }}
                  >
                    production-grade full stack architecture
                  </span>{" "}
                  — Next.js 16 App Router with React Server Components, FastAPI
                  backend with JWT stored in httpOnly cookies, optimistic
                  updates via TanStack Query, and Cloudinary for media delivery.
                  Deployed on Vercel + Render.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {pawscoutChips.map((t) => (
                    <span key={t} className="chip chip-neutral">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flexShrink: 0,
                }}
              >
                <a
                  href="https://paw-scout.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "13px", padding: "9px 20px" }}
                >
                  Live demo
                </a>
                <a
                  href="https://github.com/Meva1997/PawScout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: "13px", padding: "9px 20px" }}
                >
                  View code
                </a>
              </div>
            </div>
          </div>

          {/* Also on GitHub */}
          <div
            style={{
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "0.5px solid var(--border)",
            }}
          >
            <p className="section-label">Also on GitHub</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {ghProjects.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    border: "0.5px solid var(--border-md)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255,255,255,0.03)",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--text-muted)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {p.name} — {p.stack}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
