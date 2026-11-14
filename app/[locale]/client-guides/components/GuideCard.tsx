import CustomIcon, { type IconId } from "@/components/CustomIcon"
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon"
import { Link } from "@/i18n/navigation"

interface Props {
    href: string
    iconId: IconId
    title: string
    description: string
    label: string
    status: string
}

export function GuideCard({ href, iconId, title, description, label, status }: Props) {
    return (
    <Link
        href={href}
        className="
            min-w-0
            p-8
            flex flex-col items-start
            bg-main
            border border-gray-300 rounded-4xl
            hover:border-br-orange-main transition-colors duration-400"
    >
        {/* Topic and status */}
        <div className="w-full mb-8 flex items-center justify-between gap-4">
            <OrangeWithIcon iconId={iconId} />
            <span className="text-my-sm text-secondary">
                {status}
            </span>
        </div>

        {/* Guide summary */}
        <h3 className="mb-4 text-2xl text-main font-serif">
            {title}
        </h3>
        <p className="mb-8 text-my-md text-secondary leading-relaxed">
            {description}
        </p>
        <span className="mt-auto flex items-center gap-2 text-my-md text-main font-semibold">
            {label}
            <CustomIcon iconId="arrowR" />
        </span>
    </Link>
    )
}
