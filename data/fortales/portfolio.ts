import type { PortfolioProject } from '@/lib/types/fortales/portfolio'

export const portfolio: PortfolioProject[] = [
    {
        featured: true,
        slug: 'ilalo-hotel',
        liveUrl: 'https://hotel-ilalo.com', // TODO: Add the live website URL.
        ogImage: '/assets/ilalo-hotel.jpg',
        imgSrc: '/assets/ilalo-lifestyle.webp',
        imgW: 1536,
        imgH: 1024,
        imgAlt: {
            en: 'Ilaló Garden Hotel website cover',
            es: 'Portada del sitio web de Ilaló Garden Hotel',
            fr: 'Visuel de présentation du site web de Ilaló Garden Hotel',
            de: 'Titelbild der Website von Ilaló Garden Hotel',
            it: 'Immagine di copertina del sito web di Ilaló Garden Hotel'
        },
        eyebrow: {
            en: 'HOSPITALITY',
            es: 'HOTELERÍA',
            fr: 'HÔTELLERIE',
            de: 'HOTELLERIE',
            it: 'SETTORE ALBERGHIERO'
        },
        title: 'Ilaló Garden Hotel',
        goals: [
            {
                iconId: 'speed',
                text: {
                    en: "Make a dramatically more performant website",
                    es: "Mejorar notablemente el rendimiento del sitio",
                    fr: "Améliorer nettement les performances du site",
                    de: "Die Website deutlich leistungsfähiger machen",
                    it: "Migliorare nettamente le prestazioni del sito"
                }
            },
            {
                iconId: 'building',
                text: {
                    en: "Improve the booking journey",
                    es: "Facilitar el proceso de reserva",
                    fr: "Simplifier le parcours de réservation",
                    de: "Den Buchungsprozess vereinfachen",
                    it: "Semplificare il percorso di prenotazione"
                }
            },
            {
                iconId: 'pencil-ruler',
                text: {
                    en: "Make content editable by the hotel",
                    es: "Permitir que el hotel gestione su contenido",
                    fr: "Permettre à l’hôtel de gérer ses contenus",
                    de: "Dem Hotel die eigene Inhaltspflege ermöglichen",
                    it: "Consentire all’hotel di gestire i contenuti"
                }
            },
            {
                iconId: 'globe',
                text: {
                    en: "Support Spanish and English",
                    es: "Ofrecer contenido en español e inglés",
                    fr: "Proposer le site en espagnol et en anglais",
                    de: "Inhalte auf Spanisch und Englisch anbieten",
                    it: "Offrire contenuti in spagnolo e inglese"
                }
            },
            {
                iconId: 'search',
                text: {
                    en: "Improve search visibility",
                    es: "Mejorar la visibilidad en buscadores",
                    fr: "Améliorer la visibilité sur les moteurs de recherche",
                    de: "Die Sichtbarkeit in Suchmaschinen verbessern",
                    it: "Migliorare la visibilità sui motori di ricerca"
                }
            },
        ],
        solution: [
        {
            title: {
                en: "A faster experience",
                es: "Una experiencia más rápida",
                fr: "Une expérience plus rapide",
                de: "Ein schnelleres Erlebnis",
                it: "Un’esperienza più veloce",
            },
            copy: {
                en: "The site was built with performance in mind from the start. Optimized images, lazy loading, and lightweight animations keep pages fast and responsive, even with image-rich rooms, galleries, and hotel content.",
                es: "El sitio fue construido pensando en el rendimiento desde el inicio. Imágenes optimizadas, carga diferida y animaciones ligeras mantienen las páginas rápidas y fluidas, incluso con habitaciones, galerías y contenido visual.",
                fr: "Le site a été pensé dès le départ pour offrir d’excellentes performances. Images optimisées, chargement différé et animations légères garantissent une navigation rapide et fluide, même sur les pages riches en contenu visuel.",
                de: "Die Website wurde von Anfang an auf hohe Performance ausgelegt. Optimierte Bilder, Lazy Loading und leichte Animationen sorgen auch bei bildreichen Zimmerseiten, Galerien und Hotelinhalten für ein schnelles und flüssiges Erlebnis.",
                it: "Il sito è stato progettato fin dall’inizio con particolare attenzione alle prestazioni. Immagini ottimizzate, lazy loading e animazioni leggere mantengono la navigazione veloce e fluida anche nelle pagine ricche di foto e contenuti.",
            },
            gallery: [
                {
                    type: 'image',
                    src: '/assets/galleries/ilalo-hotel/home-lh.png',
                    info: {
                        "position": "left",
                        "items": [
                            {
                                "type": "title",
                                "content": {
                                    "en": "Strong Lighthouse results",
                                    "es": "Excelentes resultados en Lighthouse",
                                    "fr": "D’excellents résultats Lighthouse",
                                    "de": "Starke Lighthouse-Ergebnisse",
                                    "it": "Ottimi risultati Lighthouse"
                                }
                            },
                            {
                                "type": "paragraph",
                                "content": {
                                    "en": "The report shown records scores of 100 and above 90 across the audited categories. It provides a snapshot of the site’s technical quality in this test, reflecting the attention given to performance, accessibility, best practices, and SEO.",
                                    "es": "El informe muestra puntuaciones de 100 y superiores a 90 en las categorías evaluadas. Es una muestra de la calidad técnica del sitio en esta prueba y del cuidado dedicado al rendimiento, la accesibilidad, las buenas prácticas y el SEO.",
                                    "fr": "Le rapport affiche des notes de 100 et supérieures à 90 dans les catégories évaluées. Ce test donne un aperçu de la qualité technique du site et du soin apporté aux performances, à l’accessibilité, aux bonnes pratiques et au référencement.",
                                    "de": "Der Bericht zeigt Bewertungen von 100 und über 90 in den geprüften Kategorien. Dieser Test gibt einen Einblick in die technische Qualität der Website und die Arbeit an Performance, Barrierefreiheit, Best Practices und SEO.",
                                    "it": "Il report mostra punteggi di 100 e superiori a 90 nelle categorie analizzate. Il test offre un’istantanea della qualità tecnica del sito e dell’attenzione dedicata a prestazioni, accessibilità, buone pratiche e SEO."
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    src: '/assets/galleries/ilalo-hotel/home-lcp.png',
                    info: {
                        "position": "left",
                        "items": [
                            {
                                "type": "title",
                                "content": {
                                    "en": "Main content, visible sooner",
                                    "es": "El contenido principal, visible antes",
                                    "fr": "Le contenu principal s’affiche plus vite",
                                    "de": "Hauptinhalte schneller sichtbar",
                                    "it": "Il contenuto principale appare prima"
                                }
                            },
                            {
                                "type": "paragraph",
                                "content": {
                                    "en": "The recorded Largest Contentful Paint of 0.33 seconds means the largest visible content element rendered quickly in this measurement. For a photography-rich hotel website, that helps guests see the experience sooner instead of waiting for the page to take shape.",
                                    "es": "El Largest Contentful Paint registrado de 0,33 segundos indica que el elemento de contenido visible más grande se mostró rápidamente en esta medición. En un sitio de hotel con tantas imágenes, esto ayuda a los huéspedes a descubrir la experiencia sin esperar a que la página termine de tomar forma.",
                                    "fr": "Le Largest Contentful Paint mesuré à 0,33 seconde indique que le plus grand élément de contenu visible s’est affiché rapidement lors de cette mesure. Pour un site hôtelier riche en photos, cela permet aux visiteurs de découvrir plus vite les lieux, sans attendre que la page prenne forme.",
                                    "de": "Der gemessene Largest Contentful Paint von 0,33 Sekunden zeigt, dass das größte sichtbare Inhaltselement in dieser Messung schnell dargestellt wurde. Bei einer bildreichen Hotelwebsite können Gäste so früher einen Eindruck gewinnen, statt auf den Seitenaufbau zu warten.",
                                    "it": "Il Largest Contentful Paint rilevato di 0,33 secondi indica che l’elemento di contenuto visibile più grande è apparso rapidamente in questa misurazione. In un sito alberghiero ricco di foto, gli ospiti possono così scoprire prima la struttura, senza attendere che la pagina prenda forma."
                                }
                            }
                        ]
                    }
                },
            ]
        },
        {
            title: {
                en: "Content the team can manage",
                es: "Contenido que el equipo puede gestionar",
                fr: "Un contenu facile à gérer",
                de: "Inhalte, die das Team selbst verwalten kann",
                it: "Contenuti che il team può gestire",
            },
            copy: {
                en: "Rooms, menus, galleries, testimonials, and other hotel content were structured in a flexible CMS. The team can keep the website up to date without rebuilding pages or relying on a developer for every change.",
                es: "Habitaciones, menús, galerías, testimonios y otros contenidos del hotel se organizaron dentro de un CMS flexible. El equipo puede mantener el sitio actualizado sin reconstruir páginas ni depender de un desarrollador para cada cambio.",
                fr: "Les chambres, menus, galeries, témoignages et autres contenus de l’hôtel ont été structurés dans un CMS flexible. L’équipe peut ainsi maintenir le site à jour sans reconstruire les pages ni faire appel à un développeur pour chaque modification.",
                de: "Zimmer, Menüs, Galerien, Bewertungen und weitere Hotelinhalte wurden in einem flexiblen CMS strukturiert. So kann das Team die Website selbst aktuell halten, ohne Seiten neu aufzubauen oder für jede Änderung einen Entwickler zu benötigen.",
                it: "Camere, menu, gallerie, testimonianze e altri contenuti dell’hotel sono stati organizzati in un CMS flessibile. Il team può così mantenere il sito aggiornato senza ricostruire le pagine o dipendere da uno sviluppatore per ogni modifica.",
            },
        },
        {
            title: {
                en: "Designed for discovery",
                es: "Diseñado para ser encontrado",
                fr: "Pensé pour être trouvé",
                de: "Für bessere Auffindbarkeit entwickelt",
                it: "Progettato per essere trovato",
            },
            copy: {
                en: "Search visibility was built into the architecture rather than added later. Localized metadata, canonical URLs, hreflang, sitemaps, social previews, and structured data help search engines understand each page and surface the hotel to the right audience.",
                es: "La visibilidad en buscadores se integró desde la arquitectura, no como un añadido posterior. Metadatos localizados, URLs canónicas, hreflang, sitemap, vistas previas para redes y datos estructurados ayudan a los buscadores a entender cada página y mostrar el hotel al público adecuado.",
                fr: "La visibilité sur les moteurs de recherche a été intégrée directement à l’architecture du site. Métadonnées localisées, URL canoniques, hreflang, sitemap, aperçus sociaux et données structurées permettent aux moteurs de mieux comprendre chaque page et de présenter l’hôtel au bon public.",
                de: "Die Sichtbarkeit in Suchmaschinen wurde direkt in die Architektur integriert und nicht erst nachträglich ergänzt. Lokalisierte Metadaten, Canonical-URLs, hreflang, Sitemaps, Social Previews und strukturierte Daten helfen Suchmaschinen, jede Seite richtig einzuordnen und das Hotel den passenden Gästen zu zeigen.",
                it: "La visibilità sui motori di ricerca è stata integrata direttamente nell’architettura del sito. Metadati localizzati, URL canonici, hreflang, sitemap, anteprime social e dati strutturati aiutano i motori di ricerca a comprendere ogni pagina e a mostrare l’hotel al pubblico giusto.",
            },
            gallery: [
                {
                    "type": "image",
                    "src": "/assets/galleries/ilalo-hotel/gsc-summary.png",
                    "info": {
                        "position": "left",
                        "items": [
                            {
                                "type": "title",
                                "content": {
                                    "en": "28 days of growing visibility",
                                    "es": "28 días de mayor visibilidad",
                                    "fr": "28 jours de visibilité en hausse",
                                    "de": "28 Tage mit wachsender Sichtbarkeit",
                                    "it": "28 giorni di visibilità in crescita"
                                }
                            },
                            {
                                "type": "paragraph",
                                "content": {
                                    "en": "In the last 28 days, the hotel’s website received 149 clicks from Google (+964%) and 2.74K appearances in search results (+822%), compared with the previous 28 days. A strong increase in both visibility and clicks through to the website.",
                                    "es": "En los últimos 28 días, el sitio del hotel recibió 149 clics desde Google (+964%) y registró 2,74 mil apariciones en los resultados de búsqueda (+822%), frente a los 28 días anteriores. Un fuerte aumento tanto en visibilidad como en clics hacia el sitio web.",
                                    "fr": "Sur les 28 derniers jours, le site de l’hôtel a enregistré 149 clics depuis Google (+964 %) et 2,74 milliers d’apparitions dans les résultats de recherche (+822 %), par rapport aux 28 jours précédents. Une forte progression de la visibilité comme des clics vers le site.",
                                    "de": "In den letzten 28 Tagen verzeichnete die Hotelwebsite 149 Klicks über Google (+964 %) und 2,74 Tsd. Einblendungen in den Suchergebnissen (+822 %) im Vergleich zu den 28 Tagen davor. Ein deutlicher Zuwachs sowohl bei der Sichtbarkeit als auch bei den Klicks auf die Website.",
                                    "it": "Negli ultimi 28 giorni, il sito dell’hotel ha registrato 149 clic da Google (+964%) e 2,74 mila apparizioni nei risultati di ricerca (+822%), rispetto ai 28 giorni precedenti. Una forte crescita sia della visibilità sia dei clic verso il sito."
                                }
                            }
                        ]
                    }
                },
                {
                    "type": "image",
                    "src": "/assets/galleries/ilalo-hotel/gsc-stats.png",
                    "info": {
                        "position": "left",
                        "items": [
                            {
                                "type": "title",
                                "content": {
                                    "en": "More visibility, more clicks",
                                    "es": "Más visibilidad, más clics",
                                    "fr": "Plus de visibilité, plus de clics",
                                    "de": "Mehr Sichtbarkeit, mehr Klicks",
                                    "it": "Più visibilità, più clic"
                                }
                            },
                            {
                                "type": "paragraph",
                                "content": {
                                    "en": "The comparison across search terms shows strong growth in both how often the hotel appears on Google and how often people click through to its website. More appearances mean more opportunities to be discovered, while more clicks show that people are taking the next step to explore the hotel.",
                                    "es": "La comparación entre distintas búsquedas muestra un fuerte crecimiento tanto en las apariciones del hotel en Google como en los clics hacia su sitio web. Más apariciones significan más oportunidades de ser descubierto, y más clics indican que las personas dan el siguiente paso para conocer el hotel.",
                                    "fr": "La comparaison des différentes recherches montre une forte progression des apparitions de l’hôtel sur Google et des clics vers son site. Plus d’apparitions offrent davantage d’occasions de le découvrir, tandis que les clics montrent que les internautes passent à l’étape suivante pour en savoir plus sur l’hôtel.",
                                    "de": "Der Vergleich verschiedener Suchanfragen zeigt ein deutliches Wachstum: Das Hotel erscheint häufiger auf Google, und mehr Menschen klicken auf seine Website. Häufigere Einblendungen schaffen mehr Gelegenheiten, entdeckt zu werden. Mehr Klicks zeigen, dass Interessierte den nächsten Schritt machen und sich das Hotel näher ansehen.",
                                    "it": "Il confronto tra diverse ricerche mostra una forte crescita sia delle apparizioni dell’hotel su Google sia dei clic verso il suo sito. Più apparizioni offrono più occasioni di essere scoperti, mentre più clic indicano che le persone fanno il passo successivo per conoscere meglio l’hotel."
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    src: '/assets/galleries/ilalo-hotel/gsc-graph.jpg',
                    info: {
                        "position": "left",
                        "items": [
                            {
                                "type": "title",
                                "content": {
                                    "en": "From 24 to 502 appearances in one month",
                                    "es": "De 24 a 502 apariciones en un mes",
                                    "fr": "De 24 à 502 apparitions en un mois",
                                    "de": "Von 24 auf 502 Einblendungen in einem Monat",
                                    "it": "Da 24 a 502 apparizioni in un mese"
                                }
                            },
                            {
                                "type": "paragraph",
                                "content": {
                                    "en": "The Google Search Console graph shows 502 appearances in search results this month, compared with 24 last month: more than 20 times as many. It is an encouraging early sign that the hotel is becoming easier to find on Google, creating more opportunities for future guests to discover it.",
                                    "es": "El gráfico de Google Search Console muestra 502 apariciones en los resultados de búsqueda este mes, frente a las 24 del mes anterior: más de 20 veces la cifra anterior. Es una primera señal alentadora de que el hotel es más fácil de encontrar en Google, con más oportunidades para que futuros huéspedes lo descubran.",
                                    "fr": "Le graphique de Google Search Console montre 502 apparitions dans les résultats de recherche ce mois-ci, contre 24 le mois précédent : plus de 20 fois autant. C’est un premier signe encourageant que l’hôtel devient plus facile à trouver sur Google, offrant davantage d’occasions aux futurs voyageurs de le découvrir.",
                                    "de": "Die Grafik aus der Google Search Console zeigt diesen Monat 502 Einblendungen in den Suchergebnissen, gegenüber 24 im Vormonat: mehr als das Zwanzigfache. Ein ermutigendes erstes Zeichen dafür, dass das Hotel auf Google leichter zu finden ist und potenzielle Gäste mehr Gelegenheiten haben, es zu entdecken.",
                                    "it": "Il grafico di Google Search Console mostra 502 apparizioni nei risultati di ricerca questo mese, rispetto alle 24 del mese precedente: oltre 20 volte tanto. È un primo segnale incoraggiante: l’hotel è più facile da trovare su Google e ha più occasioni di farsi scoprire dai futuri ospiti."
                                }
                            }
                        ]
                    }
                },
            ]
        },
        {
            title: {
                en: "Built around booking",
                es: "Pensado para impulsar reservas",
                fr: "Pensé pour faciliter la réservation",
                de: "Auf Buchungen ausgerichtet",
                it: "Pensato per favorire le prenotazioni",
            },
            copy: {
                en: "Rooms, amenities, menus, galleries, and key hotel information are organized around the questions guests have before booking. Clear content structure and reusable page patterns make it easier to explore the hotel, compare options, and move confidently toward a reservation.",
                es: "Habitaciones, servicios, menús, galerías y la información clave del hotel están organizados alrededor de las preguntas que surgen antes de reservar. Una estructura clara y patrones de página consistentes facilitan explorar el hotel, comparar opciones y avanzar con confianza hacia una reserva.",
                fr: "Les chambres, services, menus, galeries et informations essentielles sont organisés autour des questions que se posent les voyageurs avant de réserver. Une structure claire et des modèles de page cohérents facilitent la découverte de l’hôtel, la comparaison des options et le passage à la réservation.",
                de: "Zimmer, Ausstattung, Menüs, Galerien und wichtige Hotelinformationen sind auf die Fragen ausgerichtet, die Gäste vor einer Buchung haben. Eine klare Inhaltsstruktur und wiederverwendbare Seitenmuster erleichtern es, das Hotel zu entdecken, Optionen zu vergleichen und sicher zur Buchung überzugehen.",
                it: "Camere, servizi, menu, gallerie e informazioni essenziali sono organizzati attorno alle domande che gli ospiti si pongono prima di prenotare. Una struttura chiara e modelli di pagina coerenti rendono più semplice esplorare l’hotel, confrontare le opzioni e procedere con sicurezza verso la prenotazione.",
            },
        },
        ],
        challengeCopy: {
            en: "The challenge was to bring a boutique hotel’s online presence up to date while making it easier to find and book. The website needed to combine multilingual content, clear information, and fast loading times in a smooth experience for prospective guests.",
            es: "El reto era renovar la presencia digital de un hotel boutique y facilitar que los viajeros lo encontraran y reservaran. El sitio debía combinar contenido en varios idiomas, información clara y carga rápida para ofrecer una experiencia fluida a sus futuros huéspedes.",
            fr: "Le défi était de moderniser la présence en ligne d’un hôtel-boutique tout en facilitant sa découverte et les réservations. Il fallait réunir des contenus multilingues, des informations claires et des temps de chargement courts pour offrir un parcours fluide aux futurs clients.",
            de: "Die Herausforderung bestand darin, den Onlineauftritt eines Boutique-Hotels zu modernisieren und das Finden und Buchen zu erleichtern. Mehrsprachige Inhalte, klare Informationen und kurze Ladezeiten sollten künftigen Gästen eine unkomplizierte Nutzung ermöglichen.",
            it: "La sfida era rinnovare la presenza online di un boutique hotel, rendendolo più facile da trovare e prenotare. Il sito doveva unire contenuti in più lingue, informazioni chiare e caricamenti rapidi per offrire un’esperienza fluida ai futuri ospiti."
        },
        copy: {
            en: 'A complete digital rebuild for a boutique hotel, focused on speed, discoverability, multilingual content, and a smoother booking experience.',
            es: 'Renovamos por completo el sitio web de un hotel boutique para hacerlo más rápido, mejorar su visibilidad en buscadores, ofrecer contenido en varios idiomas y facilitar las reservas.',
            fr: 'Une refonte complète du site d’un hôtel-boutique pour gagner en rapidité et en visibilité sur les moteurs de recherche, proposer du contenu multilingue et simplifier les réservations.',
            de: 'Ein komplett neuer Webauftritt für ein Boutique-Hotel: schnellere Ladezeiten, bessere Sichtbarkeit in Suchmaschinen, mehrsprachige Inhalte und ein einfacherer Buchungsprozess.',
            it: 'Il rifacimento completo del sito di un boutique hotel, per renderlo più veloce e visibile sui motori di ricerca, offrire contenuti in più lingue e semplificare le prenotazioni.'
        },
        implementations: [
            {
                en: 'Multilingual',
                es: 'Multilingüe',
                fr: 'Multilingue',
                de: 'Mehrsprachig',
                it: 'Multilingue'
            },
            {
                en: 'CMS',
                es: 'CMS',
                fr: 'CMS',
                de: 'CMS',
                it: 'CMS'
            }
        ],
        highlights: [
            {
                iconId: 'speed',
                text: {
                    en: '0.33s LCP',
                    es: 'LCP de 0,33 s',
                    fr: 'LCP de 0,33 s',
                    de: 'LCP von 0,33 s',
                    it: 'LCP di 0,33 s'
                }
            },
            {
                iconId: 'search',
                text: {
                    en: 'Increased Google Search clicks',
                    es: 'Más clics desde Google',
                    fr: 'Plus de clics depuis Google',
                    de: 'Mehr Klicks über die Google-Suche',
                    it: 'Più clic dalle ricerche su Google'
                }
            }
        ]
    },
    {
        featured: true,
        slug: 'hivissual',
        liveUrl: 'https://hivissual.com/',
        ogImage: '/assets/hivissual.jpg',
        imgSrc: '/assets/hivissual-lifestyle.jpg',
        imgW: 1233,
        imgH: 965,
        imgAlt: {
            en: 'Hivissual website cover',
            es: 'Portada del sitio web de Hivissual',
            fr: 'Visuel de présentation du site web de Hivissual',
            de: 'Titelbild der Website von Hivissual',
            it: 'Immagine di copertina del sito web di Hivissual'
        },
        eyebrow: {
            en: 'AUDIOVISUAL PRODUCTION',
            es: 'PRODUCCIÓN AUDIOVISUAL',
            fr: 'PRODUCTION AUDIOVISUELLE',
            de: 'FOTO- UND VIDEOPRODUKTION',
            it: 'PRODUZIONE AUDIOVISIVA'
        },
        title: 'Hivissual',
        // TODO: Replace gallery placeholders with screenshots of each solution.
        solution: [
            {
                "title": {
                    "en": "A portfolio that feels like the studio",
                    "es": "Un portafolio con la identidad del estudio",
                    "fr": "Un portfolio à l’image du studio",
                    "de": "Ein Portfolio mit eigener Handschrift",
                    "it": "Un portfolio che rispecchia lo studio"
                },
                "copy": {
                    "en": "Typography, layout, and restrained motion bring the studio’s visual identity into the website. Dynamic project galleries put photography and video work at the center, while optimized images and selective loading keep browsing fluid.",
                    "es": "La tipografía, la composición y las animaciones sutiles trasladan la identidad visual del estudio al sitio. Las galerías dinámicas dan protagonismo a la fotografía y al video, con imágenes optimizadas y carga selectiva para mantener una navegación fluida.",
                    "fr": "La typographie, la mise en page et des animations discrètes traduisent l’identité visuelle du studio. Les galeries dynamiques mettent photos et vidéos au premier plan, tandis que l’optimisation des images et leur chargement sélectif préservent la fluidité.",
                    "de": "Typografie, Layout und dezente Animationen übertragen die visuelle Identität des Studios auf die Website. Dynamische Projektgalerien stellen Foto- und Videoarbeiten in den Mittelpunkt. Optimierte Bilder und gezieltes Laden sorgen für flüssiges Browsen.",
                    "it": "Tipografia, impaginazione e animazioni discrete portano sul sito l’identità visiva dello studio. Le gallerie dinamiche mettono al centro foto e video, mentre immagini ottimizzate e caricamento selettivo mantengono fluida la navigazione."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/hivissual-lifestyle.jpg",
                        "info": null
                    }
                ]
            },
            {
                "title": {
                    "en": "Updates without developer support",
                    "es": "Actualizaciones sin depender de un desarrollador",
                    "fr": "Des mises à jour en autonomie",
                    "de": "Inhalte selbstständig aktualisieren",
                    "it": "Aggiornamenti in autonomia"
                },
                "copy": {
                    "en": "Projects, testimonials, and site content are managed through a headless CMS. Structured content models and client training let the studio publish new work and keep its portfolio current without asking a developer to edit the site.",
                    "es": "Los proyectos, testimonios y contenidos se gestionan desde un CMS headless. Los modelos de contenido y la capacitación permiten al estudio publicar nuevos trabajos y mantener su portafolio al día sin pedir cambios a un desarrollador.",
                    "fr": "Les projets, témoignages et contenus sont gérés dans un CMS headless. Des modèles structurés et une formation permettent au studio de publier ses nouvelles réalisations et de tenir son portfolio à jour sans intervention d’un développeur.",
                    "de": "Projekte, Kundenstimmen und Website-Inhalte werden in einem Headless CMS gepflegt. Strukturierte Inhaltsmodelle und eine Schulung ermöglichen dem Studio, neue Arbeiten ohne Unterstützung durch Entwickler zu veröffentlichen.",
                    "it": "Progetti, testimonianze e contenuti sono gestiti tramite un CMS headless. Modelli strutturati e formazione consentono allo studio di pubblicare nuovi lavori e aggiornare il portfolio senza l’intervento di uno sviluppatore."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/hivissual-lifestyle.jpg",
                        "info": null
                    }
                ]
            },
            {
                "title": {
                    "en": "From services to a tailored estimate",
                    "es": "De los servicios a una cotización a medida",
                    "fr": "Des services à une estimation sur mesure",
                    "de": "Von der Leistung zur Kostenschätzung",
                    "it": "Dai servizi a una stima su misura"
                },
                "copy": {
                    "en": "An interactive quote builder lets visitors configure services and see estimated price ranges as their selections change. It gives prospective clients a clearer starting point for discussing a project with the studio.",
                    "es": "Un cotizador interactivo permite elegir servicios y ver rangos de precios estimados según la selección. Así, los posibles clientes llegan con una idea más clara a la conversación sobre su proyecto.",
                    "fr": "Un outil de devis interactif permet de choisir des services et de voir les fourchettes de prix estimées évoluer selon la sélection. Les futurs clients disposent ainsi d’une base plus claire pour discuter de leur projet avec le studio.",
                    "de": "Ein interaktiver Kostenrechner zeigt geschätzte Preisspannen passend zu den ausgewählten Leistungen. So erhalten Interessenten eine klare Grundlage für das anschließende Projektgespräch mit dem Studio.",
                    "it": "Uno strumento interattivo permette di scegliere i servizi e vedere fasce di prezzo indicative aggiornate in base alla selezione. I potenziali clienti hanno così un punto di partenza più chiaro per discutere il progetto con lo studio."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/hivissual-lifestyle.jpg",
                        "info": null
                    }
                ]
            }
        ],
        goals: [
            {
                iconId: 'pencil-ruler',
                text: {
                    en: "Reflect the studio’s creative identity",
                    es: "Reflejar la identidad creativa del estudio",
                    fr: "Refléter l’identité créative du studio",
                    de: "Die kreative Identität des Studios vermitteln",
                    it: "Rispecchiare l’identità creativa dello studio"
                }
            },
            {
                iconId: 'speed',
                text: {
                    en: "Keep visual galleries fast and fluid",
                    es: "Crear galerías rápidas y fluidas",
                    fr: "Garder des galeries rapides et fluides",
                    de: "Schnelle und flüssige Galerien schaffen",
                    it: "Rendere le gallerie veloci e fluide"
                }
            },
            {
                iconId: 'file-solid',
                text: {
                    en: "Let the client manage projects and testimonials",
                    es: "Permitir que el cliente gestione proyectos y testimonios",
                    fr: "Permettre au client de gérer projets et témoignages",
                    de: "Projekte und Kundenstimmen selbstständig verwalten",
                    it: "Consentire al cliente di gestire progetti e testimonianze"
                }
            },
            {
                iconId: 'message-bubble',
                text: {
                    en: "Help visitors explore services and estimate costs",
                    es: "Facilitar la elección de servicios y la estimación de costos",
                    fr: "Faciliter le choix des services et l’estimation des coûts",
                    de: "Die Auswahl von Leistungen und Kostenschätzung erleichtern",
                    it: "Facilitare la scelta dei servizi e la stima dei costi"
                }
            },
        ],
        challengeCopy: {
            en: "The challenge was to translate the studio’s creative identity into a distinctive website that remained intuitive and fast. Rich galleries, typography, and subtle animations needed to showcase the work without compromising Core Web Vitals, requiring careful image loading and a measured use of motion.",
            es: "El reto era llevar la identidad creativa del estudio a un sitio web con personalidad, sin sacrificar la facilidad de uso ni la velocidad. Las galerías, la tipografía y las animaciones debían destacar el trabajo sin afectar las Core Web Vitals, con una carga de imágenes optimizada y un uso medido del movimiento.",
            fr: "Le défi était de traduire l’identité créative du studio dans un site distinctif, intuitif et rapide. Galeries, typographie et animations discrètes devaient mettre les réalisations en valeur sans compromettre les Core Web Vitals, grâce à un chargement soigné des images et à des animations utilisées avec mesure.",
            de: "Die Herausforderung war, die kreative Identität des Studios in einen eigenständigen Webauftritt zu übersetzen, der intuitiv und schnell bleibt. Galerien, Typografie und dezente Animationen sollten die Arbeiten hervorheben, ohne die Core Web Vitals zu beeinträchtigen. Dafür waren eine gezielte Bildoptimierung und ein sparsamer Einsatz von Animationen entscheidend.",
            it: "La sfida era tradurre l’identità creativa dello studio in un sito riconoscibile, intuitivo e veloce. Gallerie, tipografia e animazioni discrete dovevano valorizzare i lavori senza compromettere i Core Web Vitals, grazie a un caricamento ottimizzato delle immagini e a un uso misurato delle animazioni."
        },
        copy: {
            en: 'A portfolio website for a commercial photography and video studio, bringing its visual identity to life with dynamic project galleries, easy content management, and an interactive quote builder.',
            es: 'Un portafolio web para un estudio de fotografía y video comercial que refleja su identidad visual, con galerías dinámicas, contenido fácil de gestionar y un cotizador interactivo.',
            fr: 'Un site portfolio pour un studio de photographie et de vidéo publicitaires, fidèle à son identité visuelle, avec des galeries dynamiques, des contenus faciles à gérer et un outil interactif d’estimation de devis.',
            de: 'Eine Portfolio-Website für ein Studio für Werbefotografie und Filmproduktion, die seine visuelle Identität aufgreift – mit dynamischen Projektgalerien, einfacher Inhaltspflege und einem interaktiven Kostenrechner.',
            it: 'Un sito portfolio per uno studio di fotografia e video pubblicitari che ne valorizza l’identità visiva, con gallerie dinamiche, contenuti facili da gestire e uno strumento interattivo per stimare i preventivi.'
        },
        implementations: [
            {
                en: 'CMS',
                es: 'CMS',
                fr: 'CMS',
                de: 'CMS',
                it: 'CMS'
            }
        ],
        highlights: [
            {
                iconId: 'file-solid',
                text: {
                    en: 'Stronger brand credibility',
                    es: 'Mayor credibilidad de marca',
                    fr: 'Crédibilité renforcée',
                    de: 'Stärkeres Markenvertrauen',
                    it: 'Maggiore credibilità'
                }
            },
            {
                iconId: 'message-bubble',
                text: {
                    en: 'Content autonomy',
                    es: 'Autonomía de contenido',
                    fr: 'Gestion en autonomie',
                    de: 'Eigenständige Inhaltspflege',
                    it: 'Gestione autonoma'
                }
            }
        ]
    },
    {
        featured: true,
        slug: 'plasma-vida-center',
        liveUrl: 'https://plasmavidacenter.com/', // TODO: Add the live website URL.
        ogImage: '/assets/plasma-vida.jpg', // TODO: Replace with the project's Open Graph image.
        imgSrc: '/assets/plasma-vida-lifestyle.jpg',
        imgW: 1364,
        imgH: 1063,
        imgAlt: {
            en: 'Plasma Vida Center website cover',
            es: 'Portada del sitio web de Plasma Vida Center',
            fr: 'Visuel de présentation du site web de Plasma Vida Center',
            de: 'Titelbild der Website von Plasma Vida Center',
            it: 'Immagine di copertina del sito web di Plasma Vida Center'
        },
        eyebrow: {
            en: 'HEALTH & WELLNESS',
            es: 'SALUD Y BIENESTAR',
            fr: 'SANTÉ ET BIEN-ÊTRE',
            de: 'GESUNDHEIT UND WOHLBEFINDEN',
            it: 'SALUTE E BENESSERE'
        },
        title: 'Plasma Vida Center',
        // TODO: Replace gallery placeholders with screenshots of each solution.
        solution: [
            {
                "title": {
                    "en": "A clearer path through the services",
                    "es": "Servicios más fáciles de explorar",
                    "fr": "Des services plus faciles à explorer",
                    "de": "Leistungen übersichtlich entdecken",
                    "it": "Servizi più facili da esplorare"
                },
                "copy": {
                    "en": "IV therapy and PRP treatments are organized in a dynamic catalog with category and price filters and sorting options. Dedicated nursing pages give each service its own space, helping visitors find relevant information without mixing distinct offerings together.",
                    "es": "La sueroterapia y los tratamientos PRP se organizan en un catálogo dinámico con filtros por categoría y precio y opciones de ordenación. Las páginas de enfermería dan a cada servicio su propio espacio para encontrar información sin confundir ofertas distintas.",
                    "fr": "Les perfusions et traitements PRP sont organisés dans un catalogue dynamique avec filtres par catégorie et prix et options de tri. Des pages dédiées aux soins infirmiers présentent chaque service séparément pour faciliter la recherche d’informations.",
                    "de": "Infusionstherapien und PRP-Behandlungen sind in einem dynamischen Katalog mit Kategorie- und Preisfiltern sowie Sortierung organisiert. Eigene Seiten für Pflegeleistungen trennen die Angebote klar und erleichtern die Informationssuche.",
                    "it": "Le terapie infusionali e i trattamenti PRP sono organizzati in un catalogo dinamico con filtri per categoria e prezzo e opzioni di ordinamento. Pagine dedicate ai servizi infermieristici distinguono le diverse offerte e facilitano la ricerca di informazioni."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/plasma-vida-lifestyle.jpg",
                        "info": null
                    }
                ]
            },
            {
                "title": {
                    "en": "A simpler first conversation",
                    "es": "Una primera conversación más sencilla",
                    "fr": "Un premier échange plus simple",
                    "de": "Einfacher ins Gespräch kommen",
                    "it": "Un primo contatto più semplice"
                },
                "copy": {
                    "en": "WhatsApp links use pre-filled messages to make starting an inquiry easier. Visitors can move from exploring a service to contacting the team without composing a message from scratch or navigating a lengthy form.",
                    "es": "Los enlaces de WhatsApp incluyen mensajes prellenados para facilitar las consultas. Los visitantes pueden pasar de explorar un servicio a contactar al equipo sin escribir desde cero ni completar un formulario largo.",
                    "fr": "Les liens WhatsApp proposent des messages préremplis pour faciliter les demandes. Les visiteurs passent de la découverte d’un service à un échange avec l’équipe sans rédiger leur message de zéro ni remplir un long formulaire.",
                    "de": "WhatsApp-Links mit vorausgefüllten Nachrichten erleichtern die erste Anfrage. Besucher können nach dem Lesen eines Angebots direkt Kontakt aufnehmen, ohne eine Nachricht neu zu formulieren oder ein langes Formular auszufüllen.",
                    "it": "I link WhatsApp includono messaggi precompilati per facilitare le richieste. Dopo aver esplorato un servizio, i visitatori possono contattare il team senza scrivere da zero o compilare un lungo modulo."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/plasma-vida-lifestyle.jpg",
                        "info": null
                    }
                ]
            },
            {
                "title": {
                    "en": "A catalog the client can maintain",
                    "es": "Un catálogo que el cliente puede gestionar",
                    "fr": "Un catalogue géré en autonomie",
                    "de": "Ein Katalog in eigener Hand",
                    "it": "Un catalogo gestibile in autonomia"
                },
                "copy": {
                    "en": "The CMS powers the treatment catalog and its dynamic pages, giving the client control over ongoing content updates. A promotional carousel brings discounted offerings into view, and handoff training helps the team maintain the site independently.",
                    "es": "El CMS alimenta el catálogo de tratamientos y sus páginas dinámicas, para que el cliente gestione las actualizaciones. Un carrusel destaca las ofertas con descuento y la capacitación de entrega ayuda al equipo a mantener el sitio por su cuenta.",
                    "fr": "Le CMS alimente le catalogue de soins et ses pages dynamiques pour permettre au client de mettre les contenus à jour. Un carrousel met en avant les offres à prix réduit, et une formation accompagne la prise en main du site.",
                    "de": "Das CMS versorgt den Behandlungskatalog und seine dynamischen Seiten mit Inhalten, die der Kunde selbst aktualisieren kann. Ein Karussell hebt reduzierte Angebote hervor. Eine Schulung bei der Übergabe unterstützt die eigenständige Pflege.",
                    "it": "Il CMS alimenta il catalogo dei trattamenti e le pagine dinamiche, permettendo al cliente di aggiornare i contenuti. Un carosello mette in evidenza le offerte scontate e la formazione alla consegna aiuta il team a gestire il sito in autonomia."
                },
                "gallery": [
                    {
                        "type": "image",
                        "src": "/assets/plasma-vida-lifestyle.jpg",
                        "info": null
                    }
                ]
            }
        ],
        goals: [
            {
                iconId: 'search',
                text: {
                    en: "Make treatments and nursing services easy to find",
                    es: "Facilitar la búsqueda de tratamientos y servicios de enfermería",
                    fr: "Faciliter la recherche de soins et de services infirmiers",
                    de: "Behandlungen und Pflegeleistungen leichter auffindbar machen",
                    it: "Rendere facili da trovare trattamenti e servizi infermieristici"
                }
            },
            {
                iconId: 'globe',
                text: {
                    en: "Build a foundation for organic search growth",
                    es: "Crear una base para crecer en búsquedas orgánicas",
                    fr: "Poser les bases d’une meilleure visibilité naturelle",
                    de: "Die Grundlage für organische Sichtbarkeit schaffen",
                    it: "Creare le basi per crescere nelle ricerche organiche"
                }
            },
            {
                iconId: 'whatsapp',
                text: {
                    en: "Simplify inquiries through WhatsApp",
                    es: "Simplificar las consultas por WhatsApp",
                    fr: "Simplifier les demandes sur WhatsApp",
                    de: "Anfragen über WhatsApp vereinfachen",
                    it: "Semplificare le richieste via WhatsApp"
                }
            },
            {
                iconId: 'pencil-ruler',
                text: {
                    en: "Let the client update the catalog independently",
                    es: "Permitir que el cliente actualice el catálogo por su cuenta",
                    fr: "Permettre au client de mettre à jour le catalogue en autonomie",
                    de: "Die eigenständige Katalogpflege ermöglichen",
                    it: "Consentire al cliente di aggiornare il catalogo in autonomia"
                }
            },
        ],
        challengeCopy: {
            en: "The challenge was to organize a varied range of treatments and nursing services into a clear, easy-to-navigate website. Visitors needed to find relevant services quickly and make inquiries through WhatsApp, while the content structure had to support organic search and let the client manage the catalog independently.",
            es: "El reto era organizar una oferta variada de tratamientos y servicios de enfermería en un sitio claro y fácil de recorrer. Los visitantes debían encontrar lo que necesitaban y consultar por WhatsApp sin complicaciones, con una estructura pensada para el posicionamiento orgánico y un catálogo que el cliente pudiera gestionar por su cuenta.",
            fr: "Le défi était de présenter une offre variée de soins et de services infirmiers dans un site clair et facile à parcourir. Les visiteurs devaient trouver rapidement les services adaptés et poser leurs questions sur WhatsApp, avec une structure favorable au référencement naturel et un catalogue que le client pouvait gérer en autonomie.",
            de: "Die Herausforderung bestand darin, verschiedene Behandlungen und Pflegeleistungen übersichtlich darzustellen. Besucher sollten passende Angebote schnell finden und unkompliziert über WhatsApp anfragen können. Gleichzeitig musste die Inhaltsstruktur die organische Suche unterstützen und dem Kunden eine eigenständige Katalogpflege ermöglichen.",
            it: "La sfida era organizzare un’ampia offerta di trattamenti e servizi infermieristici in un sito chiaro e facile da navigare. I visitatori dovevano trovare rapidamente i servizi adatti e chiedere informazioni via WhatsApp, con una struttura pensata per la ricerca organica e un catalogo gestibile dal cliente in autonomia."
        },
        copy: {
            en: 'A search-focused website for a health and wellness provider, with a filterable treatment catalog, dedicated nursing service pages, and a direct path to inquiries through WhatsApp.',
            es: 'Un sitio web para un centro de salud y bienestar, pensado para mejorar su visibilidad en buscadores, con un catálogo de tratamientos con filtros, páginas de servicios de enfermería y contacto directo por WhatsApp.',
            fr: 'Un site web pensé pour le référencement d’un centre de santé et de bien-être, avec un catalogue de soins filtrable, des pages dédiées aux services infirmiers et une prise de contact simplifiée sur WhatsApp.',
            de: 'Eine suchmaschinenoptimierte Website für einen Gesundheitsanbieter, mit filterbarem Behandlungskatalog, eigenen Seiten für Pflegeleistungen und direkter Kontaktaufnahme über WhatsApp.',
            it: 'Un sito web per un centro dedicato alla salute e al benessere, pensato per la visibilità sui motori di ricerca, con un catalogo di trattamenti filtrabile, pagine dedicate ai servizi infermieristici e contatto diretto via WhatsApp.'
        },
        implementations: [
            {
                en: 'CMS',
                es: 'CMS',
                fr: 'CMS',
                de: 'CMS',
                it: 'CMS'
            }
        ],
        highlights: [
            {
                iconId: 'search',
                text: {
                    en: 'Easier service discovery',
                    es: 'Servicios fáciles de encontrar',
                    fr: 'Services faciles à trouver',
                    de: 'Leistungen leichter finden',
                    it: 'Servizi più facili da trovare'
                }
            },
            {
                iconId: 'whatsapp',
                text: {
                    en: 'Easier inquiries',
                    es: 'Consultas más sencillas',
                    fr: 'Prise de contact simplifiée',
                    de: 'Einfachere Kontaktaufnahme',
                    it: 'Contatti più semplici'
                }
            }
        ]
    }
]
