import clsx from "clsx";
import ProjectCard from "@/components/ProjectCard";
import techData from "@/data/tech.json"
import { ProjectShort } from "@/lib/types/projectShort"

type TechKey = keyof typeof techData

interface Props {
    h1: string;
    projects: ProjectShort[];
    bgColor: string;
}

export default function ProjectsPageTemplate({ projects, h1, bgColor }: Props) {
    return (
    <main className="header-padding">
        <section className={clsx(
            "px-8 lg:px-16 py-16",
            bgColor
        )}>
            <h1 className="mb-16 text-3xl lg:text-6xl font-semibold">
                {h1}
            </h1>
            {/* Div with projects */}
            <div className="flex gap-8 flex-wrap">
                {projects.map((el, index) =>
                    <ProjectCard
                        key={index}
                        project={el}
                        theme='dark'
                    />
                )}
            </div>
        </section>
    </main>
    )
}