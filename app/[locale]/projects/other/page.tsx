import { useTranslations } from "next-intl";
import ProjectsPageTemplate from "../ProjectsPageTemplate";
import { Projects } from '@/messages/en.json'

type Project = {
    title: string,
    description: string,
    imgUrl: string,
    tech: string,
    href: string,
    theme: string
}

export default function OtherProjects() {
    const tProjects = useTranslations('Projects')
    // const tPage = useTranslations()
    const projectsData: Project[] = Object.keys(Projects).map(el => {
        if (tProjects(`${el}.type`) === 'other') {
            return {
                title: tProjects(`${el}.title`),
                description: tProjects(`${el}.description`),
                imgUrl: `/assets/${el}.webp`,
                tech: tProjects(`${el}.tech`),
                href: `/projects/other/${el}`,
                theme: 'dark'
            }
        }
    }).filter(el => el !== undefined)

    return (
    <ProjectsPageTemplate
        h1="Beyond Web Development"
        projectsData={projectsData}
        bgColor="bg-gray-300"
    />
    )
}