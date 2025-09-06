import React from "react";
import resumedetails from "@/lib/resumedetails.json";

type Props = {
  resume: typeof resumedetails;
};

const Resume = ({ resume }: Props) => {
  const {
    personalInfo,
    summary,
    technicalSkills,
    workExperience,
    projects,
    education,
    achievementsAndCertificates,
  } = resume;

  return (
    <div className="resume">
      {/* Header */}
      <header className="mb-6 text-center font-semibold">
        <h1 className="text-center">{personalInfo.name}</h1>
        <p className="text-sm font-semibold">{personalInfo.title}</p>
        <p className="text-sm">
          Email:{" "}
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="text-blue-600 underline font-medium"
          >
            {personalInfo.contact.email}
          </a>{" "}
          &nbsp;| Phone:{" "}
          <a
            href={`tel:${personalInfo.contact.phone}`}
            className="text-blue-600 underline font-medium"
          >
            {personalInfo.contact.phone}
          </a>
          &nbsp;| Location:{" "}
          <span className="font-medium">{personalInfo.location}</span>
        </p>
        <p className="text-sm">
          LinkedIn:{" "}
          <a
            href={"https://" + personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            {personalInfo.links.linkedin}{" "}
          </a>
          &nbsp;| GitHub:{" "}
          <a
            href={"https://" + personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            {personalInfo.links.github}
          </a>
          &nbsp;| Portfolio:{" "}
          <a
            href={"https://" + personalInfo.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            {personalInfo.links.portfolio}
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section>
        <h2>Professional Summary</h2>
        <p>{summary}</p>
      </section>

      {/* Technical Skills */}
      <section>
        <h2>Technical Skills</h2>
        {technicalSkills.map((skillGroup, idx) => (
          <div key={idx} className="">
            <h3 className="inline-block mr-2">{skillGroup.category}:</h3>
            <p className="inline">{skillGroup.skills.join(", ")}</p>
          </div>
        ))}
      </section>

      {/* Work Experience */}
      <section>
        <h2>Work Experience</h2>
        {workExperience.map((job, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex items-center gap-3">
              <h3>{job.company}</h3>
              <p className="text-xs mt-2 italic"> {job.location}</p>
            </div>
            {job.titles && (
              <div className="text-xs font-semibold">
                {job.titles.map((title, idx) => (
                  <span key={title.startDate}>
                    {title.title} ({title.startDate} - {title.endDate})&nbsp;
                    {job.titles?.length > 1 &&
                      idx < job.titles.length - 1 &&
                      ", "}
                  </span>
                ))}
              </div>
            )}
            <ul className="mt-2">
              {job.responsibilities.map((resp, rIdx) => (
                <li key={rIdx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between items-center">
              <h3>{proj.title}</h3>
              {proj.url && (
                <a
                  className="text-sm mb-1 text-blue-600 underline"
                  href={`https://${proj.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.url}
                </a>
              )}
            </div>
            <ul>
              {proj.description.map((desc, dIdx) => (
                <li key={dIdx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <h3>
              {edu.degree} – {edu.institution}
            </h3>
            <p className="text-sm">
              {edu.major} | {edu.startDate} – {edu.endDate} | {edu.location}
            </p>
          </div>
        ))}
      </section>

      {/* Achievements & Certificates */}
      <section>
        <h2>Achievements & Certificates</h2>
        {achievementsAndCertificates.map((ach, idx) => (
          <div key={idx} className="mb-2">
            <div className="flex gap-2 items-center justify-between">
              <h3>{ach.title}</h3>
              <p className="text-sm italic mt-2">{ach.date}</p>
            </div>
            <p>{ach.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
