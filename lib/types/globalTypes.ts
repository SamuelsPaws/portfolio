import { LocaleKey } from "./localeKey";

export type StringPerLocale = { [K in LocaleKey]: string }

export type Breadcrumb = {
    name: string,
    url: string
}