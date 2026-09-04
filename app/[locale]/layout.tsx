import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import Header from "@/components/header/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})

export const metadata: Metadata = {
    title: "Title",
    description: "",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
    <html
      lang="es"
      className="h-full antialiased"
      suppressHydrationWarning
    >
        <head>
        </head>
        <body
            className={clsx(
            outfit.className,
            'relative'
            )}
        >
            <NextIntlClientProvider>
                <Header />
                {children}
                <Footer />
            </NextIntlClientProvider>
        </body>
    </html>
    )
}