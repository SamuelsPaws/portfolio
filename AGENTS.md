# Project instructions

## UI and Tailwind CSS

Apply these instructions whenever creating or modifying this project's interface. Explicit instructions in the current task may override them for the stated scope only.

Before introducing visual utilities, locate and inspect the project's `globals.css`. Reuse the custom variables, semantic colors, typography utilities, and other reusable utilities declared there. This is a bounded lookup: do not audit the entire repository to infer a design system.

The overall visual direction is premium, clean, spacious, and restrained. Make deliberate choices without crowding the interface or adding unnecessary visual activity.

### Section padding — strict

Every top-level page section must follow one of these two recipes. Do not choose alternative top-level section padding unless the current task explicitly requests an exception.

- First top-level section on every page: `px-8 py-24 md:px-16 md:py-32 xl:px-32`
- Every subsequent top-level section: `px-8 py-16 md:px-16 md:py-32 xl:px-32`

The first-section recipe applies regardless of whether the content is a conventional marketing hero. The site header visually merges into the page rather than occupying separately padded space, so every page's first section needs the additional base padding to avoid appearing cropped beneath the header.

These recipes govern top-level page sections. Nested groups inside a section may use spacing appropriate to their local layout while respecting the project's general Tailwind conventions.

### Border radius — strict

The only allowed radius utilities are:

- `rounded-4xl`
- `rounded-2xl`
- `rounded-full`

Use `rounded-4xl` by default for cards, media, panels, and other rounded surfaces.

Use `rounded-2xl` primarily at smaller viewport sizes when `rounded-4xl` makes an element look disproportionate or visually awkward. When the larger radius works at wider sizes, prefer a progression such as `rounded-2xl md:rounded-4xl`. Do not use `rounded-2xl` merely for variety.

Use `rounded-full` freely for intentionally pill-shaped or circular elements. Buttons are usually pills. Circular icon containers, avatars, dots, and similar shapes should also use `rounded-full`.

Do not introduce any other `rounded-*` value unless the current task explicitly requests an exception.

### Motion and animation

Motion should feel smooth, clean, and premium. It should support hierarchy and feedback without making the interface busy.

- Use `200ms` only for genuinely tiny microinteractions, such as immediate feedback on a small button or control.
- Use `400ms` as the default duration for most transitions and interactive motion, including many relatively small elements.
- Use `600ms` for entrance and scroll-triggered reveals such as `whileInView` animations.
- Animate primarily with opacity and small transforms.
- Keep translation distances and scale changes subtle.
- Use smooth, non-bouncy easing.
- Use stagger sparingly and keep it understated.
- Avoid dramatic scaling, large travel distances, bouncing, spring overshoot, aggressive rotation, spinning, or cluttered simultaneous animations.
- Avoid continuous decorative animation unless the current task specifically calls for it.
- Respect `prefers-reduced-motion` and preserve usability when motion is reduced.

Use the project's existing animation approach. Do not add a new motion dependency solely to implement ordinary transitions.

### Typography — preferred defaults

These are strong defaults, not absolute constraints. Adapt them when the content, composition, or explicit task direction gives a good reason.

- For `h1`, prefer `text-4xl md:text-5xl xl:text-6xl` with the project's configured Source Serif 4 font family.
- For `h2`, default to `text-most-h2`.
- Choose `h3` sizing according to the component and visual hierarchy rather than forcing one universal size.
- Use `text-secondary` for most body and supporting copy.
- Use the project's reusable eyebrow component whenever an eyebrow is needed. Do not recreate eyebrow styling ad hoc.

Do not invent a class name for Source Serif 4. Reuse the font utility or established font configuration that actually exists in the project.

### Colors and borders

Prefer the semantic colors and reusable utilities declared in `globals.css`, including utilities in the style of `text-main`, `text-secondary`, and `text-br-orange-main`.

Semantic utilities are the default vocabulary, but they are not an absolute palette restriction. Use a standard Tailwind palette color when no existing semantic utility expresses a legitimate local need and the choice fits the surrounding design.

Borders are commonly `border-gray-300` or `border-gray-400`. Choose between them case by case according to the background and the contrast the element needs. Other border colors are allowed when the component or background clearly calls for them.

Do not invent plausible custom utility names. Confirm that a project utility exists before using it.

### Final UI check

Before finishing UI work, confirm that:

- every top-level section uses the exact applicable padding recipe;
- the first section receives the required additional base vertical padding;
- every introduced radius is `2xl`, `4xl`, or `full`, with `4xl` used by default;
- motion durations follow the `200ms` / `400ms` / `600ms` roles;
- animations remain subtle and uncluttered;
- existing `globals.css` utilities were preferred where appropriate;
- typography and color preferences were followed unless the design supplied a concrete reason to depart from them.
