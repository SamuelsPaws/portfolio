'use client'
import { motion } from "motion/react"
import LangItemBtn from "./LangItemBtn"
import clsx from "clsx";
import { useParams } from "next/navigation";
import { Ref, useEffect, useRef } from "react";

const locales = [
    'en',
    'es',
    'fr',
    'de',
    'it'
]

interface Props {
    changeLocale: (locale: string) => void;
    isMenuOpen: boolean;
    onClose: () => void;
    langBtnCurrent: HTMLButtonElement | null;
}

const LangMenu = ({ changeLocale, isMenuOpen, onClose, langBtnCurrent }: Props) => {
    const { locale } = useParams<{ locale: string }>()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
    if (!isMenuOpen) return

    function handlePointerDown(e: PointerEvent) {
        if (!ref.current) return
 
        if (!ref.current.contains(e.target as Node) && !langBtnCurrent?.contains(e.target as Node)) {
            onClose()
        }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen, onClose]);

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
        className={clsx(
            "absolute top-full left-1/2 -translate-x-1/2",
            "p-2",
            'flex gap-2',
            "bg-sky-200",
            "rounded-b-2xl",
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
            />
        )}
    </motion.div>
  )
}

export default LangMenu