import type { Experience } from "../utils/types";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article>
      <h3>{experience.role}</h3>
      <h4>{experience.company}</h4>
      <h5>
        {experience.startDate} &ndash; {experience.endDate}
      </h5>
      <p>{experience.description}</p>
    </article>
  );
}
