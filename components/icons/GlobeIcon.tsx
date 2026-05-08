const GlobeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer globe */}
      <circle cx="12" cy="12" r="9"/>

      {/* Vertical meridian */}
      <ellipse cx="12" cy="12" rx="4.5" ry="9"/>

      {/* Horizontal latitude */}
      <path d="M3 12h18"/>

      {/* Upper latitude */}
      <path d="M5.5 7c2 .8 4.2 1.2 6.5 1.2s4.5-.4 6.5-1.2"/>

      {/* Lower latitude */}
      <path d="M5.5 17c2-.8 4.2-1.2 6.5-1.2s4.5.4 6.5 1.2"/>
    </svg>
  )
}

export default GlobeIcon