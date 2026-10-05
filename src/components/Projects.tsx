import ProjectComponent from "./Project";
import type { Project } from "../utils/types";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Trek Mountain Bikes",
      imageName: "gifs/trek-mountain-bikes.gif",
      technologies: ["HTML5", "CSS", "JavaScript", "Figma"],
      description:
        "To create this project, I went through the steps a designer would take, such as planning a meeting agenda to discuss the client's website, budgeting the time and resources needed, and drafting a website design agreement. I then created a site map for the website, chose organization schemes, wireframed the homepage design using Figma, and coded the design with HTML, CSS, and JavaScript.",
      links: [
        { type: "Demo", url: "https://sososammy.com/trek-mountain-bikes/" },
        {
          type: "Code",
          url: "https://github.com/SoSoSammy/trek-mountain-bikes",
        },
      ],
    },
    {
      title: "Yellowstone Website Redesign",
      imageName: "gifs/yellowstone-wireframes.gif",
      technologies: ["Figma"],
      description:
        "Low- and high-fidelity wireframes for redesigning Yellowstone National Park website.",
      links: [
        {
          type: "Link",
          url: "https://www.figma.com/design/ekPYQFalc2tFWe64bB4Scs/Yellowstone-Wireframes---Website-Redesign?node-id=2-3&t=qXU4KQUYU0lcuUtr-1",
        },
      ],
    },
    {
      title: "Floofer's Dog Washing",
      imageName: "gifs/floofers-dog-washing.gif",
      technologies: ["HTML5", "CSS", "JavaScript"],
      description:
        "This project was for a Future Business Leaders of America Website Design competitive event. I worked with a team of 2 others to create a website for a fictional dog washing business. My teammates created the branding for the business while I designed the website using Figma and coded it using HTML, CSS, and JavaScript.",
      links: [
        {
          type: "Demo",
          url: "https://sososammy.com/dog-washing-business/",
        },
        {
          type: "Code",
          url: "https://github.com/SoSoSammy/dog-washing-business",
        },
      ],
    },
  ];
  return (
    <section id="projects">
      <div className="md:container md:mx-auto">
        <div className="px-4 py-6 md:py-10 md:px-0">
          <h2 className="text-center md:text-left mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectComponent project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
