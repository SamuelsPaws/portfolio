import { localeCodesArray } from "@/data/locales";
import portfolioSam from "@/data/portfolioSam";

function getLangAlternates(route: string) {
    return Object.fromEntries(localeCodesArray.map(el => [el[0], `${portfolioSam.url}/${el[1]}${route}`]))
}

export default getLangAlternates