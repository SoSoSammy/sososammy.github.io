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
    },
    {
      title: "Yellowstone Website Redesign",
      imageName: "images/High-Fidelity Yellowstone Wireframes.png",
      technologies: ["Figma"],
      description:
        "Low- and high-fidelity wireframes for redesigning Yellowstone National Park website.",
    },
    {
      title: "Floofer's Dog Washing",
      imageName: "gifs/floofers-dog-washing.gif",
      technologies: ["HTML5", "CSS", "JavaScript"],
      description:
        "This project was for a Future Business Leaders of America Website Design competitive event. I worked with a team of 2 others to create a website for a fictional dog washing business. My teammates created the branding for the business while I designed the website using Figma and coded it using HTML, CSS, and JavaScript.",
    },
  ];
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectComponent project={project} />
      ))}
    </section>
  );
}
