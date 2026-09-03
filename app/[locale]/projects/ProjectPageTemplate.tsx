import Image from "next/image";
import techData from "@/data/tech.json"
import projectData from "@/data/projects.json"
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { ProjectData } from "@/lib/types/projectData";
import { LocaleKey } from "@/lib/types/localeKey";
import BlackBtn from "@/components/ui-reusables/BlackBtn";
import ContentChunk from "./components/ContentChunk";
import ContentList from "./components/ContentList";
import mapTechLabel from "@/lib/utils/mapTechLabel";
import { Tech } from "@/lib/types/tech";
import Gallery from "@/components/gallery/Gallery";
import { resultsGalleries, showcaseGalleries } from "@/data/galleries";
import SectionSt from "@/components/SectionSt";
import mapProjectCard from "@/lib/utils/mapProjectCard";
import ProjectCard from "@/components/ProjectCard";
import { projectSorterWeb } from "@/lib/utils/prioritySort";

interface Props {
    project: ProjectData;
    locale: LocaleKey
}

export default function ProjectPageTemplate({ project, locale }: Props) {
    const t = useTranslations('ProjectPage')
    const otherProjects = projectData.filter(el => el.type === project.type && el.slug !== project.slug)

    const getSorterFn = () => {
        switch(project.type) {
            case 'web-dev':
                return projectSorterWeb;
            default:
                return projectSorterWeb;
        }
    }

    return (
    <main className="header-padding">
        <section className="
            px-8 py-16
            lg:px-24 lg:py-24
            bg-gray-300"
        >
            {/* Div with grid for columns */}
            <div className="
                grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8"
            >
                {/* Left div */}
                <div className="flex flex-col gap-8">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold">
                        {project.title}
                    </h1>
                    {/* Tech tags */}
                    <div className="flex gap-4">
                        {project.tech.map((el, index) =>
                            <span
                                key={index}
                                className={clsx(
                                    "px-4 py-1 lg:px-4 lg:py-2",
                                    "text-my-lg text-br-white",
                                    "rounded-lg",
                                    techData[el as Tech].bg
                                )}
                            >
                                {mapTechLabel(el)}
                            </span>
                        )}
                    </div>
                    {/* Description */}
                    <p className="
                        mb-0 md:mb-8
                        text-my-lg text-black"
                    >
                        {project.description[locale]}
                    </p>
                    {/* Live site */}
                    {project.liveUrl &&
                        <BlackBtn
                            href={project.liveUrl}
                            label={t('liveLink')}
                            external={true}
                            size="lg"
                            className="mb-0 md:mb-8"
                        />
                    }
                    {/* Implementations */}
                    {project.implementations && (
                        <ContentChunk title={t('implementations')}>
                            <ContentList
                                items={project.implementations[locale]}
                            />
                        </ContentChunk>
                    )}
                    {/* Overview */}
                    <ContentChunk title={t('overview')}>
                        <p className="mt-4 text-my-md text-gray-700 text-justify">
                            {project.overview[locale]}
                        </p>
                    </ContentChunk>
                    {/* Key features */}
                    <ContentChunk title={t('keyFeatures')}>
                        <ContentList
                            items={project.keyFeatures[locale]}
                        />
                    </ContentChunk>
                    {/* Technical highlights */}
                    <ContentChunk title={t('technicalHighlights')} expandable={true}>
                        <ContentList
                            items={project.technicalHighlights[locale]}
                        />
                    </ContentChunk>
                    {/* Results/impact - Optional, used for Web Dev */}
                    {project.results && (
                        <ContentChunk title={t('results')}>
                            <ContentList
                                items={project.results[locale]}
                            />
                        </ContentChunk>
                    )}
                    {/* Challenges solved - Optional, used for Other projects */}
                    {project.challenges && (
                        <ContentChunk
                            title={t('challenges')}
                            expandable
                        >
                            <ContentList
                                items={project.challenges[locale]}
                            />
                        </ContentChunk>
                    )}
                    {/* What this demonstrates - Optional, used for Other projects */}
                    {/* {project.whatDemonstrates && (
                        <ContentChunk title={t('whatDemonstrates')}>
                            <ContentList
                                items={project.whatDemonstrates[locale]}
                            />
                        </ContentChunk>
                    )} */}
                    {/* My role */}
                    <ContentChunk title={t('myRole')}>
                        <p className="mt-4 text-my-md text-gray-700 text-justify">
                            {project.myRole[locale]}
                        </p>
                    </ContentChunk>
                </div>
                {/* Right div (images) */}
                {/* sticky top-[calc(var(--spacing-header-height)+2rem)] */}
                <div className="flex flex-col gap-8">
                    <Image
                        src={project.coverSrc}
                        width={1200}
                        height={630}
                        className="
                            w-full aspect-[40/21]
                            rounded-2xl"
                        priority
                        alt={project.title}
                    />
                    {/* Galleries */}
                    {showcaseGalleries[project.slug] && (
                        <div className={clsx(
                            "w-full",
                            "flex flex-col gap-8"
                        )}>
                            <h2 className="text-3xl text-black font-semibold">
                                {t('ssRecordings')}
                            </h2>
                            <Gallery
                                gridVersion='projectSlug'
                                gridClassName="
                                    w-full
                                    grid grid-cols-3
                                    auto-rows-[120px] gap-2
                                    md:auto-rows-[200px] md:gap-4"
                                media={showcaseGalleries[project.slug]}
                            />
                        </div>
                    )}
                    {resultsGalleries[project.slug] && (
                        <div className="
                            w-full
                            flex flex-col gap-8"
                        >
                            <h2 className="text-3xl text-black font-semibold">
                                {t('resultsGallery')}
                            </h2>
                            <Gallery
                                gridVersion='projectSlug'
                                gridClassName="
                                    w-full
                                    grid grid-cols-3
                                    auto-rows-[120px] gap-2
                                    md:auto-rows-[200px] md:gap-4"
                                media={resultsGalleries[project.slug]}
                            />
                        </div>
                    )}
                    {/* Live site */}
                    {project.liveUrl &&
                        <BlackBtn
                            href={project.liveUrl}
                            label={t('liveLink')}
                            external={true}
                            size="lg"
                            className="
                                sticky top-[calc(var(--spacing-header-height)+2rem)]
                                mt-8 self-center md:self-end"
                        />
                    }
                </div>
            </div>
        </section>
        <SectionSt
            title={t('h2OtherProjects')}
            bgColor="bg-gray-400"
        >
            <div className="flex flex-wrap gap-8">
                {otherProjects
                    .map(el => mapProjectCard(el, locale))
                    .sort(getSorterFn())
                    .map((el, index) => (
                        <ProjectCard
                            key={index}
                            project={el}
                            theme="light"
                        />
                    ))
                }
            </div>
        </SectionSt>
    </main>
    )
}