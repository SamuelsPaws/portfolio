import ProjectsPageTemplate from "../ProjectsPageTemplate";
import projectData from '@/data/projects.json'
import mapProjectCard from "@/lib/utils/mapProjectCard";
import { LocaleKey } from "@/lib/types/localeKey";
import { getTranslations } from "next-intl/server";
import { ProjectData } from "@/lib/types/projectData";
import { projectSorterWeb } from "@/lib/utils/prioritySort";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

export default async function WebDevProjects({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('Projects')

    return (
    <ProjectsPageTemplate
        h1="Web Development Projects"
        projects={
            projectData
                .filter(el => el.type === 'web-dev')
                .sort(projectSorterWeb)
                .map(el => mapProjectCard(el as ProjectData, locale))
        }
        bgColor="bg-gray-300"
    />
    )
}