import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section id="skills">
      <div className="md:container md:mx-auto">
        <div className="px-4 py-6 md:py-10 md:px-0">
          <h2 className="text-center md:text-left mb-4">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkillGroup
              title="Langages"
              skills={[
                "Python",
                "Ruby",
                "C",
                "C++",
                "C#",
                "Java",
                "Kotlin",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS",
              ]}
            />
            <SkillGroup
              title="Frameworks"
              skills={[
                "React",
                "Ruby on Rails",
                "FastAPI",
                "Jetpack Compose",
                ".NET",
                "Tailwind CSS",
                "Bootstrap",
              ]}
            />
            <SkillGroup
              title="Development Tools"
              skills={[
                "Google Cloud",
                "Figma",
                "Git",
                "GitHub",
                "GitHub Copilot",
                "Claude Code",
              ]}
            />
            <SkillGroup
              title="Databases"
              skills={["MySQL", "PostgreSQL", "Git", "Firebase"]}
            />
            <SkillGroup
              title="DevOps & Environment"
              skills={["Docker", "Linux"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
