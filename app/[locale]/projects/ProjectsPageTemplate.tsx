import clsx from "clsx";
import ProjectCard from "../components/ProjectCard";

type Project = {
    title: string,
    description: string,
    imgUrl: string,
    tech: string,
    href: string,
    theme: string
}

interface Props {
    h1: string;
    projectsData: Project[];
    bgColor: string;
}

export default function ProjectsPageTemplate({ projectsData, h1, bgColor }: Props) {
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
                {projectsData && projectsData.map((el, index) =>
                    <ProjectCard
                        key={index}
                        title={el.title}
                        description={el.description}
                        imgUrl={el.imgUrl}
                        tech={el.tech}
                        href={el.href}
                        theme={el.theme}
                    />
                )}
            </div>
        </section>
    </main>
    )
}