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
      <h3 className="mb-1">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Technology technology={skill} />
        ))}
      </div>
    </section>
  );
}
