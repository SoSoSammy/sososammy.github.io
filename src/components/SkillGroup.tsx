import Technology from "./Technology";

export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <section>
      <h3>{title}</h3>
      {skills.map((skill) => (
        <Technology technology={skill} />
      ))}
    </section>
  );
}
