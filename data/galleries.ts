import { Media } from "@/lib/types/galleryTypes";

export const showcaseGalleries: { [key: string]: Media[] } = {
    hivissual: [
        {
            type: 'image',
            src: '/assets/galleries/hivissual/hero.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/hivissual/open-lightbox.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/hivissual/parallax.png',
            info: null
        },
    ],
    'ilalo-hotel': [
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/hero.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/room-slug.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/gallery-grid.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/home-food.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/benefit-cards.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/lightbox.png',
            info: null
        },
    ]
}

export const resultsGalleries: { [key: string]: Media[] } = {
    hivissual: [
        {
            type: 'image',
            src: '/assets/galleries/hivissual/home-lh.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/hivissual/ai-overview.png',
            info: {
                position: 'right',
                items: [
                    {
                        type: 'paragraph',
                        content: 'Google\'s AI Overview now knows about this business from crawling the website.'
                    }
                ]
            }
        },
        {
            type: 'image',
            src: '/assets/galleries/hivissual/portfolio-lh.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/hivissual/quote-lh.png',
            info: null
        },
    ],
    'ilalo-hotel': [
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/home-lh.png',
            info: null
        },
        {
            type: 'image',
            src: '/assets/galleries/ilalo-hotel/home-lcp.png',
            info: {
                position: 'left',
                items: [
                    {
                        type: 'paragraph',
                        content: 'An LCP of 0.33 seconds is considered extremely low, which is great for user experience and satisfying Google\'s Core Web Vitals.'
                    }
                ]
            }
        },
    ]
}