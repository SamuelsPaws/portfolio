import { motion } from "motion/react"
import Link from "next/link"
import { SetStateAction, useEffect, useRef } from "react";

interface Props {
    isDdOpen: boolean;
    setIsDdOpen: React.Dispatch<SetStateAction<boolean>>;
    btnCurrent: HTMLButtonElement | null;
}

const ProjectsDd = ({ isDdOpen, setIsDdOpen, btnCurrent }: Props) => {
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
        };
    }, [btnCurrent]);

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
        ref={ref}
        className="
            w-max
            absolute top-full left-1/2 -translate-x-1/2
            flex flex-col
            border-2 border-black rounded-b-2xl overflow-hidden"
        variants={variants}
        animate={isDdOpen ? 'open' : 'closed'}
        initial={false}
    >
        <Link
            onClick={() => setIsDdOpen(false)}
            href="/projects/web-dev"
            className='
                p-4
                grid place-content-center
                bg-mywhite hover:bg-gray-300
                text-lg'
        >
            Web Development
        </Link>
        <Link
            onClick={() => setIsDdOpen(false)}
            href="/projects/other"
            className='
                p-4
                grid place-content-center
                bg-mywhite hover:bg-gray-300
                text-lg
                border-t-2 border-black'
        >
            Other Projects
        </Link>
    </motion.div>
  )
}

export default ProjectsDd