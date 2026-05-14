import RoundBlackExternal from "@/components/ui-reusables/RoundBlackExternal";
import Image from "next/image";
import techData from "@/data/tech.json"
import { ProjectData } from "@/lib/types/projectTypes";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type ProjectTranslations = {
    description: string,
    implementations: string[],
    overview: string,
    keyFeatures: string[],
    technicalHighlights: string[],
    results: string[],
    challenges: string[],
    whatDemonstrates: string[],
    myRole: string,
}

interface Props {
    projectData: ProjectData;
    projectTranslations: ProjectTranslations;
}

export default function ProjectPageTemplate({ projectData, projectTranslations }: Props) {
    const { title, imgUrl, tech, liveUrl, galleryImgUrls } = projectData
    const {
        description,
        implementations,
        overview,
        keyFeatures,
        technicalHighlights,
        results,
        challenges,
        whatDemonstrates,
        myRole
    } = projectTranslations
    
    const t = useTranslations('ProjectPage')

    return (
    <main className="header-padding">
        <section className="
            px-4 py-16
            lg:px-32 lg:py-16
            bg-gray-300"
        >
            <h1 className="mb-4 lg:mb-8 text-4xl lg:text-6xl font-semibold">
                {title}
            </h1>
            <p className="
                mb-8
                text-lg lg:text-2xl text-black"
            >
                {description}
            </p>
            <RoundBlackExternal
                href={liveUrl}
                textSize="text-lg lg:text-2xl"
                paddingSize="lg"
                containerClasses="mb-8 lg:mb-16"
            >
                <span>{t('liveLink')}</span>
                <i className="fa fa-external-link scale-90"></i>
            </RoundBlackExternal>
            {/* Div with two halves for the rest of content */}
            <div className="flex flex-col-reverse lg:flex-row">
                {/* Left div */}
                <div className="
                    w-full
                    lg:w-1/2 lg:pr-8"
                >
                    <div className="
                        p-4 lg:p-8
                        bg-mywhite
                        rounded-2xl"
                    >
                        {/* Tech tags */}
                        <div className="
                            mb-4
                            flex gap-4 items-center flex-wrap"
                        >
                            <span className="text-xl lg:text-2xl font-semibold tracking-wide">
                                {t('tech')}:
                            </span>
                            {/* Tags */}
                            {tech.map((el, index) =>
                                <span
                                    key={index}
                                    className={clsx(
                                        "px-4 py-1 lg:px-4 lg:py-2",
                                        "text-lg lg:text-xl text-mywhite",
                                        "rounded-lg lg:rounded-2xl",
                                        techData[el].bg
                                    )}
                                >
                                    {techData[el].text}
                                </span>
                            )}
                        </div>
                        {/* Implementations tags */}
                        {implementations.length > 0 && <div className="
                            mb-8
                            flex gap-4 items-center flex-wrap"
                        >
                            <span className="text-xl lg:text-2xl font-semibold tracking-wide">
                                {t('implementations')}:
                            </span>
                            {/* Tags */}
                            {implementations.map((el, index) =>
                                <span
                                    key={index}
                                    className="
                                        px-4 py-1 lg:py-2
                                        text-lg lg:text-xl text-black text-nowrap
                                        bg-gray-300 rounded-lg lg:rounded-2xl"
                                >
                                    {el}
                                </span>
                            )}
                        </div>}
                        {/* Overview */}
                        <h2 className="mb-4 text-xl lg:text-2xl font-semibold">
                            {t('overview')}
                        </h2>
                        <p className="text-md lg:text-lg text-gray-600">
                            {overview}
                        </p>
                        {/* Key features */}
                        <h2 className="mt-8 mb-4 text-xl lg:text-2xl font-semibold">
                            {t('keyFeatures')}
                        </h2>
                        <ul className="
                            flex flex-col gap-2
                            text-md lg:text-lg text-gray-600"
                        >
                            {keyFeatures.map((el, index) =>
                                <li key={index}>
                                    <span><i className="fa fa-check mr-2 scale-90"></i>{el}</span>
                                </li>
                            )}
                        </ul>
                        {/* Technical highlights */}
                        <h2 className="
                            mt-8 mb-4
                            text-xl lg:text-2xl font-semibold"
                        >
                            {t('technicalHighlights')}
                        </h2>
                        <ul className="
                            flex flex-col gap-2
                            text-md lg:text-lg text-gray-600"
                        >
                            {technicalHighlights.map((el, index) =>
                                <li key={index}>
                                    <span><i className="fa fa-check mr-2 scale-90"></i>{el}</span>
                                </li>
                            )}
                        </ul>
                        {/* Results/impact - Optional, used for Web Dev */}
                        {results.length > 0 && <>
                            <h2 className="
                                mt-8 mb-4
                                text-xl lg:text-2xl font-semibold"
                            >
                                {t('results')}
                            </h2>
                            <ul className="
                                flex flex-col gap-2
                                text-md lg:text-lg text-gray-600"
                            >
                                {results.map((el, index) =>
                                    <li key={index}>
                                        <span><i className="fa fa-check mr-2 scale-90"></i>{el}</span>
                                    </li>
                                )}
                            </ul>
                        </>}
                        {/* Challenges solved - Optional, used for Other projects */}
                        {challenges.length > 0 && <>
                            <h2 className="
                                mt-8 mb-4
                                text-xl lg:text-2xl font-semibold"
                            >
                                {t('challenges')}
                            </h2>
                            <ul className="
                                flex flex-col gap-2
                                text-md lg:text-lg text-gray-600"
                            >
                                {challenges.map((el, index) =>
                                    <li key={index}>
                                        <span><i className="fa fa-check mr-2 scale-90"></i>{el}</span>
                                    </li>
                                )}
                            </ul>
                        </>}
                        {/* What this demonstrates - Optional, used for Other projects */}
                        {whatDemonstrates.length > 0 && <>
                            <h2 className="
                                mt-8 mb-4
                                text-xl lg:text-2xl font-semibold"
                            >
                                {t('whatDemonstrates')}
                            </h2>
                            <ul className="
                                flex flex-col gap-2
                                text-md lg:text-lg text-gray-600"
                            >
                                {whatDemonstrates.map((el, index) =>
                                    <li key={index}>
                                        <span><i className="fa fa-check mr-2 scale-90"></i>{el}</span>
                                    </li>
                                )}
                            </ul>
                        </>}
                        {/* My role */}
                        <h2 className="
                            mt-8 mb-4
                            text-xl lg:text-2xl font-semibold"
                        >
                            {t('myRole')}
                        </h2>
                        <p className="text-md lg:text-lg text-gray-600">
                            {myRole}
                        </p>
                    </div>
                </div>
                {/* Right div (images) */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src={imgUrl}
                        width={1200}
                        height={630}
                        className="mb-8 w-full aspect-[40/21] rounded-2xl"
                        priority
                        alt={title}
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