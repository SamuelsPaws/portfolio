import { StringPerLocale } from "../globalTypes"

export type PackageBenefitType = {
    text: StringPerLocale,
    priority: boolean
}

export type PackageType = {
    title: StringPerLocale,
    price: number,
    paymentFrequency: StringPerLocale,
    description: StringPerLocale,
    descriptionLong: StringPerLocale,
    features: PackageBenefitType[],
    everythingIn: string[],
    slug: string
}

export interface PackageTheme {
    backgroundColor: string;
    borderClasses?: string;
    checkBgColor: string;
    checkColor: string;
    themedTextColor: string;
    ctaBgColor: string;
    ctaTextColor: string;
    shadow?: string;
}