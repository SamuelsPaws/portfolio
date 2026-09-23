import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CustomIcon from "@/components/CustomIcon";
import type { PortfolioProject } from "@/lib/types/fortales/portfolio";
import type { LocaleKey } from "@/lib/types/localeKey";

interface Props {
    project: PortfolioProject;
    locale: LocaleKey;
    ctaLabel: string;
}

export default function RelatedProjectCard({ project, locale, ctaLabel }: Props) {
    return (
        <Link
            href={`/portfolio/${project.slug}`}
            locale={locale}
            className="
                group min-w-0 flex h-full flex-col overflow-hidden
                rounded-3xl border border-gray-300 bg-main
                transition-[border-color,box-shadow] duration-400 ease-out
                hover:border-br-orange-main/50 hover:shadow-lg
                focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-br-orange-main
                motion-reduce:transition-none"
        >
            <div className="aspect-[40/21] overflow-hidden bg-secondary">
                <Image
                    src={project.ogImage}
                    width={project.imgW}
                    height={project.imgH}
                    alt={project.imgAlt[locale]}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="
                        h-full w-full object-cover
                        transition-transform duration-400 ease-out
                        motion-safe:group-hover:scale-[1.025]
                        motion-reduce:transition-none"
                />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="mb-3 text-my-sm font-semibold tracking-wider text-br-orange-main-desat">
                    {project.eyebrow[locale]}
                </span>
                <h3 className="mb-4 font-['Source_Serif_4'] text-3xl sm:text-4xl leading-tight text-main wrap-break-word">
                    {project.title}
                </h3>
                <p className="mb-4 text-my-md leading-relaxed text-secondary wrap-break-word">
                    {project.copy[locale]}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-300 pt-4">
                    <span className="min-w-0 text-my-sm font-semibold text-main">
                        {ctaLabel}
                    </span>
                    <span className="
                        flex size-10 shrink-0 items-center justify-center rounded-full
                        bg-br-orange-main/10 dark:bg-br-orange-main/20
                        text-br-orange-main
                        transition-transform duration-200 ease-out
                        motion-safe:group-hover:translate-x-1 motion-safe:group-active:scale-95
                        motion-reduce:transition-none"
                    >
                        <CustomIcon
                            iconId="arrowR"
                            className="text-xl"
                        />
                    </span>
                </div>
            </div>
        </Link>
    );
}
