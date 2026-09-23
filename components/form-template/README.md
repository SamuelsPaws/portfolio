# Reusable form

`FormTemplate` is the shared client-side form for anything that collects data and sends an email. A consumer supplies field definitions and one or more POST endpoints; the component owns field state, browser validation, submission feedback, and the success/error modal.

## Basic usage

```tsx
import FormTemplate, {
  type FormInputDefinition,
} from "@/components/form-template/FormTemplate"

const fields: FormInputDefinition[] = [
  { id: "name", label: t("formName") },
  { id: "email", label: t("formEmail"), type: "email" },
  {
    id: "message",
    label: t("formMessage"),
    type: "textarea",
    optional: true,
    className: "col-span-2",
  },
]

<FormTemplate
  fields={fields}
  endpoints={["/api/send-contact-form", "/api/send-confirmation"]}
/>
```

Each field needs a unique `id` and a translated `label`. The `id` is also the key sent to the endpoints, so it must match the payload expected by the API route and email template. Fields are required unless `optional: true` is set.

Supported types are `text` (the default), `email`, `number`, `textarea`, `radio`, and `checkbox`. Radio fields require `options`. A checkbox without options produces one boolean value; a checkbox group produces a `string[]`. Use `className` for placement in the form's two-column grid—full-width fields normally use `col-span-2`.

## Submission behavior

On submit, the component adds the active `locale` to the field data and POSTs the same JSON payload to every endpoint with `Promise.all`. All endpoints must succeed for the success modal to appear; one failure produces the error modal. The form is cleared after either result, and closing the modal reloads the page.

Use multiple endpoints when one submission has separate effects, such as sending the internal contact email and the visitor's confirmation email.

The optional `before` and `after` props insert React content inside the form grid. Their wrappers are responsible for their own column span; `after` is currently used for the contact-form footnote.

## When changing it

- Keep field IDs, API payload types, and email templates in sync.
- User-facing field labels should come from the consuming page's translation namespace. Shared button, optional-label, and modal copy comes from `Reusable`.
- `FormTemplate.tsx` coordinates the form, `subcomponents/FormInput.tsx` defines field behavior, and `subcomponents/SubmissionModal.tsx` handles result feedback.
