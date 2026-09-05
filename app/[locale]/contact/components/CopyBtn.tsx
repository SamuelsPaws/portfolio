'use client'

import CustomIcon from "@/components/CustomIcon"
import clsx from "clsx"
import { useState } from "react"

const CopyBtn = ({ text }: { text: string }) => {
    const [recentlyClicked, setRecentlyClicked] = useState<boolean>(false)

    const applyRecenlyClicked = () => {
        setRecentlyClicked(true)
        setTimeout(() => {
            setRecentlyClicked(false)
        }, 3000)
    }

    const handleClick = async () => {
        if (!recentlyClicked) {
            try {
                await navigator.clipboard.writeText(text)
                applyRecenlyClicked()
            } catch (err) {
                console.error(err)
            }
        }
    }

  return (
    <button
        onClick={handleClick}
        className={clsx(
            "w-10 h-10",
            "grid place-content-center",
            recentlyClicked ? 'bg-white/20' : 'bg-transparent',
            "md:hover:bg-white/20",
            "border-2 border-black dark:border-br-white rounded-md"
        )}
    >
        <CustomIcon
            iconId={recentlyClicked ? "check" : "copy"}
            className=""
        />
    </button>
  )
}

export default CopyBtn