import type { Experience } from "../utils/types";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  const experiences = [
    {
      company: "SaddleBook",
      role: "Software Engineer",
      startDate: "May 2026",
      endDate: "Present",
      description:
        "Engineered an interactive Rails and Stimulus configuration wizard, decreasing event setup time by 70%, by translating complex database schema logic into an intuitive, guided workflow. Eliminated manual class scoring errors by 100%, replacing paper workflow with an automated cloud-based scoring interface featuring real-time penalty and score totaling and familiar score sheet UI for judges and scribes. Decreased producer onboarding friction and reduced payment-related support requests by 80%, refactoring complex accounting settings into a user-centered setup.",
    },
    {
      company: "SaddleBook",
      role: "Software Engineer Intern",
      startDate: "October 2025",
      endDate: "April 2026",
      description:
        "Eliminated 96% of maintenance overhead for navigation components by refactoring duplicated tab markup across 27 files into a centralized Ruby on Rails DSL helper. Enhanced frontend component accessibility, achieving full WAI-ARIA, screen reader, and keyboard support across tab and modal workflows, by refactoring legacy div markup into native dialog elements, using Stimulus. Streamlined frontend development efficiency by replacing duplicated per-use-case dialogs with a unified Turbo-powered dialog, enforcing design system compliance across 40+ workflows while removing 400+ lines of boilerplate.",
    },
    {
      company: "University of Utah Kahlert School of Computing",
      role: "Teaching Assistant, Software Practice",
      startDate: "August 2025",
      endDate: "December 2025",
      description:
        "Hosted weekly help hours to answer student questions and provide debugging assistance in C# and .NET. Graded 25+ student code submissions weekly, giving feedback about code quality so students could improve. Taught weekly lab sessions on team of 2, explaining key concepts about software practice to 30 students, helping them gain a solid understanding of course material.",
    },
    {
      company: "University of Utah Department of Human Genetics",
      role: "Computer Assistant",
      startDate: "October 2023",
      endDate: "January 2024",
      description:
        "Redesigned and rebuilt 15+ departmental websites using WordPress, improving faculty research displays through a professional, modern UI. Managed stakeholder relations for 5 distinct department entities, updating websites based on user requirements and ensuring digital presence is up-to-date and meets changing needs.",
    },
  ];
  return (
    <section id="experience">
      <div className="md:container md:mx-auto">
        <h2>Experience</h2>
        {experiences.map((experience) => (
          <ExperienceItem experience={experience} />
        ))}
      </div>
    </section>
  );
}
