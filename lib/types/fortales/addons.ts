import { StringPerLocale } from "../globalTypes"

export type AddOn = {
    title: StringPerLocale,
    price: number,
    paymentDetail: StringPerLocale,
    hasUsageCosts: boolean,
    supportsQuantity: boolean,
    copy: StringPerLocale,
    includedIn: readonly string[],
    slug: string
}

export interface AddOnState {
    enabled: boolean;
    quantity?: number;
}