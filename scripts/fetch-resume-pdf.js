const fs = require('fs');
const path = require('path');

const RESUME_SLUG = 'portfolio';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'resume.pdf');

async function main() {
  const apiKey = process.env.RXRESUME_API_KEY;
  if (!apiKey) {
    console.warn('RXRESUME_API_KEY not set — skipping resume PDF refresh, keeping existing public/resume.pdf');
    return;
  }

  const listRes = await fetch('https://rxresu.me/api/openapi/resumes', {
    headers: { 'x-api-key': apiKey },
  });
  if (!listRes.ok) {
    console.warn(`Failed to list resumes: ${listRes.status}. Keeping existing public/resume.pdf`);
    return;
  }

  const resumes = await listRes.json();
  const match = resumes.find((r) => r.slug === RESUME_SLUG);
  if (!match) {
    console.warn(`Resume with slug "${RESUME_SLUG}" not found. Keeping existing public/resume.pdf`);
    return;
  }

  const pdfRes = await fetch(`https://rxresu.me/api/openapi/resumes/${match.id}/pdf`, {
    headers: { 'x-api-key': apiKey },
  });
  if (!pdfRes.ok) {
    console.warn(`Failed to generate resume PDF: ${pdfRes.status}. Keeping existing public/resume.pdf`);
    return;
  }

  const buffer = Buffer.from(await pdfRes.arrayBuffer());
  fs.writeFileSync(OUTPUT_PATH, buffer);
  console.log(`Wrote ${buffer.length} bytes to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.warn('Resume PDF refresh failed, keeping existing public/resume.pdf:', err.message);
});
