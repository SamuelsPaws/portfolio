const ArrowSvgDef = () => {
    return (
        <svg
            width="0"
            height="0"
            className="absolute"
            aria-hidden="true"
        >
        <defs>
            <clipPath id="down-arrow" clipPathUnits="objectBoundingBox">
            <path
                d="M0 0
                H0.42
                C0.62 0 0.84 0.24 0.84 0.55
                V0.64
                H1
                L0.78 1
                L0.56 0.64
                H0.72
                V0.55
                C0.72 0.34 0.57 0.18 0.42 0.18
                H0
                Z"
            />
            </clipPath>
        </defs>
        </svg>
    )
}

export default ArrowSvgDef