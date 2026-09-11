'use client'
import SimpleH2 from "@/components/SimpleH2";
import SimpleH3 from "@/components/SimpleH3";
import { LocaleKey } from "@/lib/types/localeKey"
import SummaryAddOns from "./SummaryAddOns";
import { useAddOnsStore } from "@/lib/hooks/addons-state";
import { addOns } from "@/data/fortales/addons";
import { formatPrice } from "@/lib/utils/formatPrice";
import { myPackages } from "@/data/fortales/packages";
import FormInput from "./FormInput";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import CustomIcon from "@/components/CustomIcon";
import SummaryH3 from "./SummaryH3";

interface Props {
    locale: LocaleKey;
    packageSlug: 'starter' | 'premium';
}

const Summary = ({ locale, packageSlug }: Props) => {
    const t = useTranslations('Reusable')
    const tP = useTranslations('FortPackageSlug')
    const addOnsState = useAddOnsStore((state) => state.addOns)
    const enabledAddOns = Array.from(Object.entries(addOnsState)).map(el => {
        if ('quantity' in el[1]) {
            return {
                slug: el[0],
                enabled: el[1].enabled,
                quantity: el[1].quantity
            }
        }

        return {
            slug: el[0],
            enabled: el[1].enabled,
        }
    }).filter(el => el.enabled)

    const summaryAddOns = enabledAddOns.map((el, index) => {
        const addOn = addOns.find(a => a.slug === el.slug)

        if (addOn) {
            const price = el.quantity ? addOn.price * el.quantity : addOn.price

            return (
                <li key={index} className="
                    flex items-end gap-2
                    text-my-md text-secondary"
                >
                    {addOn.title[locale]}
                    {el.quantity && (
                        <span>
                            ({el.quantity})
                        </span>
                    )}
                    <span className="text-my-sm text-gray-500">
                        / ${formatPrice(price)}
                    </span>
                </li>
            )
        }

        return null
    })

    const myPackage = myPackages[packageSlug]
    const getEstimatedTotal = () => {
        const packagePrice = myPackage.price
        const addOnsPrice = enabledAddOns.map(el => {
            const addOnData = addOns.find(a => a.slug === el.slug)

            if (addOnData) {
                if (el.quantity) {
                    return addOnData.price * el.quantity
                }

                return addOnData.price
            }

            return null
        }).filter(el => el !== null).reduce((a, b) => a + b, 0)
        
        return packagePrice + addOnsPrice
    }

    getEstimatedTotal()

    return (
    <div className="
        w-full
        flex flex-col md:flex-row items-start gap-8 md:gap-16"
    >
        {/* Left div */}
        <div className="w-full md:w-1/2">
            <SimpleH2
                text={tP('h2Summary')}
                className="
                    mb-8 md:mb-16
                    text-most-h2"
            />
            <SummaryH3
                text={tP('h3Package')}
            />
            <p className="mb-8 text-secondary text-my-xl">
                {myPackage.title[locale]}
                <span className="italic text-my-md text-gray-500">
                    {` / $${formatPrice(myPackage.price)}`}
                </span>
            </p>
            <SummaryH3
                text={tP('h3AddOns')}
            />
            <SummaryAddOns
                addOnComponents={summaryAddOns}
                noAddOnsLabel={tP('noAddOns')}
            />
            <SummaryH3
                text={tP('h3Estimated')}
            />
            <span className="
                block
                text-3xl md:text-5xl text-main font-semibold"
            >
                ${formatPrice(getEstimatedTotal())}
            </span>
        </div>
        {/* Right div */}
        <div className="w-full md:w-1/2">
            <p className="
                w-full mb-8
                text-secondary text-my-md"
            >
                {tP('preciseCopy')}
            </p>
            <form
                action=""
                className="
                    w-full
                    p-8
                    grid grid-cols-2 items-end gap-4 md:gap-8
                    bg-main
                    border border-gray-300 rounded-4xl shadow-img-sm"
            >
                <FormInput
                    inputId="name"
                    label={t('formName')}
                    className="col-span-2"
                    optionalLabel={t('optional')}
                />
                <FormInput
                    inputId="email"
                    label={t('formEmail')}
                    className="col-span-2"
                    optionalLabel={t('optional')}
                />
                <FormInput
                    inputId="company"
                    label={t('formCompany')}
                    className="col-span-2"
                    optionalLabel={t('optional')}
                    optional
                />
                <FormInput
                    inputId="phone"
                    label={t('formPhone')}
                    className="col-span-2"
                    optionalLabel={t('optional')}
                    optional
                />
                <button
                    type="submit"
                    className={clsx(
                        "w-full col-span-2 group",
                        "py-4",
                        "flex justify-center items-center gap-3",
                        "bg-black dark:bg-br-white",
                        "text-my-md text-br-white dark:text-black",
                        "rounded-full"
                    )}
                >
                    <span className="md:group-hover:pl-4 duration-200">
                        {t('requestSubmit')}
                    </span>
                    <CustomIcon
                        iconId="arrowR"
                        className="scale-110"
                    />
                </button>
            </form>
        </div>
    </div>
    )
}

export default Summary