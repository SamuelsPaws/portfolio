import { motion } from "motion/react"
import Link from "next/link"
import { SetStateAction, useEffect, useRef } from "react";
import { NavDdItemType } from "@/lib/types/nav";
import NavDdItemDesk from "./NavDdItemDesk";

const variants = {
    closed: {
        opacity: 0,
        y: -10,
        pointerEvents: 'none'
    },
    open: {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        transition: {
            duration: 0.2
        }
    }
}

interface Props {
    isDdOpen: boolean;
    setIsDdOpen: React.Dispatch<SetStateAction<boolean>>;
    btnCurrent: HTMLButtonElement | null;
    items: NavDdItemType[] | null;
}

const NavDdMenuDesk = ({ isDdOpen, setIsDdOpen, btnCurrent, items }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isDdOpen) return

        function handlePointerDown(e: PointerEvent) {
            if (!ref.current) return
        
            if (!ref.current.contains(e.target as Node) && !btnCurrent?.contains(e.target as Node)) {
                setIsDdOpen(false)
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        }
    }, [btnCurrent, isDdOpen])

    const handleClick = () => {
        setIsDdOpen(false)
    }

    return (
    <motion.div
        ref={ref}
        className="
            w-max
            absolute top-full left-1/2 -translate-x-1/2
            flex flex-col
            border-x border-b border-gray-300 rounded-b-2xl overflow-hidden shadow-md"
        variants={variants}
        animate={isDdOpen ? 'open' : 'closed'}
        initial={false}
    >
        {items && items.map((el, index) => (
            <NavDdItemDesk
                key={index}
                item={el}
                onClick={handleClick}
                isLast={index >= items.length - 1}
            />
        ))}
    </motion.div>
    )
}

export default NavDdMenuDesk