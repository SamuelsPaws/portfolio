import ProjectCard from "@/components/ProjectCard";
import SectionTitleH2 from "./components/SectionTitleH2";
import MoreProjectsBtn from "./components/MoreProjectsBtn";
import BlackBtn from "@/components/ui-reusables/BlackBtn";
import projectData from "@/data/projects.json"
import mapProjectCard from "@/lib/utils/mapProjectCard";
import { getTranslations } from "next-intl/server";
import { LocaleKey } from "@/lib/types/localeKey";
import { ProjectData } from "@/lib/types/projectData";
import SectionSt from "@/components/SectionSt";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

export default async function Home({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('HomePage')

    const ilaloProject: ProjectData | undefined = projectData.find(el => el.slug === 'ilalo-hotel')

    return (
    <main>
        {/* Hero */}
        <section className="
            h-[102vh]
            px-8 lg:px-16
            flex flex-col items-center justify-center gap-8 lg:gap-8
            bg-br-white"
        >
            <h1 className="
                text-3xl md:text-5xl
                text-center text-black
                font-semibold leading-12 lg:leading-20"
            >
                {t('h1-1')}<br />{t('h1-2')}
            </h1>
            <BlackBtn
                href="/projects"
                label={t('heroCta')}
                external={false}
                size={'md'}
            />
        </section>
        {/* Web dev projects */}
        <SectionSt
            title={t('h2WebDev')}
            bgColor="bg-gray-400"
        >
            {/* Container with the cards */}
            <div className="
                w-full mb-8 md:mb-16
                flex flex-col gap-8
                lg:flex-row lg:justify-center lg:items-center lg:gap-8"
            >
                {ilaloProject !== undefined && 
                    <ProjectCard
                        project={mapProjectCard(ilaloProject, locale)}
                        theme="light"
                    />
                }
            </div>
            <BlackBtn
                href="/projects/web-dev"
                label={t('moreProjects')}
                external={false}
                size={'md'}
            />
        </SectionSt>
        {/* Beyond web dev */}
        <section className="
            w-full px-8 py-16
            flex flex-col
            bg-mywhite"
        >
            <SectionTitleH2 textColor="text-black">
                {t('beyondSectionTitle')}
            </SectionTitleH2>
            {/* Container with the cards */}
            <div className="
                w-full mb-16
                flex flex-col gap-4
                lg:flex-row lg:justify-center lg:items-center lg:gap-8"
            >
            </div>
            <MoreProjectsBtn
                href="/projects/other"
                className="self-center"
            />
        </section>
    </main>
  );
}
