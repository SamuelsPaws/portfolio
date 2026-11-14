import ThemeBtn from "@/components/header/subcomponents/ThemeBtn"
import messages from "@/messages/en.json"
import { NextIntlClientProvider } from "next-intl"

export function FloatingThemePanel() {
    return (
    <div className="
        fixed top-4 right-4 md:top-8 md:right-8 z-50
        px-6 py-4
        bg-main
        border border-gray-300 rounded-2xl shadow-header"
    >
        <NextIntlClientProvider
            locale="en"
            messages={{ Reusable: messages.Reusable }}
        >
            <ThemeBtn />
        </NextIntlClientProvider>
    </div>
    )
}
