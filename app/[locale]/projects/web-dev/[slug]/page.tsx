import { getTranslations } from "next-intl/server";
import ProjectPageTemplate from "../../ProjectPageTemplate";
import projectsJson from "@/data/projects.json"
import { ProjectData, Slug } from "@/lib/types/projectTypes";

// export async function generateStaticParams() {
//     return [
//         { slug: 'lpdh' },
//         { slug: 'plasma-vida' },
//         { slug: 'dwm' },
//     ]
// }



type Props = {
    params: Promise<{
        slug: Slug
    }>
}

export default async function WebDevProject({ params }: Props) {
    const { slug } = await params
    const t = await getTranslations('Projects')
    const projectJson = projectsJson[slug] as ProjectData

    return (
    <ProjectPageTemplate
        projectData={{
            title: projectJson.title,
            imgUrl: projectJson.imgUrl,
            tech: projectJson.tech,
            implementations: projectJson.implementations,
            liveUrl: projectJson.liveUrl,
            galleryImgUrls: projectJson.galleryImgUrls
        }}
        projectTranslations={{
            description: t(`${slug}.description`),
            implementations: t.raw(`${slug}.implementations`),
            overview: t(`${slug}.overview`),
            keyFeatures: t.raw(`${slug}.keyFeatures`),
            technicalHighlights: t.raw(`${slug}.technicalHighlights`),
            results: t.raw(`${slug}.results`),
            challenges: t.raw(`${slug}.challenges`),
            whatDemonstrates: t.raw(`${slug}.whatDemonstrates`),
            myRole: t.raw(`${slug}.myRole`),
        }}
    />
    )
}