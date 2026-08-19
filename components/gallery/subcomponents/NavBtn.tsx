import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";

interface Props {
    onClick: () => void;
    direction: 'prev' | 'next';
}

const NavBtn = ({ onClick, direction }: Props) => {
    return (
    <button
        onClick={onClick}
        className={clsx(
            "fixed top-1/2 -translate-y-1/2 z-[9920]",
            direction === 'prev' ? "left-0" : 'right-0',
            "h-40 w-16",
            "hidden lg:block",
            "bg-white/40 lg:hover:bg-white/70 duration-200",
            "text-5xl text-gray-800",
            direction === 'prev' ? "rounded-r-full" : 'rounded-l-full'
        )}
    >
        <CustomIcon
            iconId="chevronDown"
            className={clsx(
                "absolute top-1/2 left-1/2 -translate-1/2",
                direction === 'prev' ? "rotate-90" : "-rotate-90"
            )}
        />
    </button>
    )
}

export default NavBtn