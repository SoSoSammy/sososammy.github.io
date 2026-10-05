import { getAssetUrl } from "../utils/helpers";
import type { Education } from "../utils/types";

export default function EducationItem({ education }: { education: Education }) {
  const imageUrl = getAssetUrl(education.imageName);

  return (
    <article className="flex flex-col md:items-start md:flex-row md:justify-between gap-12">
      <div className="grow md:self-center">
        <h3 className="flex justify-between">
          <span>{education.school}</span>
          <span className="text-right">{education.location}</span>
        </h3>
        <h4 className="flex justify-between">
          <span>{education.degree}</span>{" "}
          <span className="text-right">
            {education.startDate} &ndash; {education.endDate}
          </span>
        </h4>
        <p>{education.description}</p>
      </div>

      <img
        src={imageUrl}
        alt={education.school}
        className="w-40 self-center md:self-start"
      />
    </article>
  );
}
