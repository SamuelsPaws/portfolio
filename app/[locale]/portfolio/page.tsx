import FortSectionSt from "@/components/FortSectionSt";
import TargetForScroll from "@/components/TargetForScroll";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn";
import Image from "next/image";
import ProjectCard from "./components/project-card/ProjectCard";
import type { LocaleKey } from "@/lib/types/localeKey";
import { portfolio } from "@/data/fortales/portfolio";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

export default async function Portfolio({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'FortPortfolio' })

    return (
    <main>
        <section className="
            relative lg:min-h-170
            px-8 py-12 sm:py-16 md:px-16 lg:py-32 xl:px-32
            flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16
            bg-main"
        >
            {/* Left div */}
            <div className="w-full min-w-0 lg:w-1/2 wrap-break-word">
                <Eyebrow text={t('heroBrow')} />
                <h1 className="
                    mb-6 md:mb-8
                    text-4xl sm:text-5xl xl:text-7xl leading-tight text-main font-['Source_Serif_4']"
                >
                    {t('h1')}
                </h1>
                <p className="
                    mb-8
                    text-my-md text-secondary leading-relaxed"
                >
                    {t('heroCopy')}
                </p>
                <FortCtaBtn
                    href="#content"
                    label={t('exploreCta')}
                />
            </div>
            {/* Right image */}
            <Image
                src="/assets/fort-portfolio.webp"
                width={1448}
                height={1086}
                className="
                    w-full min-w-0 aspect-[4/3] lg:aspect-auto lg:w-1/2 lg:h-120 object-cover
                    rounded-2xl sm:rounded-4xl shadow-img"
                sizes="(min-width: 1024px) 60vw, 100vw"
                alt=""
            />
        </section>
        <FortSectionSt
            title={t('h2Projects')}
            bgColor="bg-secondary"
        >
            <TargetForScroll id="content" />
            {portfolio.map((project, index) => (
                <ProjectCard
                    key={project.slug}
                    {...project}
                    locale={locale}
                    ctaLabel={t('caseStudyCta')}
                    ctaHref={`/portfolio/${project.slug}`}
                    reversed={index % 2 === 1}
                    isFirst={index === 0}
                    isLast={index === portfolio.length - 1}
                />
            ))}
        </FortSectionSt>
        <FortSectionCta bgColor="bg-main" />
    </main>
    )
}
