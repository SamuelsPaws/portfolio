import { notFound } from "next/navigation";
import ProjectPageTemplate from "../../ProjectPageTemplate";
import projectData from "@/data/projects.json"
import { ProjectData } from "@/lib/types/projectData";
import { LocaleKey } from "@/lib/types/localeKey";

// export async function generateStaticParams() {
//     return [
//         { slug: 'lpdh' },
//         { slug: 'plasma-vida' },
//         { slug: 'dwm' },
//     ]
// }

type Props = {
    params: Promise<{
        slug: string,
        locale: LocaleKey
    }>
}

export default async function OtherProject({ params }: Props) {
    const { slug, locale } = await params
    const project = projectData.find(el => el.slug === slug)

    if (project === undefined) {
        notFound()
    }

    return (
    <ProjectPageTemplate
        project={project}
        locale={locale}
    />
    )
}