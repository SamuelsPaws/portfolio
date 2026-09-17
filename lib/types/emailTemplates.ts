import { addOns } from "@/data/fortales/addons";

export interface CtaFormSubmission {
    name: string;
    email: string;
    company?: string;
    projectNeed: string;
    budget?: string;
    timeline?: string;
}

export interface ConfirmationEmailSubmission {
    name: string;
    email: string;
    locale?: string;
}

export interface ContactFormSumbission {
    name: string;
    email: string;
    company?: string;
    projectNeed: string;
    message?: string;
}

export interface PackageFormSubmission {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    packageName: string;
    addOnsSelected: {
        slug: (typeof addOns)[number]['slug'],
        quantity: number | null
    }[];
}
