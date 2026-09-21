'use client'
import { motion } from "motion/react"
import LangItemBtn from "./LangItemBtn"
import clsx from "clsx";
import { useParams } from "next/navigation";
import { RefObject, useEffect, useRef } from "react";

const locales = [
    'en',
    'es',
    'fr',
    'de',
    'it'
]

interface Props {
    id: string;
    changeLocale: (locale: string) => void;
    isMenuOpen: boolean;
    onClose: () => void;
    langBtnRef: RefObject<HTMLButtonElement | null>;
}

const LangMenu = ({ id, changeLocale, isMenuOpen, onClose, langBtnRef }: Props) => {
    const { locale } = useParams<{ locale: string }>()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
    if (!isMenuOpen) return

    function handlePointerDown(e: PointerEvent) {
        if (!ref.current) return
 
        if (!ref.current.contains(e.target as Node) && !langBtnRef.current?.contains(e.target as Node)) {
            onClose()
        }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen, langBtnRef, onClose]);

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

  return (
    <motion.div
        id={id}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={clsx(
            "absolute top-full left-1/2 -translate-x-1/2",
            "p-0",
            'flex',
            "bg-br-white",
            "border-x border-b border-gray-300 rounded-b-2xl overflow-hidden shadow-header",
        )}
        ref={ref}
        variants={variants}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
    >
        {locales.filter(el => el !== locale).map((el, index) =>
            <LangItemBtn
                key={index}
                assocLocale={el}
                changeLocale={changeLocale}
                label={el === 'it' ? 'ITA' : el.toUpperCase()}
                isLast={index >= locales.length - 2}
            />
        )}
    </motion.div>
  )
}

export default LangMenu
