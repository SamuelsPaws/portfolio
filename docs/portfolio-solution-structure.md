# Portfolio `solution` data structure

## Mental model

Each project in `data/fortales/portfolio.ts` has a `solution` array. Every array item is one solution section in the case study, rendered in the same order as the data:

```text
project.solution
└── solution section[]
    ├── title (all locales)
    ├── copy (all locales)
    └── gallery? (optional)
        └── media[]
            ├── type: image | video
            ├── src
            └── info: null | lightbox information
                ├── position: left | right
                └── items[]
                    ├── title
                    ├── paragraph
                    └── list
```

A solution section always needs localized `title` and `copy`. Its `gallery` is optional, so a section can be text-only.

## Localized values

`StringPerLocale` requires all supported languages:

```ts
{
  en: "...",
  es: "...",
  fr: "...",
  de: "...",
  it: "...",
}
```

This applies to solution titles, solution copy, and every piece of lightbox information. A `list` is slightly different: its `content` is an array of localized values, one object per list item.

## Copy-ready example

```ts
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
      en: "How this part of the solution works...",
      es: "Cómo funciona esta parte de la solución...",
      fr: "Comment fonctionne cette partie de la solution...",
      de: "Wie dieser Teil der Lösung funktioniert...",
      it: "Come funziona questa parte della soluzione...",
    },
    gallery: [
      {
        type: "image",
        src: "/assets/galleries/project/screenshot.png",
        info: {
          position: "left",
          items: [
            {
              type: "title",
              content: {
                en: "Result title",
                es: "Título del resultado",
                fr: "Titre du résultat",
                de: "Titel des Ergebnisses",
                it: "Titolo del risultato",
              },
            },
            {
              type: "paragraph",
              content: {
                en: "A short explanation of what the screenshot shows.",
                es: "Una breve explicación de lo que muestra la captura.",
                fr: "Une brève explication de la capture.",
                de: "Eine kurze Erklärung des Screenshots.",
                it: "Una breve spiegazione dello screenshot.",
              },
            },
          ],
        },
      },
      {
        type: "image",
        src: "/assets/galleries/project/second-screenshot.png",
        info: null,
      },
    ],
  },
]
```

Use `info: null` when the media needs no explanation. When `info` exists, `position` places the info/comments card on the `left` or `right` side of the lightbox. Choose the side that avoids covering the media’s important visual content. The `items` array controls the card’s content order and accepts `title`, `paragraph`, and `list` entries.

## Rendering flow

```text
portfolio.ts
  → portfolio/[slug]/page.tsx selects the current locale
  → SolutionCard renders the section text
  → Gallery renders thumbnails and manages the selected item
  → Lightbox renders the full media and optional info panel
  → MediaInfoElement selects the current locale for each info item
```

The page localizes `solution.title` and `solution.copy` before passing them to `SolutionCard`. Gallery information remains in its full multilingual shape until `MediaInfoElement` renders it inside the client-side lightbox.

## Important behavior and constraints

- Array order matters for solution sections, gallery media, and info items.
- Omit `gallery` for a text-only solution section rather than supplying an empty array. In the current layout, text-only content still occupies half the row on desktop.
- Every media item must include `info`; use `null` when no lightbox explanation is needed.
- The grid displays up to six thumbnails. When there are more than six media items, the sixth thumbnail shows how many additional items are available; every item remains reachable in the lightbox.
- `Media` supports `image` and `video`, and the lightbox can display both. However, the current project-case-study thumbnail grid always uses an image component, so solution galleries should remain image-only until video thumbnail handling is added.
- Media currently has no `alt` field. The project grid generates generic screenshot labels rather than taking descriptive alt text from `portfolio.ts`.
- Local asset paths are rooted at `public`, so `/assets/...` points into `public/assets/...`.

## Related files

- `data/fortales/portfolio.ts` — project content
- `lib/types/fortales/portfolio.ts` — project and `solution` contract
- `lib/types/galleryTypes.ts` — media and lightbox-info contracts
- `app/[locale]/portfolio/[slug]/components/SolutionCard.tsx` — solution-section layout
- `components/gallery/` — gallery grid, lightbox, media, and info rendering
