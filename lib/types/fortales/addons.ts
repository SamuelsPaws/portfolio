import { StringPerLocale } from "../globalTypes"

export type AddOn = {
    title: StringPerLocale,
    price: number,
    paymentDetail: StringPerLocale,
    supportsQuantity: boolean,
    copy: StringPerLocale,
    slug: string
}

export interface AddOnState {
    enabled: boolean;
    quantity?: number;
}