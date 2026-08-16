import { LocaleKey } from "../types/localeKey";
import { ProjectData } from "../types/projectData";
import { ProjectShort } from "../types/projectShort";

export default function mapProjectCard(project: ProjectData, locale: LocaleKey): ProjectShort {
    return {
        title: project.title,
        type: project.type,
        description: project.description[locale],
        tech: project.tech,
        implementations: project.implementations ? project.implementations[locale] : null,
        liveUrl: project.liveUrl,
        imgSrc: project.coverSrc,
        slug: project.slug
    }
}