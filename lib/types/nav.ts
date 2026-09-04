export type NavDdItemType = {
    labelKey: string,
    href: string,
    external: boolean
}

type NavLinkDropdown = NavDdItemType[] | null

export type NavLinkType = {
    labelKey: string,
    href: string,
    external: boolean,
    dropdown: NavLinkDropdown
}