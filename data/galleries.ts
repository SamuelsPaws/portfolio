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
                        content: {
                            "en": "Google’s AI Overview now includes information about this business from its website.",
                            "es": "La vista general con IA de Google ya incluye información del negocio obtenida de su sitio web.",
                            "fr": "L’aperçu IA de Google inclut désormais des informations sur cette entreprise issues de son site.",
                            "de": "Googles KI-Übersicht enthält jetzt Informationen über das Unternehmen aus seiner Website.",
                            "it": "La panoramica AI di Google include ora informazioni sull’attività tratte dal suo sito."
                        }
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
                        content: {
                            "en": "The recorded LCP of 0.33 seconds shows the largest visible content element loading quickly in this measurement.",
                            "es": "El LCP registrado de 0,33 segundos muestra una carga rápida del elemento de contenido visible más grande en esta medición.",
                            "fr": "Le LCP mesuré à 0,33 seconde montre un affichage rapide du plus grand élément de contenu visible lors de ce test.",
                            "de": "Der gemessene LCP von 0,33 Sekunden zeigt, dass das größte sichtbare Inhaltselement in diesem Test schnell geladen wurde.",
                            "it": "Il LCP rilevato di 0,33 secondi mostra un caricamento rapido dell’elemento di contenuto visibile più grande in questa misurazione."
                        }
                    }
                ]
            }
        },
    ]
}
