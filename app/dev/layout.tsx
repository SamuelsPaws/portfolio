import type { Metadata } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
import clsx from "clsx"
import "../globals.css"
import Header from "@/components/header/Header"
import { NextIntlClientProvider } from "next-intl"

const outfit = Outfit({
    subsets: ['latin'],
})

const serif = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
})

export const metadata: Metadata = {
    title: {
        default: "Dev tools | Fortales",
        template: "%s | Fortales Dev",
    },
    robots: {
        index: false,
        follow: false,
    },
}

interface Props {
    children: React.ReactNode
}

export default function DevLayout({ children }: Props) {
    return (
    <html lang="en" className="h-full antialiased">
        <body className={clsx(
            outfit.className,
            serif.variable,
            "bg-main text-main"
        )}>
            {children}
        </body>
    </html>
    )
}
