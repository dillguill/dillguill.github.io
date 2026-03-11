import Header from '../src/components/Header';
import { NavbarSimple } from '../src/components/Navbar';

export async function getStaticProps() {
  const listRes = await fetch("https://rxresu.me/api/openapi/resumes", {
    headers: { "x-api-key": process.env.RXRESUME_API_KEY },
  });

  if (!listRes.ok) {
    console.error("Failed to fetch resumes:", await listRes.text());
    return { props: { resume: null } };
  }

  const resumes = await listRes.json();
  const match = resumes.find((r) => r.slug === "portfolio");

  if (!match) {
    console.error("Resume not found. Available slugs:", resumes.map((r) => r.slug));
    return { props: { resume: null } };
  }

  const resumeRes = await fetch(
    `https://rxresu.me/api/openapi/resumes/${match.id}`,
    { headers: { "x-api-key": process.env.RXRESUME_API_KEY } }
  );

  const resume = await resumeRes.json();
  return { props: { resume } };
}

export default function ResumePage({ resume }) {
  if (!resume) {
    return (
      <>
        <Header />
        <main className="pt-20 px-6 max-w-3xl mx-auto">
          <p>Resume not found.</p>
        </main>
        <NavbarSimple />
      </>
    );
  }

  const { basics, summary, sections } = resume.data;

  return (
    <>
      <Header />
      <main className="pt-20 px-6 max-w-3xl mx-auto pb-24">

        {/* Basics */}
        <div className="mb-8 border-b border-[var(--border-color)] pb-6">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">{basics.name}</h1>
          <p className="text-[var(--text-secondary)] mt-1">{basics.headline}</p>
          <div className="mt-2 text-sm text-[var(--text-secondary)] flex flex-wrap gap-4">
            {basics.location && <span>{basics.location}</span>}
            {basics.website?.url && (
              <a href={basics.website.url} className="hover:opacity-70 transition-opacity">
                {basics.website.label || basics.website.url}
              </a>
            )}
            {basics.customFields?.map((field) =>
              field.link ? (
                <a key={field.id} href={field.link.startsWith('http') ? field.link : `https://${field.link}`} className="hover:opacity-70 transition-opacity">
                  {field.link}
                </a>
              ) : null
            )}
          </div>
        </div>

        {/* Summary */}
        {summary?.content && (
          <Section title="Summary">
            <div className="text-sm text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: summary.content }} />
          </Section>
        )}

        {/* Skills */}
        {sections.skills?.items?.length > 0 && (
          <Section title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sections.skills.items.filter(i => !i.hidden).map((skill) => (
                <div key={skill.id}>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{skill.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {skill.keywords.map((kw) => (
                      <span key={kw} className="px-2 py-1 text-xs rounded border bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Experience */}
        {sections.experience?.items?.length > 0 && (
          <Section title="Experience">
            {sections.experience.items.filter(i => !i.hidden).map((job) => (
              <div key={job.id} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-[var(--text-primary)]">{job.company}</span>
                  <span className="text-xs text-[var(--text-secondary)]">{job.period}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-1">{job.position}</p>
                <div className="text-sm text-[var(--text-secondary)] [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1"
                  dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            ))}
          </Section>
        )}

        {/* Projects */}
        {sections.projects?.items?.length > 0 && (
          <Section title="Projects">
            {sections.projects.items.filter(i => !i.hidden).map((project) => (
              <div key={project.id} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {project.website?.url ? (
                      <a href={project.website.url} className="hover:opacity-70 transition-opacity">
                        {project.name}
                      </a>
                    ) : project.name}
                  </span>
                </div>
                <div className="text-sm text-[var(--text-secondary)] [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mt-1 [&_p]:mb-1"
                  dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            ))}
          </Section>
        )}

        {/* Certifications */}
        {sections.certifications?.items?.length > 0 && (
          <Section title="Certifications">
            {sections.certifications.items.filter(i => !i.hidden).map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline mb-3">
                <div>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{cert.title}</span>
                  <span className="text-sm text-[var(--text-secondary)]"> · {cert.issuer}</span>
                </div>
                <span className="text-xs text-[var(--text-secondary)] shrink-0 ml-4">{cert.date}</span>
              </div>
            ))}
          </Section>
        )}

        {/* Education */}
        {sections.education?.items?.length > 0 && (
          <Section title="Education">
            {sections.education.items.filter(i => !i.hidden).map((edu) => (
              <div key={edu.id} className="mb-3">
                <span className="font-semibold text-[var(--text-primary)]">{edu.school}</span>
                <p className="text-sm text-[var(--text-secondary)]">{edu.degree}</p>
              </div>
            ))}
          </Section>
        )}

      </main>
      <NavbarSimple />
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-1 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}