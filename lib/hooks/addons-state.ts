import { addOns } from "@/data/fortales/addons"
import { create } from "zustand"
import { AddOnState } from "../types/fortales/addons"

export type AddOnsState = {
    [K in (typeof addOns)[number] as K['slug']]:
        K['supportsQuantity'] extends true
            ? { enabled: boolean, quantity: number }
            : { enabled: boolean }
}

const addOnsInitialState: AddOnsState = Object.fromEntries(
    addOns.map(el => {
        const value = el.supportsQuantity
            ? { enabled: false, quantity: 1 }
            : { enabled: false }

        return [el.slug, value]
    })
) as AddOnsState

type Store = {
    addOns: AddOnsState,
    setAddOnEnabled: (
        slug: keyof AddOnsState,
        enabled: boolean
    ) => void,
    setAddOnQuantity: (
        slug: keyof AddOnsState,
        quantity: number
    ) => void
}

export const useAddOnsStore = create<Store>()((set) => ({
    addOns: addOnsInitialState,
    setAddOnEnabled: (slug, enabled) => (
        set((state) => ({
            addOns: {
                ...state.addOns,
                [slug]: {
                    ...state.addOns[slug],
                    enabled
                }
            }
        }))
    ),
    setAddOnQuantity: (slug, quantity) => (
        set((state) => ({
            addOns: {
                ...state.addOns,
                [slug]: {
                    ...state.addOns[slug],
                    quantity
                }
            }
        }))
    )
}))