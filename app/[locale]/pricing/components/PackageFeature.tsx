import CustomIcon from "@/components/CustomIcon";
import { PackageTheme } from "@/lib/types/fortales/packages";
import clsx from "clsx";

interface Props {
    text: string;
    theme: PackageTheme;
}

const PackageFeature = ({ text, theme }: Props) => {
    return (
    <li className="flex items-start gap-2 md:gap-4">
        {/* Bullet icon */}
        <div className={clsx(
            "w-4 md:w-5 aspect-square",
            "translate-y-2 md:translate-y-1.5",
            "flex justify-center items-center",
            theme.checkBgColor,
            "text-my-sm", theme.checkColor,
            "rounded-full overflow-hidden"
        )}>
            <CustomIcon
                iconId="check"
            />
        </div>
        <p className="
            flex-1
            text-my-md text-secondary leading-8"
        >
            {text}
            {/* <span className="ml-2 text-br-orange-main-desatter">(Ejemplo: Inicio, Contacto, Quiénes Somos, Catálogo, Producto, Servicios)</span> */}
        </p>
    </li>
    )
}

export default PackageFeature