import ProjectItem from "./ProjectItem";
import type { Project } from "./ProjectItem";
import tokki from "../../assets/tokki.webp";

function Projects() {
  const projects: Project[] = [
    {
      title: "Tokki Korean",
      desc: "An all-in-one language learning app for Korean. Currently available for Android devices.",
      image: tokki,
      url: "https://www.tokkikorean.com",
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <h2 className="sr-only">Projects and Work</h2>

      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="text-xs tracking-[0.2em] uppercase opacity-40 mb-16">
          Projects
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
