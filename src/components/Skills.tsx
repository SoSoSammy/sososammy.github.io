import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>

      <div>
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
        <SkillGroup title="DevOps & Environment" skills={["Docker", "Linux"]} />
      </div>
    </section>
  );
}
