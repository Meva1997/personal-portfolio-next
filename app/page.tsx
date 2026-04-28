import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import TechStack from "@/components/TechStack";
import Link from "next/link";

function EcgLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{ width: "100%", height: "60px" }}
      viewBox="0 0 260 60"
    >
      <path
        stroke="#2fccaa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M0 40h30l8-30 4 45 4-25 4 10h40l8-28 4 43 4-27 4 12h40l8-26 4 41 4-25 4 10h40l8-30 4 45 4-23 4 8h30"
      />
    </svg>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 14px",
        background: "var(--bg-surface-2)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20px",
          color: "var(--accent)",
          lineHeight: 1,
          marginBottom: "5px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1.2px",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function TimelineItem({
  filled,
  last,
  title,
  desc,
}: {
  filled: boolean;
  last?: boolean;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{ display: "flex", gap: "16px", paddingBottom: last ? 0 : "28px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "24px",
        }}
      >
        <div
          style={{
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            marginTop: "4px",
            flexShrink: 0,
            border: "1.5px solid var(--accent)",
            background: filled ? "var(--accent)" : "var(--bg-base)",
          }}
        />
        {!last && (
          <div
            style={{
              width: "1px",
              flex: 1,
              marginTop: "4px",
              background: "var(--accent-border)",
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: "4px" }}>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: "6px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            lineHeight: "1.7",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

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

const techChips = [
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "SQLAlchemy",
  "JWT Auth",
  "TailwindCSS",
];
const medChips = [
  "Clinical workflows",
  "Drug interactions",
  "Glasgow Scale",
  "WHO checklists",
  "ICD-10",
  "SOAP notes",
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

export default function Home() {
  return (
    <>
      <MainHeader />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "calc(100vh - 64px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-grid"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "80px 32px",
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "48px",
          }}
        >
          {/* Two-column on large screens */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left — copy */}
            <div style={{ maxWidth: "520px" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  color: "var(--accent)",
                  border: "0.5px solid var(--accent-border)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                    animation: "blink 2s infinite",
                  }}
                />
                MD — Full Stack Developer
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 4.5vw, 54px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  marginBottom: "20px",
                }}
              >
                Where{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  clinical
                </em>
                <br />
                thinking meets
                <br />
                modern software
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                  maxWidth: "440px",
                }}
              >
                <span
                  style={{ color: "var(--text-secondary)", fontWeight: 500 }}
                >
                  Alejandro Medina
                </span>{" "}
                — licensed physician turned full stack developer. I build health
                tech products with deep clinical domain expertise and
                production-grade engineering. U.S. Citizen 🇺🇸
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link href="/projects" className="btn-primary">
                  View MediDash
                </Link>
                <a
                  href="/Alejandro_Medina_MD_Software_Engineer.pdf"
                  download
                  className="btn-outline"
                >
                  Download CV
                </a>
                <Link href="/contact" className="btn-outline">
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right — ECG card */}
            <div
              style={{ position: "relative", width: "300px", flexShrink: 0 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  right: 0,
                  zIndex: 10,
                  background: "var(--bg-surface)",
                  border: "0.5px solid var(--accent-border)",
                  color: "var(--accent)",
                  fontSize: "12px",
                  padding: "5px 13px",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                FastAPI + PostgreSQL
              </div>

              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "0.5px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                    color: "var(--accent)",
                    marginBottom: "12px",
                  }}
                >
                  Patient vitals — real-time
                </div>
                <EcgLine />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "8px",
                    marginTop: "12px",
                  }}
                >
                  <Metric value="98.6°" label="Temp" />
                  <Metric value="72" label="BPM" />
                  <Metric value="120/80" label="BP" />
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-14px",
                  left: 0,
                  zIndex: 10,
                  background: "var(--bg-surface)",
                  border: "0.5px solid var(--accent-border)",
                  color: "var(--text-secondary)",
                  fontSize: "12px",
                  padding: "5px 13px",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                JWT · RBAC · Doctor / Nurse roles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DUAL IDENTITY ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          style={{
            padding: "40px 48px",
            borderRight: "0.5px solid var(--border)",
          }}
        >
          <p className="section-label">Engineering</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Production-grade{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              full stack
            </em>{" "}
            dev
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            React, Next.js, FastAPI, PostgreSQL — from architecture to
            deployment. Built{" "}
            <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              MediDash
            </span>{" "}
            end-to-end with role-based access, Pydantic validation, Alembic
            migrations, and a drug interaction engine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {techChips.map((t) => (
              <span key={t} className="chip chip-tech">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ padding: "40px 48px" }}>
          <p className="section-label">Medicine</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Licensed{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              general practitioner
            </em>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            Trained and practiced as a GP in Mexico. Deep knowledge of{" "}
            <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              clinical workflows
            </span>
            , medical data structures, drug interactions, surgical protocols,
            and patient safety standards.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {medChips.map((t) => (
              <span key={t} className="chip chip-med">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HEALTH TECH ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "64px 32px",
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        <div>
          <p className="section-label-accent">Origin story</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "32px",
              lineHeight: 1.15,
            }}
          >
            Why{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              health
            </em>
            <br />
            tech?
          </h2>
        </div>
        <div>
          <TimelineItem
            filled
            title="Medical school & practice — UAG"
            desc="Trained as a general practitioner. Saw firsthand how fragmented software slows clinical decisions — bad UX in the ER has real consequences for patients."
          />
          <TimelineItem
            filled
            title="Pivot to software — 2024"
            desc="Started building with React, Node.js, and Python. Recognized that the best health tech is built by people who understand both the clinical and the technical side."
          />
          <TimelineItem
            filled
            last
            title="Now — shipping health tech products"
            desc="Building MediDash: a clinical dashboard with real drug interaction logic, Glasgow scoring, surgical checklists, and role-based access — the kind of system I wished existed as a doctor."
          />
        </div>
      </section>

      {/* ── MEDIDASH FLAGSHIP ── */}
      <section
        style={{
          background: "var(--bg-surface)",
          borderTop: "0.5px solid var(--border)",
          padding: "48px 0",
        }}
      >
        <div
          style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}
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
              fontSize: "30px",
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
              lineHeight: 1.75,
              maxWidth: "600px",
              marginBottom: "24px",
            }}
          >
            A full-stack medical dashboard for clinical teams. Not a CRUD app —
            built with real clinical logic: pairwise drug interaction detection,
            auto-calculated BMI and Glasgow scoring, WHO-compliant surgical
            checklists, and role-based access separating doctor and nurse
            permissions.
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
              desc="Pairwise detection across any drug combination with severity-level alerts"
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
              desc="JWT auth with distinct doctor vs nurse permissions enforced at API level"
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
              desc="Auto-calculated BMI (color-coded) and Glasgow Coma Scale with clinical interpretation"
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
              View frontend code
            </a>
            <a
              href="https://github.com/Meva1997/medidash-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View backend code
            </a>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--border)",
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "64px 32px",
        }}
      >
        <p className="section-label" style={{ textAlign: "center" }}>
          Technologies
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Tech stack
        </h2>
        <TechStack />
      </section>

      <Footer />
    </>
  );
}
