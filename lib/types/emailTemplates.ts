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

export interface DiscoveryFormSubmission {
    businessName: string;
    businessDescription: string;
    targetAudience: string;
    brandTone: Array<
        | 'professional'
        | 'friendly'
        | 'premium'
        | 'bold'
        | 'minimal'
        | 'playful'
    >;
    brandColors?: string;
    hasAssets: Array<'photography' | 'videos' | 'logo' | 'design-guide'>;
    hasHosting: 'yes' | 'no';
    hasDomain: 'yes' | 'no';
    mainGoals: Array<
        | 'credibility'
        | 'showcase'
        | 'sell-products'
        | 'publish-content'
        | 'generate-inquiries'
        | 'bookings'
        | 'other'
    >;
    contactMethods: Array<'whatsapp' | 'email' | 'phone' | 'social-media'>;
    additional?: string;
    locale?: string;
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
