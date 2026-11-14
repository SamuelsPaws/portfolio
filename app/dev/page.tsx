import Link from "next/link"

export default function DevPage() {
    return (
    <main id="main-content" tabIndex={-1}>
        {/* Banner */}
        <section className="
            px-8 py-24 md:px-16 md:py-32 xl:px-32
            bg-main"
        >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif">
                Dev tools
            </h1>
            <p className="mt-4 text-secondary">
                Internal tools for building and reviewing the website.
            </p>
        </section>

        {/* Tools */}
        <section className="
            px-8 py-16 md:px-16 md:py-32 xl:px-32
            bg-secondary"
        >
            <Link href="/dev/ui-showroom" className="text-main underline underline-offset-4">
                Open UI showroom
            </Link>
        </section>
    </main>
    )
}
