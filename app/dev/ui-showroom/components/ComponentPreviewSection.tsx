interface Props {
    filename: string
    children: React.ReactNode
}

export function ComponentPreviewSection({ filename, children }: Props) {
    return (
    <section
        aria-label={filename}
        className="
            px-8 md:px-16
            py-16 md:py-32
            bg-main
            border-t border-gray-300"
    >
        {/* File name */}
        <h2 className="
            mb-8
            text-lg text-secondary font-mono"
        >
            {filename}
        </h2>

        {/* Full-width component preview */}
        {children}
    </section>
    )
}
