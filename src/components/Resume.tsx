 
"use client";

import React from "react";

export default function Resume() {
  const email = "marufbuilds.dev@gmail.com";

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const linkClass =
    "text-[#426b65] underline underline-offset-2 hover:text-[#234d47]";

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-8 text-slate-900 print:bg-white print:p-0">
      {/* Resume Page */}
      <div className="resume-page mx-auto min-h-[297mm] w-full max-w-[210mm] bg-white px-[15mm] py-[12mm] shadow-xl print:min-h-0 print:w-[210mm] print:max-w-none print:shadow-none">

        {/* Header */}
        <header className="mb-5 border-b-2 border-slate-800 pb-4 text-center">
          <h1 className="text-2xl font-extrabold tracking-wide text-slate-900">
            AL MARUF HASAN
          </h1>

          <p className="mt-1 text-sm font-semibold tracking-wide text-slate-600">
            Junior Full-Stack Developer
          </p>

          <div className="mt-3 space-y-1 text-[10px] leading-relaxed text-slate-700">
            <p className="font-medium">
              Email:{" "}
              <a
                href={`mailto:${email}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(gmailCompose, "_blank", "noopener,noreferrer");
                }}
                className={linkClass}
              >
                {email}
              </a>
              {"  |  "}
              Phone:{" "}
              <a href="tel:+8801728010748" className={linkClass}>
                +880 1728010748
              </a>
            </p>

            <p className="font-medium">
              Address: Rajshahi, Bangladesh
              {"  |  "}
              GitHub:{" "}
              <a
                href="https://github.com/marufbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                github.com/marufbuilds
              </a>
            </p>

            <p className="font-medium">
              Portfolio:{" "}
              <a
                href="https://my-portfolioo-navy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Portfolio
              </a>
              {"  |  "}
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/maruf-hasan-29b658302"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-4">
          <SectionTitle>Professional Summary</SectionTitle>

          <p className="text-[10.5px] leading-[1.65] text-slate-700">
            Aspiring <strong>Full-Stack Developer</strong> with hands-on
            experience building web applications using Next.js, TypeScript,
            Node.js, Express.js, and MongoDB. Experienced in developing
            REST APIs, implementing authentication, and connecting frontend
            applications with backend services. Passionate about learning
            modern technologies and building practical software solutions.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <SectionTitle>Technical Skills</SectionTitle>

          <div className="space-y-1.5 text-[10.5px] leading-relaxed text-slate-700">
            <Skill label="Programming" value="JavaScript, TypeScript, HTML5, CSS3" />
            <Skill label="Frontend" value="React, Next.js, Tailwind CSS, shadcn/ui" />
            <Skill label="Backend" value="Node.js, Express.js, REST API Development" />
            <Skill label="Database & Authentication" value="MongoDB, Better Auth, Google OAuth, JWT" />
            <Skill label="Tools & Technologies" value="Git, GitHub, VS Code, Postman, Vercel" />
            <Skill label="AI Tools" value="Claude Code, GitHub Copilot, Cursor, ChatGPT, Gemini" />
            <Skill label="Soft Skills" value="Problem-solving, Self-learning, Teamwork, Communication" />
          </div>
        </section>

        {/* Projects */}
        <section className="mt-4">
          <SectionTitle>Projects</SectionTitle>

          <div className="text-[10.5px] leading-[1.55] text-slate-700">
            <p className="font-bold text-slate-900">
              1. Kindora – Community Events & Volunteering Platform
            </p>

            <p className="mb-1">
              <a
                href="https://kindoraa-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Live Demo
              </a>
              {" | "}
              <a
                href="https://github.com/marufbuilds/kindoraa-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Client GitHub
              </a>
              {" | "}
              <a
                href="https://github.com/marufbuilds/kindoraa-backend"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Server GitHub
              </a>
            </p>

            <p className="ml-3">
              <strong>Role:</strong> Full-Stack Developer
            </p>

            <ul className="ml-8 list-disc space-y-0.5">
              <li>
                Developed a platform for users to explore community events,
                view event details, and discover local volunteering opportunities.
              </li>
              <li>
                Built event creation and management features with event
                capacity and organizer information.
              </li>
              <li>
                Implemented email/password and Google authentication using
                Better Auth and integrated frontend with Express.js REST APIs.
              </li>
            </ul>

            <p className="ml-3 mt-1">
              <strong>Tech Stack:</strong> Next.js, React, TypeScript,
              Tailwind CSS, Express.js, MongoDB, Better Auth, Google OAuth, REST API
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-4">
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-2 text-[10.5px] text-slate-700">
            <EducationItem
              title="IELTS Preparation"
              status="Ongoing"
            />

            <EducationItem
              title="Bachelor of Science (BSc)"
              status="Ongoing"
            />

            <EducationItem
              title="Higher Secondary Certificate (HSC)"
              subtitle="Science"
              status="GPA: 5.00 | 2022"
            />

            <EducationItem
              title="Secondary School Certificate (SSC)"
              subtitle="Science"
              status="GPA: 4.89 | 2020"
            />
          </div>
        </section>

        {/* Training */}
        <section className="mt-4">
          <SectionTitle>Training</SectionTitle>

          <div className="text-[10.5px] leading-[1.6] text-slate-700">
            <p className="font-bold text-slate-900">
              Complete Web Development Course — Programming Hero
            </p>

            <p className="mt-1">
              Project-based training in HTML, CSS, JavaScript, React, Next.js,
              Node.js, Express.js, MongoDB, authentication, and deployment.
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-4">
          <SectionTitle>Additional Information</SectionTitle>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[10.5px] text-slate-700">
            <strong className="text-slate-900">Languages:</strong>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span><strong>Bangla</strong> (Native)</span>
              <span><strong>English</strong> (Intermediate)</span>
              <span><strong>Hindi</strong> (Conversational)</span>
            </div>
          </div>
        </section>
      </div>

      {/* Print Button */}
      <div className="mx-auto mt-6 flex max-w-[210mm] justify-center print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700"
        >
          Download / Print Resume
        </button>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .resume-page {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          a {
            color: inherit;
          }
        }
      `}</style>
    </main>
  );
}

/* Reusable Section Heading */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 border-b border-slate-300 pb-1 text-[13px] font-bold uppercase tracking-wider text-slate-900">
      {children}
    </h2>
  );
}

/* Reusable Skill Row */
function Skill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <p>
      <strong className="text-slate-900">{label}:</strong> {value}
    </p>
  );
}

/* Reusable Education Row */
function EducationItem({
  title,
  subtitle,
  status,
}: {
  title: string;
  subtitle?: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="font-bold text-slate-900">{title}</p>
        {subtitle && <p className="text-[9px]">{subtitle}</p>}
      </div>

      <p className="shrink-0 text-right">{status}</p>
    </div>
  );
}
