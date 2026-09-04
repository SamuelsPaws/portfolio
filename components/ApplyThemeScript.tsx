const ApplyThemeScript = () => {
    return (
    <script
        dangerouslySetInnerHTML={{
            __html: `
                (function() {
                    const theme = localStorage.getItem("theme");

                    if (theme === "dark") {
                        document.documentElement.classList.add("dark");
                    }
                })();
            `,
        }}
    />
    )
}

export default ApplyThemeScript