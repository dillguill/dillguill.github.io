import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>Job Title 1</strong> - Company Name (Dates)
              <p className="text-sm text-gray-600">Brief description of responsibilities and achievements.</p>
            </li>
            <li className="mb-2">
              <strong>Job Title 2</strong> - Company Name (Dates)
              <p className="text-sm text-gray-600">Brief description of responsibilities and achievements.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>Degree</strong> - Institution Name (Year)
              <p className="text-sm text-gray-600">Description of studies or achievements.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Skill 1</li>
            <li className="mb-2">Skill 2</li>
            <li className="mb-2">Skill 3</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-6 text-center">
          <a
            href="/path-to-resume.pdf"
            download
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;