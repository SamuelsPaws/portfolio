import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: "Samuel Baquero | Front-end Web Developer",
  description: "Portfolio of Samuel Baquero, a full stack developer building performant websites, SEO-focused platforms, headless CMS solutions, and interactive technical applications.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>
  }>
) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body
        className={clsx(
          outfit.className,
          "min-h-full flex flex-col relative"
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}