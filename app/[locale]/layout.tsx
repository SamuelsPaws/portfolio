import type { Metadata } from "next";
import { Outfit, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import Header from "@/components/header/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
})

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-corm',
})

const serif = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
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
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
        <head>
        </head>
        <body
            className={clsx(
            outfit.className,
            serif.variable,
            cormorant.variable,
            'relative'
            )}
        >
            <NextIntlClientProvider>
                <Header />
                {children}
                <Footer />
                <WhatsappFloat />
            </NextIntlClientProvider>
        </body>
    </html>
    )
}
