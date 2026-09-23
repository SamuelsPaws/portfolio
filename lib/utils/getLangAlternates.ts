import { localeCodesArray } from "@/data/locales";
import portfolioSam from "@/data/portfolioSam";

function getLangAlternates(route: string, baseUrl: string) {
    return Object.fromEntries(localeCodesArray.map(el => [el[0], `${baseUrl}/${el[1]}${route}`]))
}

export default getLangAlternates
