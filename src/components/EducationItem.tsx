import { getAssetUrl } from "../utils/helpers";
import type { Education } from "../utils/types";

export default function EducationItem({ education }: { education: Education }) {
  const imageUrl = getAssetUrl(education.imageName);

  return (
    <article>
      <h3>
        <span>{education.school}</span>
        <span>{education.location}</span>
      </h3>
      <h4>
        <span>{education.degree}</span>{" "}
        <span>
          {education.startDate} <>&ndash;</> {education.endDate}
        </span>
      </h4>
      <p>{education.description}</p>

      <img src={imageUrl} alt={education.school} />
    </article>
  );
}
