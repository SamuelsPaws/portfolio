import type { PortfolioProject } from '@/lib/types/fortales/portfolio'

export const portfolio: PortfolioProject[] = [
    {
        slug: 'ilalo-hotel',
        liveUrl: '', // TODO: Add the live website URL.
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
                '/assets/galleries/ilalo-hotel/home-lh.png',
                '/assets/galleries/ilalo-hotel/home-lcp.png',
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
                    en: '0.6s LCP',
                    es: 'LCP de 0,6 s',
                    fr: 'LCP de 0,6 s',
                    de: 'LCP von 0,6 s',
                    it: 'LCP di 0,6 s'
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
        slug: 'hivissual',
        liveUrl: '', // TODO: Add the live website URL.
        ogImage: '/opengraph-image.jpg', // TODO: Replace with the project's Open Graph image.
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
        slug: 'plasma-vida-center',
        liveUrl: '', // TODO: Add the live website URL.
        ogImage: '/opengraph-image.jpg', // TODO: Replace with the project's Open Graph image.
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
