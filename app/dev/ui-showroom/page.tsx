import type { Metadata } from "next"
import Link from "next/link"
import BlackBtn from "@/components/ui-reusables/BlackBtn"
import CenteredP from "@/components/ui-reusables/CenteredP"
import Eyebrow from "@/components/ui-reusables/Eyebrow"
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn"
import IconInfoCard from "@/components/ui-reusables/IconInfoCard"
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon"
import StepCard from "@/components/ui-reusables/StepCard"
import { ComponentPreviewSection } from "./components/ComponentPreviewSection"
import { FloatingThemePanel } from "./components/FloatingThemePanel"

export const metadata: Metadata = {
    title: "UI showroom",
}

export default function UiShowroomPage() {
    const previews = [
        {
            filename: 'BlackBtn.tsx',
            component: (
                <BlackBtn
                    href="/projects/web-dev"
                    label="View projects"
                    external={false}
                    size="md"
                />
            ),
        },
        {
            filename: 'CenteredP.tsx',
            component: (
                <CenteredP
                    text="Thoughtful websites that help your business connect with the right people."
                    halfMargin
                />
            ),
        },
        {
            filename: 'Eyebrow.tsx',
            component: (
                <Eyebrow
                    text="Built around your business"
                    wide
                    shortMargin
                />
            ),
        },
        {
            filename: 'FortCtaBtn.tsx',
            component: (
                <FortCtaBtn
                    href="/dev"
                    label="Start a project"
                    centered
                />
            ),
        },
        {
            filename: 'IconInfoCard.tsx',
            component: (
                <IconInfoCard
                    iconId="globe"
                    title="Ready for every screen"
                    description="A clear, responsive experience that feels at home on phones, tablets, and desktops."
                />
            ),
        },
        {
            filename: 'OrangeWithIcon.tsx',
            component: (
                <OrangeWithIcon
                    iconId="bulb"
                />
            ),
        },
        {
            filename: 'StepCard.tsx',
            component: (
                <StepCard
                    iconId="pencil-ruler"
                    num={1}
                    title="Plan your website"
                    copy="We start with your goals and shape a clear direction for your content, design, and features."
                />
            ),
        },
    ]

    return (
    <main id="main-content" tabIndex={-1}>
        {/* Floating theme control */}
        <FloatingThemePanel />

        {/* Banner */}
        <section className="
            px-8 py-24 md:px-16 md:py-32 xl:px-32
            bg-main"
        >
            <Link href="/dev" className="text-secondary underline underline-offset-4">
                Back to dev tools
            </Link>
            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-serif">
                UI showroom
            </h1>
            <p className="mt-4 text-secondary">
                A space to preview and compare UI components.
            </p>
        </section>

        {/* Showroom content */}
        {previews.map(preview => (
            <ComponentPreviewSection
                key={preview.filename}
                filename={preview.filename}
            >
                {preview.component}
            </ComponentPreviewSection>
        ))}
    </main>
    )
}
