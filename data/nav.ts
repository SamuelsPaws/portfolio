const navLinks = [
    {
        labelKey: 'home',
        href: '/',
        external: false,
        dropdown: null
    },
    {
        labelKey: 'projects',
        href: '/projects',
        external: false,
        dropdown: [
            {
                labelKey: 'webDevProjects',
                href: '/projects/web-dev',
                external: false
            },
            {
                labelKey: 'otherProjects',
                href: '/projects/web-dev',
                external: false
            }
        ]
    },
    {
        labelKey: 'about',
        href: '/about',
        external: false,
        dropdown: null
    },
    {
        labelKey: 'contactMe',
        href: '/contact',
        external: false,
        dropdown: null
    },
]

export default navLinks