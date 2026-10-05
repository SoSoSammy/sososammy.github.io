import type { Project } from "../utils/types";
import { getAssetUrl } from "../utils/helpers";
import Technology from "./Technology";
import Link from "./Link";

export default function Project({ project }: { project: Project }) {
  const imageUrl = getAssetUrl(project.imageName);
  return (
    <article>
      <img src={imageUrl} alt={project.title} className="mb-4" />

      <h3 className="mb-2">{project.title}</h3>
      <div className="flex gap-2 mb-4 flex-wrap">
        {project.technologies.map((technology) => (
          <Technology technology={technology} />
        ))}
      </div>
      <p>{project.description}</p>
      {project.links && (
        <div className="flex gap-2">
          {project.links.map((link) => (
            <Link link={link} />
          ))}
        </div>
      )}
    </article>
  );
}
