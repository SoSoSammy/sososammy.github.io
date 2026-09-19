import type { Project } from "../utils/types";
import { getAssetUrl } from "../utils/helpers";
import Technology from "./Technology";

export default function Project({ project }: { project: Project }) {
  const imageUrl = getAssetUrl(project.imageName);
  return (
    <article>
      <img src={imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <ul>
        {project.technologies.map((technology) => (
          <Technology technology={technology} />
        ))}
      </ul>
      <p>{project.description}</p>
    </article>
  );
}
