import Image from "next/image";
import techData from "@/data/tech.json"
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { ProjectData } from "@/lib/types/projectData";
import { LocaleKey } from "@/lib/types/localeKey";
import BlackBtn from "@/components/ui-reusables/BlackBtn";
import ContentChunk from "./components/ContentChunk";
import ContentList from "./components/ContentList";
import mapTechLabel from "@/lib/utils/mapTechLabel";
import { Tech } from "@/lib/types/tech";

interface Props {
    project: ProjectData;
    locale: LocaleKey
}

export default function ProjectPageTemplate({ project, locale }: Props) {
    const t = useTranslations('ProjectPage')

    return (
    <main className="header-padding">
        <section className="
            px-8 py-16
            lg:px-24 lg:py-24
            bg-gray-300"
        >
            <h1 className="mb-4 lg:mb-8 text-4xl lg:text-5xl font-semibold">
                {project.title}
            </h1>
            <p className="
                mb-16
                text-my-lg text-black"
            >
                {project.description[locale]}
            </p>
            {project.liveUrl &&
                <BlackBtn
                    href={project.liveUrl}
                    label={t('liveLink')}
                    external={true}
                    size="lg"
                    className="mb-8 md:mb-16"
                />
            }
            {/* Tech tags */}
            <div className="mb-8 flex gap-4 items-center flex-wrap">
                <span className="text-xl lg:text-2xl font-semibold tracking-wide">
                    {t('tech')}:
                </span>
                {/* Tags */}
                {project.tech.map((el, index) =>
                    <span
                        key={index}
                        className={clsx(
                            "px-4 py-1 lg:px-4 lg:py-2",
                            "text-my-lg text-br-white",
                            "rounded-full",
                            techData[el as Tech].bg
                        )}
                    >
                        {mapTechLabel(el)}
                    </span>
                )}
            </div>
            {/* Div with two halves for the rest of content */}
            <div className="flex flex-col-reverse lg:flex-row">
                {/* Left div */}
                <div className="
                    w-full
                    lg:w-1/2 lg:pr-8
                    flex flex-col gap-8"
                >
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
                <div className="w-full lg:w-1/2">
                    <Image
                        src={project.coverSrc}
                        width={1200}
                        height={630}
                        className="
                            w-full aspect-[40/21]
                            sticky top-[calc(var(--spacing-header-height)+2rem)]
                            rounded-2xl"
                        priority
                        alt={project.title}
                    />
                    {/* Gallery */}
                    {/* <div className="
                        w-full relative aspect-og
                        grid grid-cols-4 grid-rows-2 gap-8
                        rounded-2xl overflow-hidden
                        select-none cursor-pointer group hover:gap-2 duration-200
                        before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-10"
                    >
                        <span className="
                            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                            text-mywhite text-4xl group-hover:text-[2.5rem] duration-200"
                        >
                            {t('seeGallery')}
                        </span>
                        COMMENT Images
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                        <div className="row-span-2 w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                        <div className="row-span-2 w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={'/assets/lpdh.webp'}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={title}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </main>
    )
}