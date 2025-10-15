import ProjectCard from "./ProjectCard";
import projectsJson from "./projects.json";

export default function Projects() {
	const projects: Array<Project> = projectsJson as Project[];

	return(
		<section id="projects" className="lg:-mx-40">
			<h2>Projects</h2>
			<ul className="flex flex-col gap-12">
				{
					projects.map(p =>
						<ProjectCard project={p} />
					)
				}
			</ul>
		</section>
	);
}

export interface Project {
	name: string,
	brief: string,
	skillsUsed: string[],
	livePreviewLink: string | undefined,
	githubLink: string | undefined,
	images: string[]
}