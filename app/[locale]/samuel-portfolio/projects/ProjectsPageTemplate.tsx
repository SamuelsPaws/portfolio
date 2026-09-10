import clsx from "clsx";
import ProjectCard from "@/components/ProjectCard";
import techData from "@/data/tech.json"
import { ProjectShort } from "@/lib/types/projectShort"
import SectionSt from "@/components/SectionSt";
import { useTranslations } from "next-intl";

type TechKey = keyof typeof techData

interface Props {
    h1: string;
    projects: ProjectShort[];
    bgColor: string;
}

export default function ProjectsPageTemplate({ projects, h1, bgColor }: Props) {
    const t = useTranslations('Reusable')

    return (
    <main className="header-padding">
        <SectionSt
            title={h1}
            bgColor="bg-gray-300 dark:bg-br-black"
        >
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
        </SectionSt>
    </main>
    )
}