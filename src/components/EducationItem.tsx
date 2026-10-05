import { getAssetUrl } from "../utils/helpers";
import type { Education } from "../utils/types";

export default function EducationItem({ education }: { education: Education }) {
  const imageUrl = getAssetUrl(education.imageName);

  return (
    <article className="flex flex-col md:items-start md:flex-row md:justify-between gap-8">
      <div className="grow">
        <h3 className="flex flex-col md:flex-row md:justify-between md:gap-1">
          <span>{education.school}</span>
          <span className="md:text-right">{education.location}</span>
        </h3>
        <h4 className="flex flex-col md:flex-row md:justify-between md:gap-1">
          <span>{education.degree}</span>{" "}
          <span className="md:text-right">
            {education.startDate} &ndash; {education.endDate}
          </span>
        </h4>
        <p className="mt-2">{education.description}</p>
      </div>

      <img
        src={imageUrl}
        alt={education.school}
        className="w-20 self-center md:self-start"
      />
    </article>
  );
}
