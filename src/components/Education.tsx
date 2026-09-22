import type { Education } from "../utils/types";
import EducationItem from "./EducationItem";

export default function Education() {
  const educationList: Education[] = [
    {
      school: "University of Utah",
      location: "Salt Lake City, UT",
      degree: "Bachelor of Science in Computer Science, summa cum laude",
      startDate: "August 2023",
      endDate: "May 2026",
      description:
        "Dean's List (Fall 2023, Spring 2024, Summer 2024, Fall 2024, Spring 2025, Summer 2025, Fall 2025, Spring 2026)",
      imageName: "images/UofU Logos/BlockU_red-800px.png",
    },
    {
      school: "Bridgerland Technical College",
      location: "Logan, UT",
      degree: "Certificate in Web & Mobile Development",
      startDate: "January 2022",
      endDate: "July 2023",
      description: "Recipient of the Technical Education Scholarship",
      imageName: "images/Btech Logos/BTECH Building Sketch Seal.png",
    },
  ];

  return (
    <section id="education">
      <div className="md:container md:mx-auto">
        <h2>Education</h2>

        {educationList.map((education) => (
          <EducationItem education={education} />
        ))}
      </div>
    </section>
  );
}
