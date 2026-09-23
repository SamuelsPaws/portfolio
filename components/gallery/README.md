# Reusable gallery

`Gallery` combines a selectable thumbnail layout with a shared lightbox. A consumer chooses a grid version, supplies an ordered media array, and controls the outer grid sizing. The gallery owns selection, navigation, and lightbox state.

```tsx
<Gallery
  gridVersion="projectSlug"
  gridClassName="
    w-full grid grid-cols-2 md:grid-cols-3
    auto-rows-[140px] gap-2
    md:auto-rows-[200px] md:gap-4"
  media={project.gallery}
/>
```

## How the layout system works

The responsibilities are intentionally split:

1. `Gallery` manages the selected media and renders the shared lightbox.
2. `GalleryGrid` maps `gridVersion` to a layout from `subcomponents/grids`.
3. The selected grid decides the fixed inner composition: which items appear, their order, spans, and any special tiles.
4. `gridClassName` is passed through to that grid's outer wrapper so the page can control its master layout—width, columns, row heights, gaps, and responsive percentages—without baking those choices into the reusable grid.

This keeps the recognizable composition of each grid version stable while allowing the same layout to fit different page contexts.

The current `projectSlug` grid previews up to six ordered items. If more media exists, the sixth item becomes a `+N` tile. The complete array is still available in the lightbox, and navigation wraps from the last item to the first.

## Media

Each `Media` entry has a `type`, `src`, and optional `info`. Array order matters: it controls both the preview positions and lightbox sequence. `info` adds a localized, collapsible comments panel positioned on the left or right.

## Adding a grid version

- Create the layout in `subcomponents/grids` and keep its internal composition there.
- Add its name to `GalleryGridVersion` in `lib/types/galleryTypes.ts`.
- Add the corresponding branch in `GalleryGrid.tsx`, forwarding the media, selection setter, and external `className`.
- Keep media indices aligned with the original array; those indices open the corresponding lightbox item.

Related behavior lives in `Lightbox.tsx` and `MediaViewer.tsx`; motion definitions are centralized in `lib/motion-variants/lightboxMotion.ts`.
