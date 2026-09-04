'use client'
import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { useEffect, useState } from "react"

const ThemeBtn = () => {
    const [dark, setDark] = useState<boolean>(false)
    const [hasPressed, setHasPressed] = useState<boolean>(false)

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        setHasPressed(true)
        const newDark = !dark

        setDark(newDark)

        document.documentElement.classList.toggle("dark", newDark)
        localStorage.setItem("theme", newDark ? "dark" : "light")
    }

    return (
    <button
        onClick={toggleTheme}
        className="
            h-7 w-14 relative 
            px-[2px] duration-400
            flex items-center justify-between
            bg-br-white dark:bg-gray-200
            md:hover:bg-gray-200 dark:md:hover:bg-gray-300
            border border-gray-400 md:hover:border-br-black dark:md:hover:border-gray-200
            rounded-full
            shadow-[inset_-1px_2px_3px_#0004]"
    >
        <div className={clsx(
            "absolute top-1/2 -translate-y-1/2",
            dark ? "left-[calc(100%_-_2px)] -translate-x-full" : "left-[2px] translate-x-0",
            "duration-400 ease-out",
            "h-[calc(100%_-_4px)] aspect-square",
            "text-lg text-br-white",
            "bg-transparent",
            "rounded-full overflow-hidden"
        )}>
            <CustomIcon
                iconId="sun"
                className={clsx(
                    "absolute top-1/2 left-1/2 -translate-1/2 z-10",
                    dark ? "animate-fade-out-200" : hasPressed ? "animate-fade-in-200" : ""
                )}
            />
            <CustomIcon
                iconId="moon"
                className={clsx(
                    "absolute top-1/2 left-1/2 -translate-1/2 z-10",
                    "opacity-0",
                    dark ? "animate-fade-in-200" : hasPressed ? "animate-fade-out-200" : ""
                )}
            />
            {/* Bg overlays */}
            <div className={clsx(
                "absolute inset-0",
                "bg-linear-to-b from-[#ffb73b] to-[#e79405] duration-400",
                dark ? "opacity-0" : "opacity-100"
            )}/>
            <div className={clsx(
                "absolute inset-0",
                "bg-linear-to-b from-[#663fff] to-[#3c10eb] duration-400",
                dark ? "opacity-100" : "opacity-0"
            )}/>
        </div>
        <div className="
            h-[calc(100%_-_4px)] aspect-square
            flex items-center justify-center
            text-lg text-gray-500"
        >
            <CustomIcon
                iconId="sun"
            />
        </div>
        <div className="
            h-[calc(100%_-_4px)] aspect-square
            flex items-center justify-center
            text-lg text-gray-400"
        >
            <CustomIcon
                iconId="moon"
            />
        </div>
    </button>
    )
}

export default ThemeBtn